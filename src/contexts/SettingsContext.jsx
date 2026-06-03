import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../api'

const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(null)
  const [agents, setAgents] = useState([])

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const [s, agentData] = await Promise.all([api.getSettings(), api.listAgents()])
        if (mounted) {
          setSettings(s)
          setAgents(Array.isArray(agentData) ? agentData : [])
        }
      } catch {}
    })()
    return () => { mounted = false }
  }, [])

  const updateSettings = async (nextRecovery, nextMessaging) => {
    const payload = {
      recoveryAgent: nextRecovery,
      messagingAgent: nextMessaging,
      recoveryAgentActive: nextRecovery !== 'Select Agent',
      messagingAgentActive: nextMessaging !== 'Select Agent'
    }
    const previousSettings = settings
    const optimisticSettings = previousSettings ? { ...previousSettings, ...payload } : payload

    setSettings(optimisticSettings)
    window.dispatchEvent(new CustomEvent('settings:updated', { detail: optimisticSettings }))

    try {
      const updated = await api.patchAgentSettings(payload)
      setSettings(updated)
      window.dispatchEvent(new CustomEvent('settings:updated', { detail: updated }))
      return updated
    } catch (error) {
      setSettings(previousSettings)
      window.dispatchEvent(new CustomEvent('settings:updated', { detail: previousSettings }))
      throw error
    }
  }

  const getAgentName = (id) => {
    if (!id || id === 'Select Agent') return 'Not selected'
    const found = (agents || []).find(a => a.id === id || a.name === id)
    return found ? (found.name || found.id) : id
  }

  return (
    <SettingsContext.Provider value={{ settings, agents, updateSettings, getAgentName }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  return useContext(SettingsContext)
}

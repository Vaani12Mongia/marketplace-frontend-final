import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api'
import { useSettings } from '../contexts/SettingsContext'

function getSession() {
  try { return JSON.parse(sessionStorage.getItem('tenant_session') || 'null') } catch { return null }
}

export default function Sidebar() {
  const [recoveryAgent, setRecoveryAgent] = useState('Select Agent')
  const [messagingAgent, setMessagingAgent] = useState('Select Agent')
  const [recoveryAgents, setRecoveryAgents] = useState([])
  const [messagingAgents, setMessagingAgents] = useState([])
  const [loading, setLoading] = useState(true)
  const { settings, updateSettings } = useSettings()
  const session = getSession()
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true

    ;(async () => {
      try {
        const response = await api.listAgents()
        const agents = Array.isArray(response) ? response : []

        if (!mounted) return

        setRecoveryAgents(agents.filter(agent => agent?.category === 'cancel'))
        setMessagingAgents(agents.filter(agent => agent?.category === 'delay'))
      } catch {
        if (mounted) {
          setRecoveryAgents([])
          setMessagingAgents([])
        }
      } finally {
        if (mounted) setLoading(false)
      }
    })()

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    if (!settings) return

    const nextRecoveryAgent = recoveryAgents.find(agent => agent?.name === settings.recoveryAgent || agent?.id === settings.recoveryAgent)
    const nextMessagingAgent = messagingAgents.find(agent => agent?.name === settings.messagingAgent || agent?.id === settings.messagingAgent)

    setRecoveryAgent(nextRecoveryAgent?.name || settings.recoveryAgent || 'Select Agent')
    setMessagingAgent(nextMessagingAgent?.name || settings.messagingAgent || 'Select Agent')
  }, [settings, recoveryAgents, messagingAgents])

  useEffect(() => {
    if (loading) return

    const defaultRecoveryAgent = recoveryAgents.find(agent => {
      const name = String(agent?.name || '').toLowerCase()
      return name === 'recovery-agent' || name.includes('recovery')
    })

    const defaultMessagingAgent = messagingAgents.find(agent => {
      const name = String(agent?.name || '').toLowerCase()
      return name === 'message-assistant' || name.includes('message-assistant') || name.includes('messaging')
    })

    if ((!settings?.recoveryAgent || settings.recoveryAgent === 'Select Agent') && defaultRecoveryAgent?.name) {
      setRecoveryAgent(defaultRecoveryAgent.name)
    }

    if ((!settings?.messagingAgent || settings.messagingAgent === 'Select Agent') && defaultMessagingAgent?.name) {
      setMessagingAgent(defaultMessagingAgent.name)
    }
  }, [loading, recoveryAgents, messagingAgents, settings])

  const logout = async () => {
    try {
      const session = getSession()
      if (session?.tenantId) {
        await api.logout({ tenantId: session.tenantId })
      }
    } catch {
      // don't block logout if the API call fails
    } finally {
      sessionStorage.removeItem('tenant_session')
      navigate('/login')
    }
  }

  // Updates are handled by SettingsContext.updateSettings

  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        {session?.companyName || 'Admin Dashboard'}
        <div className="sidebar-tenant">ID: {session?.tenantId || '—'}</div>
      </div>

      <div className="agent-section">
        <div className="agent-label">Recovery Agent</div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <span className="agent-dot green" style={{ position: 'absolute', left: 10, zIndex: 1 }} />
          <select
            className="agent-select"
            style={{ paddingLeft: 26 }}
            value={loading ? 'Loading...' : recoveryAgent}
            disabled={loading}
            onChange={e => {
              const nextValue = e.target.value
              const selectedAgent = recoveryAgents.find(agent => agent?.name === nextValue)
              setRecoveryAgent(nextValue)
              updateSettings(selectedAgent?.name || nextValue, messagingAgent).catch(()=>{})
            }}
          >
            {loading ? (
              <option value="Loading...">Loading...</option>
            ) : (
              <>
                <option value="Select Agent">Select Agent</option>
                {recoveryAgents.map(agent => (
                  <option key={agent.id} value={agent.name}>{agent.name}</option>
                ))}
              </>
            )}
          </select>
        </div>
      </div>

      <div className="agent-section">
        <div className="agent-label">Messaging Agent</div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <span className="agent-dot blue" style={{ position: 'absolute', left: 10, zIndex: 1 }} />
          <select
            className="agent-select"
            style={{ paddingLeft: 26 }}
            value={loading ? 'Loading...' : messagingAgent}
            disabled={loading}
            onChange={e => {
              const nextValue = e.target.value
              const selectedAgent = messagingAgents.find(agent => agent?.name === nextValue)
              setMessagingAgent(nextValue)
              updateSettings(recoveryAgent, selectedAgent?.name || nextValue).catch(()=>{})
            }}
          >
            {loading ? (
              <option value="Loading...">Loading...</option>
            ) : (
              <>
                <option value="Select Agent">Select Agent</option>
                {messagingAgents.map(agent => (
                  <option key={agent.id} value={agent.name}>{agent.name}</option>
                ))}
              </>
            )}
          </select>
        </div>
      </div>
      <nav style={{ marginTop: 8 }}>
       <ul className="nav-list">

  <li className="nav-item">
    <NavLink to="/app" end className={({ isActive }) => isActive ? 'active' : ''}>
      <span className="nav-icon">☰</span> Dashboard
    </NavLink>
  </li>

  {/* <li className="nav-item">
    <NavLink to="/app/brand-guidelines" className={({ isActive }) => isActive ? 'active' : ''}>
      <span className="nav-icon">📋</span> Brand Guidelines
    </NavLink>
  </li> */}

  <li className="nav-item">
    <NavLink to="/app/prompt-override" className={({ isActive }) => isActive ? 'active' : ''}>
      <span className="nav-icon">✎</span> Prompt Override
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink to="/app/message-template" className={({ isActive }) => isActive ? 'active' : ''}>
      <span className="nav-icon">✉</span> Message Template
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink to="/app/api-settings" className={({ isActive }) => isActive ? 'active' : ''}>
      <span className="nav-icon">⚙</span> URLs & API Keys
    </NavLink>
  </li>

</ul>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-email">{session?.email}</div>
        <button className="logout-btn" onClick={logout}>Sign Out</button>
      </div>
    </aside>
  )
}

import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api'
import { useSettings } from '../contexts/SettingsContext'

function getSession() {
  try { return JSON.parse(sessionStorage.getItem('user_display') || 'null') } catch { return null }
}

export default function Sidebar() {
  const [recoveryAgentId, setRecoveryAgentId] = useState('Select Agent')
  const [messagingAgentId, setMessagingAgentId] = useState('Select Agent')
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
        const agents = await api.listAgents()
        if (!mounted) return
        setRecoveryAgents((Array.isArray(agents) ? agents : []).filter(a => a?.category === 'cancel'))
        setMessagingAgents((Array.isArray(agents) ? agents : []).filter(a => a?.category === 'delay'))
      } catch {
        if (mounted) { setRecoveryAgents([]); setMessagingAgents([]) }
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => { mounted = false }
  }, [])

  useEffect(() => {
    if (!settings || loading) return

    const resolveId = (ref, pool) => {
      if (!ref || ref === 'Select Agent') return 'Select Agent'
      const found = pool.find(a => a.id === ref || a.name === ref)
      return found?.id || ref
    }

    setRecoveryAgentId(resolveId(settings.recoveryAgent, recoveryAgents))
    setMessagingAgentId(resolveId(settings.messagingAgent, messagingAgents))
  }, [settings, recoveryAgents, messagingAgents, loading])

  const logout = async () => {
    try {
      const session = getSession()
      if (session?.tenantId) await api.logout({ tenantId: session.tenantId })
    } catch {}
    finally {
      sessionStorage.removeItem('user_display')   // ← fixed
      navigate('/login', { replace: true })
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        {session?.companyName || 'Admin Dashboard'}
      </div>

      <div className="agent-section">
        <div className="agent-label">Recovery Agent</div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <span className="agent-dot green" style={{ position: 'absolute', left: 10, zIndex: 1 }} />
          <select
            className="agent-select"
            style={{ paddingLeft: 26 }}
            value={loading ? 'Loading...' : recoveryAgentId}
            disabled={loading}
            onChange={e => {
              const nextId = e.target.value
              setRecoveryAgentId(nextId)
              updateSettings(nextId, messagingAgentId).catch(() => {})
            }}
          >
            {loading ? (
              <option value="Loading...">Loading...</option>
            ) : (
              <>
                <option value="Select Agent">Select Agent</option>
                {recoveryAgents.map(a => (
                  <option key={a.id} value={a.id}>{a.name}</option>
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
            value={loading ? 'Loading...' : messagingAgentId}
            disabled={loading}
            onChange={e => {
              const nextId = e.target.value
              setMessagingAgentId(nextId)
              updateSettings(recoveryAgentId, nextId).catch(() => {})
            }}
          >
            {loading ? (
              <option value="Loading...">Loading...</option>
            ) : (
              <>
                <option value="Select Agent">Select Agent</option>
                {messagingAgents.map(a => (
                  <option key={a.id} value={a.id}>{a.name}</option>
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
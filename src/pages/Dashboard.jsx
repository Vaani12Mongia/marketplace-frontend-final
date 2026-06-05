import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api'
import { useSettings } from '../contexts/SettingsContext'

export default function Dashboard() {
  const [brandCount, setBrandCount] = useState(0)
  const [promptCount, setPromptCount] = useState(0)
  const [messageCount, setMessageCount] = useState(0)
  // const [gatewayApiHitCount, setGatewayApiHitCount] = useState(0)
  const [recoveryAgent, setRecoveryAgent] = useState('Not selected')
  const [messagingAgent, setMessagingAgent] = useState('Not selected')
  const [recoveryAgentActive, setRecoveryAgentActive] = useState(true)
  const [messagingAgentActive, setMessagingAgentActive] = useState(true)
  const [callsSuccessful, setCallsSuccessful] = useState(0)
  const [callsFailed, setCallsFailed] = useState(0)
  const [callsTotal, setCallsTotal] = useState(0)

  useEffect(() => {
  const load = async () => {
    try {
      const summary = await api.getDashboardSummary()

      setBrandCount(summary.brandCount || 0)
      setPromptCount(summary.promptCount || 0)
      setMessageCount(summary.messageCount || 0)

      setRecoveryAgent(
        summary.recoveryAgent === 'Select Agent' ? 'Not selected' : summary.recoveryAgent
      )
      setMessagingAgent(
        summary.messagingAgent === 'Select Agent' ? 'Not selected' : summary.messagingAgent
      )
      setRecoveryAgentActive(summary.recoveryAgentActive !== false)
      setMessagingAgentActive(summary.messagingAgentActive !== false)

      // ✅ No tenantId needed — backend reads it from session cookie
      const usage = await api.getGatewayUsage()
      setCallsSuccessful(usage.callsSuccessful || 0)
      setCallsFailed(usage.callsFailed || 0)
      setCallsTotal(usage.callsTotal || 0)

    } catch (err) {
      console.error(err)
    }
  }
  load()
}, [])

  const { settings, getAgentName } = useSettings()

  useEffect(() => {
    if (!settings) return
    setRecoveryAgent(getAgentName ? getAgentName(settings.recoveryAgent) : (settings.recoveryAgent === 'Select Agent' ? 'Not selected' : settings.recoveryAgent))
    setMessagingAgent(getAgentName ? getAgentName(settings.messagingAgent) : (settings.messagingAgent === 'Select Agent' ? 'Not selected' : settings.messagingAgent))
    setRecoveryAgentActive(settings.recoveryAgentActive !== false)
    setMessagingAgentActive(settings.messagingAgentActive !== false)
  }, [settings, getAgentName])

  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Overview of your admin tools</p>
      </div>

      <div className="agent-status-row">
        <div className="agent-status-card recovery">
          <div className="agent-status-type">Recovery Agent</div>
          <div className="agent-status-value">
            <span className="agent-dot green" />
            {recoveryAgent} ({recoveryAgentActive ? 'Active' : 'Inactive'})
          </div>
        </div>
        <div className="agent-status-card messaging">
          <div className="agent-status-type">Messaging Agent</div>
          <div className="agent-status-value">
            <span className="agent-dot blue" />
            {messagingAgent} ({messagingAgentActive ? 'Active' : 'Inactive'})
          </div>
        </div>
      </div>

      <div
        className="card quick-summary"
        style={{
          marginTop: 20,
          textAlign: 'center'
        }}
      >
        <h2>Gateway API Statistics</h2>

        <div
          className="summary-grid"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}
        >
          <div className="summary-item">
            <div className="number">
              {callsSuccessful}
            </div>
            <div className="label">
              Successful Calls
            </div>
          </div>

          <div className="summary-item">
            <div className="number">
              {callsFailed}
            </div>
            <div className="label">
              Failed Calls
            </div>
          </div>

          <div className="summary-item">
            <div className="number">
              {callsTotal}
            </div>
            <div className="label">
              Total Calls
            </div>
          </div>
        </div>
      </div>
      

      <div className="dash-grid">
        {/* <Link to="/brand-guidelines" className="dash-card">
          <div className="dash-card-icon purple">📋</div>
          <h3>Brand Guidelines</h3>
          <p>Upload and manage your brand documents</p>
          <div className="dash-card-stat">{brandCount}</div>
          <div className="dash-card-stat-label">Documents</div>
        </Link> */}

        <Link to="/prompt-override" className="dash-card">
          <div className="dash-card-icon green">✎</div>
          <h3>Prompt Override</h3>
          <p>Configure and manage custom prompts</p>
          <div className="dash-card-stat">{promptCount}</div>
          <div className="dash-card-stat-label">Prompts</div>
        </Link>

        <Link to="/message-template" className="dash-card">
          <div className="dash-card-icon orange">✉</div>
          <h3>Message Template</h3>
          <p>Manage SMS, Email, and WhatsApp templates</p>
          <div className="dash-card-stat">{messageCount}</div>
          <div className="dash-card-stat-label">Messages</div>
        </Link>
      </div>      
    </div>
  )
}

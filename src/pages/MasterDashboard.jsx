import { useEffect, useState } from 'react'
import { api } from '../api'

export default function MasterDashboard() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    api.getMasterDashboardSummary()
      .then(res => { if (mounted) setData(res) })
      .catch(err => { if (mounted) setError(err.message || 'Failed to load tenants') })
    return () => { mounted = false }
  }, [])

  if (error) return <div className="login-error">⚠ {error}</div>
  if (!data) return <div>Loading…</div>

  return (
    <div>
      <h1>All Tenants</h1>
      <p>
        {data.tenantCount} tenants · {data.totals.brandCount} brand guidelines ·{' '}
        {data.totals.promptCount} prompts · {data.totals.messageCount} message templates
      </p>

      {data.tenants.length === 0 ? (
        <p>No tenants registered yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: 8 }}>Company</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Brand</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Prompts</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Templates</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Recovery Agent</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Messaging Agent</th>
            </tr>
          </thead>
          <tbody>
            {data.tenants.map(t => (
              <tr key={t.tenantId} style={{ borderTop: '1px solid #e5e5e5' }}>
                <td style={{ padding: 8 }}>{t.companyName}</td>
                <td style={{ padding: 8 }}>{t.brandCount}</td>
                <td style={{ padding: 8 }}>{t.promptCount}</td>
                <td style={{ padding: 8 }}>{t.messageCount}</td>
                <td style={{ padding: 8 }}>{t.recoveryAgent}</td>
                <td style={{ padding: 8 }}>{t.messagingAgent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p style={{ marginTop: 16, color: '#666' }}>
        Select a tenant from the sidebar to view their full dashboard.
      </p>
    </div>
  )
}
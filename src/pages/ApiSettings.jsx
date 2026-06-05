import { useState, useEffect } from 'react'
import { api } from '../api'

const DB_KEY_MAP = {
  airline:    'Airline_api',
  cdp:        'Cdp_Api',
  disruption: 'Disruption_Api',
}

const DEFAULT_APIS = [
  { id: 'airline',    name: 'Airline API',    desc: 'Flight search and seat map data for recovery flow',   dot: 'purple', baseUrl: '', apiKey: '', isActive: true },
  { id: 'cdp',        name: 'CDP API',        desc: 'Customer Data Platform for passenger profile lookup', dot: 'green',  baseUrl: '', apiKey: '', isActive: true },
  { id: 'disruption', name: 'Disruption API', desc: 'Flight disruption events lookup by PNR',              dot: 'yellow', baseUrl: '', apiKey: '', isActive: true },
]

const GATEWAY_API_NAME = 'disruption'
const GATEWAY_BASE_URL = 'https://trialforredis.azure-api.net/disruption/booking'

function normalizeApis(data) {
  if (Array.isArray(data.apis) && data.apis.length > 0) return data.apis
  return DEFAULT_APIS.map(def => {
    const dbObj = data[DB_KEY_MAP[def.id]]
    if (!dbObj) return def
    return { ...def, baseUrl: dbObj.baseUrl ?? dbObj.base_url ?? '', apiKey: dbObj.apiKey ?? dbObj.api_key ?? '', isActive: dbObj.isActive ?? dbObj.is_active ?? true }
  })
}

function denormalizeApis(apisArray, existingSettings) {
  const flatKeys = Object.fromEntries(apisArray.map(a => [DB_KEY_MAP[a.id], { baseUrl: a.baseUrl, apiKey: a.apiKey, isActive: a.isActive }]))
  return { ...existingSettings, ...flatKeys, apis: apisArray }
}

export default function ApiSettings() {
  const [apis, setApis]                 = useState(DEFAULT_APIS)
  const [settings, setSettings]         = useState(null)
  const [loadError, setLoadError]       = useState(false)
  const [saveStatus, setSaveStatus]     = useState(null)

  const [gwStatus, setGwStatus]         = useState('idle')
  const [gwKey, setGwKey]               = useState('')
  const [gwRevealed, setGwRevealed]     = useState(false)
  const [gwRequesting, setGwRequesting] = useState(false)
  const [gwCopied, setGwCopied]         = useState(false)
  const [gwUrlCopied, setGwUrlCopied]   = useState(false)

  useEffect(() => { loadSettings(); loadGatewayKey() }, [])

  const loadSettings = async () => {
    try {
      const data = await api.getSettings()
      setSettings(data)
      setApis(normalizeApis(data))
      setLoadError(false)
    } catch { setLoadError(true) }
  }

  // ✅ No session check — backend reads tenantId from cookie
  const loadGatewayKey = async () => {
    try {
      const data = await api.getGatewaySubscription()
      if (data.status === 'approved') {
        setGwKey(data.primaryKey || '')
        setGwStatus('approved')
      } else if (data.status === 'pending') {
        setGwStatus('pending')
      } else {
        setGwStatus('idle')
      }
    } catch { setGwStatus('idle') }
  }

  // ✅ No session check or payload — backend reads tenantId from cookie
  const handleRequestKey = async () => {
    setGwRequesting(true)
    try {
      await api.requestGatewayKey()
      setGwStatus('pending')
    } catch { setGwStatus('error') }
    finally { setGwRequesting(false) }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(gwKey)
    setGwCopied(true)
    setTimeout(() => setGwCopied(false), 2000)
  }

  const handleUrlCopy = () => {
    navigator.clipboard.writeText(GATEWAY_BASE_URL)
    setGwUrlCopied(true)
    setTimeout(() => setGwUrlCopied(false), 2000)
  }

  const update = (id, field, value) => { setApis(prev => prev.map(a => a.id === id ? { ...a, [field]: value } : a)); setSaveStatus(null) }
  const toggleStatus = (id) => { setApis(prev => prev.map(a => a.id === id ? { ...a, isActive: !a.isActive } : a)); setSaveStatus(null) }

  const handleSave = async () => {
    if (!settings) return
    try {
      const payload = denormalizeApis(apis, settings)
      const saved = await api.saveSettings(payload)
      setSettings(saved)
      setApis(normalizeApis(saved))
      setSaveStatus('success')
      setTimeout(() => setSaveStatus(null), 3000)
    } catch { setSaveStatus('error') }
  }

  return (
    <div>
      <div className="page-header">
        <h1>URLs &amp; API Keys</h1>
        <p>Configure the external API endpoints used by the disruption pipeline</p>
      </div>

      {loadError && (
        <div className="alert alert-error" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Failed to load settings</span>
          <button className="btn btn-outline" style={{ fontSize: 13, padding: '4px 12px' }} onClick={loadSettings}>Retry</button>
        </div>
      )}
      {saveStatus === 'success' && <div className="alert alert-success">Settings saved successfully!</div>}
      {saveStatus === 'error'   && <div className="alert alert-error">Failed to save settings. Please try again.</div>}

      <div className="api-grid">
        {apis.map(item => (
          <div key={item.id} className="api-card">
            <div className="api-card-header">
              <span className={`api-dot ${item.dot}`} />
              <div><h3>{item.name}</h3><p>{item.desc}</p></div>
            </div>
            <div className="api-field">
              <label>Base URL</label>
              <input type="text" placeholder="http://127.0.0.1:9001" value={item.baseUrl} onChange={e => update(item.id, 'baseUrl', e.target.value)} />
            </div>
            <div className="api-field">
              <label>API Key</label>
              <input type="password" placeholder="Enter API key" value={item.apiKey} onChange={e => update(item.id, 'apiKey', e.target.value)} />
            </div>
            <button className={`status-toggle ${item.isActive ? 'active' : 'inactive'}`} onClick={() => toggleStatus(item.id)}>
              {item.isActive ? 'Active' : 'Inactive'}
            </button>
          </div>
        ))}

        {/* Gateway Key card */}
        <div className="api-card">
          <div className="api-card-header">
            <span className="api-dot blue" />
            <div>
              <h3>Gateway Key</h3>
              <p>Your marketplace gateway subscription key</p>
            </div>
          </div>

          {gwStatus === 'idle' && (
            <div className="api-field">
              <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>No gateway key yet. Request one to get started.</p>
              <button className="btn btn-primary" onClick={handleRequestKey} disabled={gwRequesting} style={{ width: '100%' }}>
                {gwRequesting ? 'Requesting…' : 'Request Key'}
              </button>
            </div>
          )}

          {gwStatus === 'pending' && (
            <div className="api-field">
              <div className="alert alert-warning" style={{ fontSize: 13 }}>Request submitted — awaiting admin approval.</div>
            </div>
          )}

          {gwStatus === 'approved' && (
            <>
              <div className="api-field">
                <label>Subscription Key</label>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input type={gwRevealed ? 'text' : 'password'} value={gwKey} readOnly style={{ flex: 1, background: '#f5f5f5', cursor: 'default' }} />
                  <button className="btn btn-outline" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => setGwRevealed(r => !r)}>
                    {gwRevealed ? 'Hide' : 'Show'}
                  </button>
                  <button className="btn btn-outline" style={{ fontSize: 12, padding: '4px 10px' }} onClick={handleCopy}>
                    {gwCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="api-field">
                <label>API</label>
                <input type="text" value={GATEWAY_API_NAME} readOnly style={{ background: '#f5f5f5', cursor: 'default' }} />
              </div>
              <div className="api-field">
                <label>Base URL</label>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input type="text" value={GATEWAY_BASE_URL} readOnly style={{ flex: 1, background: '#f5f5f5', cursor: 'default', fontSize: 12 }} />
                  <button className="btn btn-outline" style={{ fontSize: 12, padding: '4px 10px' }} onClick={handleUrlCopy}>
                    {gwUrlCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </>
          )}

          {gwStatus === 'error' && (
            <div className="alert alert-error" style={{ fontSize: 13 }}>
              Something went wrong.{' '}
              <button className="btn btn-outline" style={{ fontSize: 12 }} onClick={handleRequestKey}>Retry</button>
            </div>
          )}

          <button className={`status-toggle ${gwStatus === 'approved' ? 'active' : 'inactive'}`} style={{ cursor: 'default' }}>
            {gwStatus === 'approved' ? 'Active' : gwStatus === 'pending' ? 'Pending' : 'Not requested'}
          </button>
        </div>
      </div>

      <div className="save-row">
        <button className="btn btn-primary" style={{ padding: '10px 28px', marginTop: 20 }} onClick={handleSave}>
          Save Settings
        </button>
      </div>
    </div>
  )
}
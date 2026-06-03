const API_BASE = import.meta.env.VITE_API_BASE;
const STATUS_ENDPOINT = import.meta.env.VITE_STATUS_ENDPOINT || '/api/status/live';

function getSession() {
  try { return JSON.parse(sessionStorage.getItem('tenant_session') || 'null') } catch { return null }
}

async function request(path, options = {}) {
  const session = getSession()
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) }
  if (session?.dbName) headers['x-db-name'] = session.dbName
  if (session?.tenantId) headers['x-tenant-id'] = session.tenantId

  const response = await fetch(`${API_BASE}${path}`, { headers, ...options })

  if (!response.ok) {
    let message = 'Request failed'
    try {
      const errorBody = await response.json()
      message = errorBody?.detail || message
    } catch {
      message = response.statusText || message
    }
    throw new Error(message)
  }

  if (response.status === 204) return null
  return response.json()
}

async function authRequest(path, payload) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const body = await response.json()
  if (!response.ok) throw new Error(body?.detail || 'Request failed')
  return body
}

async function statusRequest() {
  const response = await fetch(STATUS_ENDPOINT, {
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    let message = 'Failed to load status'
    try {
      const errorBody = await response.json()
      message = errorBody?.detail || message
    } catch {
      message = response.statusText || message
    }
    throw new Error(message)
  }

  return response.json()
}

async function azureStatusRequest() {
  const response = await fetch('/api/azure-status', {
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    let message = 'Failed to load Azure status'
    try {
      const errorBody = await response.json()
      message = errorBody?.detail || message
    } catch {
      message = response.statusText || message
    }
    throw new Error(message)
  }

  return response.json()
}

export const api = {
  login: (payload) => authRequest('/auth/login', payload),
  register: (payload) => authRequest('/auth/register', payload),
  logout: (payload) => authRequest('/auth/logout', payload),
  submitContactQuery: (payload) => request('/contact', { method: 'POST', body: JSON.stringify(payload) }),

  getDashboardSummary: () => request('/dashboard-summary'),
  getGatewayUsage: (tenantId) => request(`/gateway/usage/${tenantId}`),

  createBrandGuideline: (payload) => request('/brand-guidelines', { method: 'POST', body: JSON.stringify(payload) }),
  updateBrandGuideline: (id, payload) => request(`/brand-guidelines/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deleteBrandGuideline: (id) => request(`/brand-guidelines/${id}`, { method: 'DELETE' }),

  listPrompts: () => request('/prompts'),
  createPrompt: (payload) => request('/prompts', { method: 'POST', body: JSON.stringify(payload) }),
  updatePrompt: (id, payload) => request(`/prompts/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deletePrompt: (id) => request(`/prompts/${id}`, { method: 'DELETE' }),

  listMessageTemplates: () => request('/message-templates'),
  createMessageTemplate: (payload) => request('/message-templates', { method: 'POST', body: JSON.stringify(payload) }),
  updateMessageTemplate: (id, payload) => request(`/message-templates/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deleteMessageTemplate: (id) => request(`/message-templates/${id}`, { method: 'DELETE' }),

  getSettings: () => request('/settings'),
  saveSettings: (payload) => request('/settings', { method: 'PUT', body: JSON.stringify(payload) }),
  patchAgentSettings: (payload) => request('/settings/agents', { method: 'PATCH', body: JSON.stringify(payload) }),

  getSystemPrompt: () => request('/system-prompt'),
  listAgents: () => request('/agents'),

  getLiveStatus: () => statusRequest(),
  getAzureStatus: () => azureStatusRequest(),

  // Gateway Key (APIM subscription)
  getGatewaySubscription: (tenantId) => request(`/gateway/subscription?tenantId=${tenantId}`),
  requestGatewayKey: (payload) => request('/gateway/request', { method: 'POST', body: JSON.stringify(payload) }),
  approveGatewayKey: (tenantId) => request('/gateway/approve', { method: 'POST', body: JSON.stringify({ tenantId }) }),

  getHealthStatus: async () => {
    const response = await fetch('/api/health', { headers: { 'Content-Type': 'application/json' } })
    if (!response.ok) {
      let message = 'Failed to load health status'
      try {
        const errorBody = await response.json()
        message = errorBody?.detail || message
      } catch {
        message = response.statusText || message
      }
      throw new Error(message)
    }
    return response.json()
  },
}
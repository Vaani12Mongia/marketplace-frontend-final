import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
// import BrandGuidelines from './pages/BrandGuidelines'
import PromptOverride from './pages/PromptOverride'
import MessageTemplate from './pages/MessageTemplate'
import ApiSettings from './pages/ApiSettings'
import Login from './pages/Login'
import Landingpage from './pages/Landingpage'
import Privacy from './pages/Privacy'
import Status from './pages/Status'
 
function getSession() {

  try { return JSON.parse(sessionStorage.getItem('tenant_session') || 'null') } catch { return null }

}
 
function ProtectedLayout() {

  const session = getSession()

  if (!session?.dbName) {

    sessionStorage.removeItem('tenant_session')

    return <Navigate to="/login" replace />

  }

  return (
<div className="app-layout">
<Sidebar />
<main className="main-content">
<Routes>
<Route index element={<Dashboard />} />
{/* <Route path="brand-guidelines" element={<BrandGuidelines />} /> */}
<Route path="prompt-override" element={<PromptOverride />} />
<Route path="message-template" element={<MessageTemplate />} />
<Route path="api-settings" element={<ApiSettings />} />
</Routes>
</main>
</div>

  )

}
 
export default function App() {

  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Landingpage />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/status" element={<Status />} />
<Route path="/login" element={<Login />} />
<Route path="/app/*" element={<ProtectedLayout />} />
 
        {/* Redirect wrong URLs to correct ones */}
{/* <Route path="/brand-guidelines" element={<Navigate to="/app/brand-guidelines" replace />} /> */}
<Route path="/prompt-override" element={<Navigate to="/app/prompt-override" replace />} />
<Route path="/message-template" element={<Navigate to="/app/message-template" replace />} />
<Route path="/api-settings" element={<Navigate to="/app/api-settings" replace />} />
</Routes>
</BrowserRouter>

  )

}
 

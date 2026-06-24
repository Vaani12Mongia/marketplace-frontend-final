// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import Sidebar from './components/Sidebar'
// import Dashboard from './pages/Dashboard'
// // import BrandGuidelines from './pages/BrandGuidelines'
// import PromptOverride from './pages/PromptOverride'
// import MessageTemplate from './pages/MessageTemplate'
// import ApiSettings from './pages/ApiSettings'
// import Login from './pages/Login'
// import Landingpage from './pages/Landingpage'
// import Privacy from './pages/Privacy'
// import Status from './pages/Status'

// function getSession() {
//   try { return JSON.parse(sessionStorage.getItem('user_display') || 'null') } catch { return null }
// }

// function ProtectedLayout() {
//   const session = getSession()
//   if (!session?.email) {
//     sessionStorage.removeItem('user_display')
//     return <Navigate to="/login" replace />
//   }

//   return (
//     <div className="app-layout">
//       <Sidebar />
//       <main className="main-content">
//         <Routes>
//           <Route index element={<Dashboard />} />
//           {/* <Route path="brand-guidelines" element={<BrandGuidelines />} /> */}
//           <Route path="prompt-override" element={<PromptOverride />} />
//           <Route path="message-template" element={<MessageTemplate />} />
//           <Route path="api-settings" element={<ApiSettings />} />
//         </Routes>
//       </main>
//     </div>
//   )
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landingpage />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/status" element={<Status />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/app/*" element={<ProtectedLayout />} />

//         {/* Redirect wrong URLs to correct ones */}
//         {/* <Route path="/brand-guidelines" element={<Navigate to="/app/brand-guidelines" replace />} /> */}
//         <Route path="/prompt-override" element={<Navigate to="/app/prompt-override" replace />} />
//         <Route path="/message-template" element={<Navigate to="/app/message-template" replace />} />
//         <Route path="/api-settings" element={<Navigate to="/app/api-settings" replace />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
import MasterDashboard from './pages/MasterDashboard'
import { api } from './api'

function ProtectedLayout() {
  const [status, setStatus] = useState('loading') // 'loading' | 'ok' | 'unauthenticated'
  const [me, setMe] = useState(null)

  // Live check against the server on every mount — needed because a master's
  // session can change server-side (switch-tenant/exit-tenant) without the
  // client otherwise knowing, and a stale sessionStorage read would miss that.
  useEffect(() => {
    let mounted = true
    api.getMe()
      .then(data => {
        if (!mounted) return
        sessionStorage.setItem('user_display', JSON.stringify(data))
        setMe(data)
        setStatus('ok')
      })
      .catch(() => {
        if (!mounted) return
        sessionStorage.removeItem('user_display')
        setStatus('unauthenticated')
      })
    return () => { mounted = false }
  }, [])

  if (status === 'loading') return null
  if (status === 'unauthenticated') return <Navigate to="/login" replace />

  const isMasterUnassigned = me?.role === 'master' && !me?.actingTenantId

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        {isMasterUnassigned ? (
          <Routes>
            <Route path="/*" element={<MasterDashboard />} />
          </Routes>
        ) : (
          <Routes>
            <Route index element={<Dashboard />} />
            {/* <Route path="brand-guidelines" element={<BrandGuidelines />} /> */}
            <Route path="prompt-override" element={<PromptOverride />} />
            <Route path="message-template" element={<MessageTemplate />} />
            <Route path="api-settings" element={<ApiSettings />} />
          </Routes>
        )}
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
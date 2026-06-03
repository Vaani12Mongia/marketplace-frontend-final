import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'
import aionosDarkLogo from '../assets/Aionos Dark logo.svg'

const REFRESH_SECONDS = 21

const NAV_ITEMS = ['Home', 'Solution', 'Features', 'Impact', 'Contact']

const STATUS_DATE_OPTIONS = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
}

function formatCheckedAt(value) {
  if (!value) return '—'

  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value

  return parsed.toLocaleString('en-IN', STATUS_DATE_OPTIONS)
}

export default function Status() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')
  const [countdown, setCountdown] = useState(REFRESH_SECONDS)
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true

    async function loadStatus() {
      setRefreshing(true)
      setError('')

      try {
        const payload = await api.getAzureStatus()
        if (!mounted) return

        let servicesArr = Array.isArray(payload?.services) ? payload.services : []

        try {
          const health = await api.getHealthStatus()
          const healthy = health?.status === 'ok'
          servicesArr = servicesArr.concat({
            key: 'backend-health',
            name: 'Backend API Health',
            description: 'Backend health endpoint',
            region: 'local',
            lastChecked: new Date().toISOString(),
            status: healthy ? 'Operational' : 'Down',
          })
        } catch (e) {
          servicesArr = servicesArr.concat({
            key: 'backend-health',
            name: 'Backend API Health',
            description: e?.message || 'Health check failed',
            region: 'local',
            lastChecked: new Date().toISOString(),
            status: 'Down',
          })
        }

        setServices(servicesArr)
      } catch (err) {
        if (!mounted) return

        setError(err?.message || 'Unable to load status')
      } finally {
        if (!mounted) return

        setLoading(false)
        setRefreshing(false)
        setCountdown(REFRESH_SECONDS)
      }
    }

    loadStatus()

    const refreshTimerId = window.setInterval(loadStatus, REFRESH_SECONDS * 1000)
    const countdownTimerId = window.setInterval(() => {
      setCountdown(current => (current <= 1 ? REFRESH_SECONDS : current - 1))
    }, 1000)

    return () => {
      window.clearInterval(refreshTimerId)
      window.clearInterval(countdownTimerId)
    }
  }, [])

  function handleRefresh() {
    setCountdown(REFRESH_SECONDS)
    setRefreshing(true)

    api
      .getAzureStatus()
      .then(async (payload) => {
        let servicesArr = Array.isArray(payload?.services) ? payload.services : []
        try {
          const health = await api.getHealthStatus()
          const healthy = health?.status === 'ok'
          servicesArr = servicesArr.concat({
            key: 'backend-health',
            name: 'Backend API Health',
            description: 'Backend health endpoint',
            region: 'local',
            lastChecked: new Date().toISOString(),
            status: healthy ? 'Operational' : 'Down',
          })
        } catch (e) {
          servicesArr = servicesArr.concat({
            key: 'backend-health',
            name: 'Backend API Health',
            description: e?.message || 'Health check failed',
            region: 'local',
            lastChecked: new Date().toISOString(),
            status: 'Down',
          })
        }

        setServices(servicesArr)
        setError('')
      })
      .catch(err => {
        setError(err?.message || 'Unable to load status')
      })
      .finally(() => {
        setLoading(false)
        setRefreshing(false)
      })
  }

  const hasRows = services.length > 0
  const allOperational = hasRows && services.every(service => service.status === 'Operational')

  return (
    <div className="service-status-page">
      <header className="header service-status-header">
        <div className="container header-inner">
          <a href="/" className="logo">
            <img src={aionosDarkLogo} alt="Aionos" className="wordmark" />
          </a>
          <nav className="nav">
            {NAV_ITEMS.map(item => (
              <a key={item} href={`/#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <button className="btn-primary" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </header>

      <main className="service-status-main">
        <div className="container service-status-shell">
          <section className="status-hero-card">
            <div className="status-hero-copy">
              <p className="eyebrow">Service Status</p>
              <h1 className="status-title">Service Status</h1>
              <p className="status-subtitle">Consolidated service uptime and availability snapshot.</p>
            </div>

            <div className={`status-global-pill ${allOperational ? 'is-good' : 'is-warning'}`}>
              <span className={`status-live-dot ${allOperational ? 'is-good' : 'is-warning'}`} />
              <span>{allOperational ? 'All systems operational' : 'Service issues detected'}</span>
            </div>
          </section>

          <section className="status-table-card" aria-label="Service status table">
            <div className="status-table-scroll">
              <table className="status-table">
                <thead>
                  <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Status</th>
                    <th scope="col">Region</th>
                    <th scope="col">Last Checked</th>
                  </tr>
                </thead>

                <tbody>
                  {error ? (
                    <tr>
                      <td className="status-empty-state" colSpan={4}>{error}</td>
                    </tr>
                  ) : null}

                  {loading && !hasRows && !error ? (
                    <tr>
                      <td className="status-empty-state" colSpan={4}>Loading live service status...</td>
                    </tr>
                  ) : null}

                  {services.map(service => (
                    <tr key={service.key}>
                      <td className="status-service-cell">
                        <div className="status-service-name">{service.name}</div>
                        <div className="status-service-description">{service.description}</div>
                      </td>

                      <td>
                        <span className={`status-operational-pill ${service.status !== 'Operational' ? 'is-down' : 'is-good'}`}>
                            <span className={`status-status-dot ${service.status !== 'Operational' ? 'is-down' : ''}`} />
                            {service.status}
                          </span>
                      </td>

                      <td>
                        <span className="status-region-pill">{service.region}</span>
                      </td>

                      <td className="status-last-checked">{formatCheckedAt(service.lastChecked)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="status-footer">
              <div className="status-refresh-copy">Auto refresh in {countdown}s</div>
              <button type="button" onClick={handleRefresh} disabled={refreshing} className="status-refresh-button">
                {refreshing ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

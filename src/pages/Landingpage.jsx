import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import aionosDarkLogo from '../assets/Aionos Dark logo.svg'

const nav = ["Home", "Solution", "Features", "Impact", "Future" ];

const problems = [
  ["⏰", "Delayed Notifications", "Passengers receive updates too late, missing critical rebooking windows."],
  ["⚠️", "Cancellation Chaos", "Mass cancellations leave thousands stranded with no clear next steps."],
  ["👥", "Overwhelmed Staff", "Airport teams can't manually handle every disrupted traveller."],
  ["📉", "Lost Loyalty", "Frustrated passengers churn — damaging brand and revenue."],
];

const solutions = [
  ["⚡", "Proactive, Not Reactive", "Shift from scrambling after disruptions to anticipating ahead of time."],
  ["💬", "Crystal-Clear Messaging", "Every passenger gets precise, jargon-free updates they can act on."],
  ["🛡️", "Passenger Confidence", "When travellers know what's happening, they stay calm and stay loyal."],
];

const steps = [
  ["01", "Disruption Detected", "Real-time ingestion of flight data flags delays, cancellations, and gate changes instantly."],
  ["02", "Passengers Identified", "AI segments affected passengers, including connecting and high-priority travellers."],
  ["03", "Personalized Messages Sent", "Tailored, multi-channel communication delivered with clear next steps."],
  ["04", "Resolution Tracked", "Outcomes are measured and learning improves the next response."],
];

const features = [
  ["🤖", "Automated Disruption Handling", "Zero-touch processing of delays, cancellations, and schedule changes."],
  ["✅", "Personalized Communication", "Messages tailored to each passenger's itinerary and preferences."],
  ["📍", "Clear Next-Step Guidance", "Actionable instructions: wait, rebook, or switch to an alternative."],
  ["📡", "Omni-Channel Delivery", "Push notifications, SMS, email, WhatsApp — wherever passengers are."],
  ["🛣️", "Complex Itinerary Handling", "Seamless management of multi-leg, codeshare, and interline journeys."],
  ["🛡️", "Operational Resilience", "Built to handle peak disruption events without missing a beat."],
];

const before = ["Delayed or unclear updates", "High dependency on airport staff", "Confusion, stress, and frustration", "Missed rebooking windows"];
const after = ["Timely and crystal-clear information", "Reduced need for manual assistance", "Confident, informed passengers", "Faster decision-making and resolution"];

const scale = [
  ["📊", "Peak-Ready Performance", "Handles thousands of disrupted passengers simultaneously during large-scale events."],
  ["🧱", "Flexible Integration", "Adapts to different airline operational environments and existing tech stacks."],
  ["🌐", "Consistent at Scale", "Every passenger receives the same quality of communication, whether 10 or 10,000."],
];

const future = [
  ["🧠", "Advanced Personalization", "Behaviour-based messaging that adapts to each traveller's preferences."],
  ["📈", "Predictive Insights", "Anticipate disruptions before they happen using historical and real-time data."],
  ["🌍", "Multi-Language Support", "Communicate with passengers in their preferred language, globally."],
];

const faqs = [
  {
    question: 'What does this platform do?',
    answer:
      'This platform helps airlines automatically manage passenger communication during flight delays and cancellations using AI-powered real-time event handling.',
  },
  {
    question: 'How are passengers notified during disruptions?',
    answer:
      'Passengers receive instant updates and travel assistance through automated communication workflows triggered by operational events such as delays or cancellations.',
  },
  {
    question: 'Can the system automate disruption management workflows?',
    answer:
      'Yes. The platform automates disruption detection, passenger notifications, delay handling, cancellation workflows, and recovery communication with minimal manual intervention.',
  },
  {
    question: 'Does the platform work in real time?',
    answer:
      'Yes. The system continuously monitors operational events and instantly responds with intelligent, context-aware communication flows.',
  },
  {
    question: 'Is the platform scalable for enterprise airline operations?',
    answer:
      'Yes. The platform is built on scalable cloud infrastructure using Microsoft Azure AI services and event-driven architecture to support large-scale airline operations efficiently.',
  },
];

const Index = () => {
  const navigate = useNavigate()
  const [contactForm, setContactForm] = useState({ name: '', query: '' })
  const [contactStatus, setContactStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const contactStatusTimer = useRef(null)

  useEffect(() => {
    return () => {
      if (contactStatusTimer.current) {
        clearTimeout(contactStatusTimer.current)
      }
    }
  }, [])

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setContactStatus({ type: '', message: '' })

    if (contactStatusTimer.current) {
      clearTimeout(contactStatusTimer.current)
    }

    setContactStatus({
      type: 'success',
      message: 'Your query has been sent successfully.',
    })
    setContactForm({ name: '', query: '' })
    setIsSubmitting(false)
    contactStatusTimer.current = setTimeout(() => {
      setContactStatus({ type: '', message: '' })
    }, 5000)
  }

  return (
    <div>
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo">
            <img src={aionosDarkLogo} alt="Aionos" className="wordmark" />
        </a>
        <nav className="nav">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <button className="btn-primary" onClick={() => navigate('/login')}>
            Login
          </button>
      </div>
    </header>

    <section id="home" className="hero">
      <div className="container">
        <h1>
          Proactive AI for Flight Disruption Management. Built on{" "}
          <span className="accent">Aviation Disruption Resiliency.</span>
        </h1>
        <p>
          Aviation Disruption Resiliency understands disruptions before passengers feel them and delivers timely,
          personalized communication to resolve, not just respond. It's <span className="accent">Outcome</span>-driven.
        </p>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">The Problem</p>
          <h2 className="h2">Disruptions Are Inevitable. Poor Communication Isn't.</h2>
          <p className="lead">Imagine a passenger on a connecting flight. Their first leg is delayed, and the connection is missed. Without timely information, stress builds and trust breaks down.</p>
        </div>
        <div className="grid grid-4" style={{ marginTop: 64 }}>
          {problems.map(([i, t, d]) => (
            <div key={t} className="card">
              <div className="icon">{i}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="solution">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Solution</p>
          <h2 className="h2">AI-Powered Disruption Management</h2>
          <p className="lead">Aviation Disruption Resiliency transforms how airlines communicate during disruptions, automatically, personally, and at scale.</p>
        </div>
        <div className="grid grid-3" style={{ marginTop: 64, gap: 48 }}>
          {solutions.map(([i, t, d]) => (
            <div key={t} className="feature">
              <div className="icon-circle">{i}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How It Works</p>
          <h2 className="h2">Four Steps to Calm</h2>
        </div>
        <div className="steps">
          {steps.map(([n, t, d]) => (
            <div key={n} className="step">
              <span className="step-num">{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="features">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Key Features</p>
          <h2 className="h2">Everything Airlines Need</h2>
        </div>
        <div className="grid grid-3" style={{ marginTop: 64, gap: 48 }}>
          {features.map(([i, t, d]) => (
            <div key={t} className="plain">
              <div className="icon">{i}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="impact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Passenger Experience</p>
          <h2 className="h2">Before vs After Aviation Disruption Resiliency</h2>
        </div>
        <div className="compare">
          <div className="col">
            <h3>Before Implementation</h3>
            <ul>
              {before.map((it) => (
                <li key={it}><span className="mark x">✕</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
          <div className="col after">
            <h3>After Implementation</h3>
            <ul>
              {after.map((it) => (
                <li key={it}><span className="mark check">✓</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="grid grid-3" style={{ gap: 64 }}>
          {scale.map(([i, t, d]) => (
            <div key={t} className="feature">
              <div className="icon-circle">{i}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="future">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What's Next</p>
          <h2 className="h2">Future Enhancements</h2>
          <p className="lead">We're continuously evolving Aviation Disruption Resiliency to stay ahead of airline needs.</p>
        </div>
        <div className="grid grid-3" style={{ marginTop: 64, gap: 48 }}>
          {future.map(([i, t, d]) => (
            <div key={t} className="plain">
              <div className="icon">{i}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="faqs">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">FAQS</p>
          <h2 className="h2">Frequently Asked Questions</h2>
          <p className="lead">Find quick answers about AirAlert AI and how it supports airline operations.</p>
        </div>
        <div className="faq-grid" style={{ marginTop: 56 }}>
          <div className="faq-intro">
            <p className="eyebrow">Helpful Information</p>
            <h3>Clear answers for airline teams and stakeholders</h3>
            <p>
              These answers cover the core capabilities of the platform, including disruption handling,
              passenger communication, and cloud scalability.
            </p>
            <p className="faq-support">
              For any more questions or doubts, contact at <a href="mailto:support@aionos.ai">support@aionos.ai</a>.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="faq-item" open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* <section id="contact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="h2">Contact Us</h2>
          <p className="lead">Have questions or want a demo? Send us a message and we'll get back to you shortly.</p>
        </div>
        <div className="contact-list" style={{ marginTop: 32 }}>
          <div className="contact-card contact-form">
            {contactStatus.message ? (
              <div className={`toast ${contactStatus.type === 'success' ? 'toast-success' : ''}`} style={{ position: 'static', marginBottom: 20, width: '100%', maxWidth: '100%' }}>
                <div className="toast-message">{contactStatus.message}</div>
                <button className="toast-close" type="button" aria-label="Dismiss" onClick={() => setContactStatus({ type: '', message: '' })}>×</button>
              </div>
            ) : null}

            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" placeholder="Your name" value={contactForm.name} onChange={handleContactChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-query">Your Query</label>
                <textarea id="contact-query" name="query" placeholder="Write your question or message here" value={contactForm.query} onChange={handleContactChange} required />
              </div>

              <div className="modal-actions">
                <button className="btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> */}

    <footer className="footer">
      <div className="container footer-inner">
        <span className="logo">
          <img src={aionosDarkLogo} alt="Aionos" className="wordmark" />
        </span>
        <nav className="footer-nav">
          <a className="status-nav-link" href="/privacy">Privacy Policy</a>
          <a className="status-nav-link" href="/status">Status</a>
        </nav>
        <p className="copy">© 2026 Aviation Disruption Resiliency. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}
;

export default Index;

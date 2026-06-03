import React, { useState } from "react";
import aionosDarkLogo from '../assets/Aionos Dark logo.svg'

export default function Privacy() {
  const [activeTab, setActiveTab] = useState("azure");
  return (
    <div>
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo">
            <img src={aionosDarkLogo} alt="Aionos" className="wordmark" />
          </a>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#solution">Solution</a>
            <a href="#features">Features</a>
            <a href="#impact">Impact</a>
            <a href="#future">Future</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="btn-primary" onClick={() => window.location.href = '/login'}>
            Login
          </button>
        </div>
      </header>

      <section className="privacy-section" style={{ paddingBottom: 72 }}>
        <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "32px",
                  marginTop: "24px",
                }}
              >
                <button
                  onClick={() => setActiveTab("azure")}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                    backgroundColor: activeTab === "azure" ? "#2563eb" : "#e5e7eb",
                    color: activeTab === "azure" ? "#fff" : "#111827",
                  }}
                >
                  Microsoft Azure
                </button>

                <button
                  onClick={() => setActiveTab("ibm")}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                    backgroundColor: activeTab === "ibm" ? "#2563eb" : "#e5e7eb",
                    color: activeTab === "ibm" ? "#fff" : "#111827",
                  }}
                >
                  IBM
                </button>
              </div>
        {activeTab === "azure" && (
          <>
            <div className="section-head">
              <h2 className="h2">Aviation Disruption Resiliency — Standard Contract</h2>
              <p className="lead">Formal agreement and terms for the Aviation Disruption Recovery Agent offering.</p>
            </div>
            <div className="container" style={{ paddingTop: 12 }}>
              
              {/* <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 32, marginBottom: 20, color: '#6366f1' }}>Azure</h3> */}

              <div style={{ maxWidth: 920, margin: '0 auto', color: '#374151', lineHeight: 1.8, fontSize: '15px' }}>

                <p style={{ marginBottom: 20, fontStyle: 'italic', color: '#6b7280' }}>
                  This Standard Contract ("Agreement") is entered into as of the date of execution of the applicable Order (the "Effective Date"), between the customer identified in the Order ("Customer") and AionOS India Private Limited, a company incorporated in India with its registered office at Third Floor, Dr. Gopal Das, Bhawan, 28 Barakhamba Road, Connaught Place, New Delhi – 110001 ("Publisher").
                </p>

                <p style={{ marginBottom: 20, fontStyle: 'italic', color: '#6b7280' }}>
                  This Agreement constitutes the entire and exclusive agreement between the parties with respect to the Offering and supersedes all prior and contemporaneous representations, understandings, and agreements relating to its subject matter. Nothing in this paragraph limits any claim for fraudulent misrepresentation. By subscribing to the Offering, Customer represents and warrants that it has the authority to enter into this Agreement on behalf of itself and, where applicable, its Affiliates. Capitalised terms have the meanings given in Section 13 (Definitions).
                </p>

                <div style={{ marginBottom: 20, padding: 16, backgroundColor: '#f3f4f6', borderLeft: '4px solid #6366f1', borderRadius: 4 }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>Microsoft Disclaimer</p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>
                    Microsoft has created the template on which this Agreement is based to facilitate a transaction between Publisher and Customer. Both parties acknowledge that Microsoft is not a party to this Agreement, nor in any way responsible for the parties' actions or obligations under this Agreement. Microsoft's relationship with Customer and Publisher is solely governed by Microsoft's respective agreements with those parties; Microsoft otherwise disclaims all liability resulting from this Agreement. Where the Offering is listed on the Microsoft Marketplace, that listing is for discovery purposes only; the commercial terms governing the Subscription are set out in the applicable Order and this Agreement.
                  </p>
                </div>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>1. Licence</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.1 Licence Grant.</h3>
                <p>
                  Offerings are licensed, not sold. Upon subscription, and subject to Customer's compliance with this Agreement, Publisher grants Customer a non-exclusive, non-transferable, limited licence to access and use the Offering solely for Customer's own internal airline operations during the active Subscription term. The Offering may incorporate components subject to open-source software licences. Where such components are included, the applicable open-source licence terms are incorporated by reference and take precedence over this Section to the extent of any inconsistency.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.2 Subscription Term.</h3>
                <p>
                  The initial Subscription term is twelve (12) months from the Effective Date ("initial Subscription Year"). Subscriptions renew automatically for successive twelve (12) month periods ("Subscription Year") at Publisher's then-current list price for the Offering, unless either party gives written notice of non-renewal at least sixty (60) days before the end of the then-current Subscription Year. Publisher will give Customer at least thirty (30) days' prior written notice of any price change before it applies to a renewal. If Customer does not wish to renew at the new price, Customer may give notice of non-renewal before the new price takes effect and no further charges will apply after the end of the then-current Subscription Year. Subscription fees and billing cadence are as set out in the applicable Order.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.3 Authorised Users.</h3>
                <p>
                  Customer is responsible for controlling access to the Offering and for all use of the Offering by its Authorised Users. Customer must ensure that all Authorised Users comply with this Agreement. The Offering is intended for use by Customer's Operations Control Centre (OCC) personnel responsible for initiating and approving passenger notifications during disruption events. The maximum number of Authorised Users is as set out in the applicable Order. Customer must not permit access by more Authorised Users than are licensed under the applicable Order.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.4 Reservation of Rights.</h3>
                <p>
                  All rights in and to the Offering not expressly granted under this Agreement are reserved by Publisher. The Offering is protected by copyright and other applicable intellectual property laws. No licence, right, or interest is granted by implication, waiver, or estoppel. Customer acquires no ownership interest in the Offering by virtue of this Agreement.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.5 Restrictions.</h3>
                <p>Customer must not, and must ensure its Authorised Users do not:</p>
                <ul style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>copy, modify, adapt, translate, reverse engineer, decompile, or disassemble any part of the Offering, or attempt to do so;</li>
                  <li style={{ marginBottom: 8 }}>introduce any software or component into the Offering that would cause Publisher's proprietary code to become subject to any open-source licence obligation;</li>
                  <li style={{ marginBottom: 8 }}>circumvent or disable any technical limitation or access control in the Offering, including the HITL approval workflow;</li>
                  <li style={{ marginBottom: 8 }}>use the Offering for any unlawful purpose or in violation of any applicable law or regulation, including applicable aviation consumer protection regulations;</li>
                  <li style={{ marginBottom: 8 }}>use the Offering in or for the benefit of any entity subject to applicable sanctions laws or export control restrictions, including entities listed on any sanctions list maintained by the United Nations, the United States, or the European Union;</li>
                  <li style={{ marginBottom: 8 }}>use the Offering to send passenger communications that are misleading, inaccurate, or non-compliant with applicable aviation regulations (including EU Regulation 261/2004 or equivalent national rules);</li>
                  <li style={{ marginBottom: 8 }}>transfer, sublicence, rent, lease, lend, or otherwise make the Offering available to any third party; or</li>
                  <li style={{ marginBottom: 8 }}>use the Offering to provide outsourced or hosted services to third parties.</li>
                </ul>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.6 Non-Transferability.</h3>
                <p>
                  The Subscription and all rights granted under this Agreement are personal to Customer and may not be transferred or assigned without Publisher's prior written consent, except as part of a merger, acquisition, or transfer of substantially all of Customer's assets, in which case Section 12.4 applies.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.7 Feedback.</h3>
                <p>
                  Where Customer voluntarily provides Feedback to Publisher, Customer grants Publisher a non-exclusive, royalty-free, worldwide, perpetual licence to use, reproduce, modify, distribute, and incorporate such Feedback into Publisher's products and services solely for product development and improvement purposes. Feedback that Customer designates as confidential in writing at the time of submission will be treated as Confidential Information and may not be disclosed to third parties or used in a manner that would identify Customer without Customer's prior written consent. Publisher's use of Feedback does not give rise to any claim of inventorship, co-ownership, or compensation by Customer.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.8 Customer Configuration and HITL Responsibility.</h3>
                <p>
                  The Offering supports a Human-in-the-Loop ("HITL") workflow in which Customer's Authorised Users (OCC personnel) initiate and approve passenger notifications before they are dispatched. Customer must enable and maintain the HITL approval process for all passenger-facing communications. Customer must provide Publisher with at least five (5) Business Days' prior written notice before disabling or materially modifying the HITL workflow. Where Customer disables or bypasses the HITL workflow without such notice, Publisher's liability exclusion under Section 9.3 applies in full and Publisher's warranty under Section 7.1.3 is suspended in respect of any AI Outputs generated during that period. Customer is solely responsible for:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>ensuring that all required HITL approvals are completed before messages are dispatched to passengers;</li>
                  <li style={{ marginBottom: 8 }}>configuring all message templates, brand guidelines, prompt overrides, escalation thresholds, and eligibility rules via the Admin Dashboard;</li>
                  <li style={{ marginBottom: 8 }}>the accuracy, completeness, and integrity of all Passenger Data, airline API connections, CDP data, and third-party inputs supplied to the Offering;</li>
                  <li style={{ marginBottom: 8 }}>testing the Offering's behaviour in a non-production environment before go-live;</li>
                  <li style={{ marginBottom: 8 }}>ensuring that its use of the Offering complies with all aviation regulations, consumer protection laws, data protection obligations, and messaging regulations applicable to Customer's operations and the jurisdictions in which it operates; and</li>
                  <li style={{ marginBottom: 8 }}>all decisions made or approved by its personnel through the HITL process.</li>
                </ol>
                <p>
                  Publisher has no liability for outcomes arising from Customer's configuration decisions, threshold settings, HITL approvals, or inaccurate inputs. Publisher's warranty obligations under Section 7.1.3 are limited to the Offering's messaging and decisioning logic failing to perform in accordance with the functionality described in the Documentation. Publisher's exclusion of liability for AI Outputs under Section 9.3 applies regardless of whether the HITL workflow was enabled, modified, or bypassed by Customer. Publisher's SLA obligations and warranty under Section 7.1.3 are suspended to the extent that Offering performance is degraded by changes to, unavailability of, or incompatibility in Customer's airline APIs, CDP, or third-party data sources.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.9 AI Model Training.</h3>
                <p>
                  Publisher may use anonymised, aggregated, non-personally-identifiable operational metrics (such as system performance indicators and interaction pattern statistics) derived from Customer's use of the Offering to improve the Offering's underlying AI models. For the avoidance of doubt, "operational metrics" means system-level data that has been stripped of all identifiers and cannot be reverse-engineered to identify any individual, airline, or transaction; it does not include Customer configuration data, Airline Customisations, or Passenger Data. Publisher will not use Passenger Data, Airline Customisations, or any other Customer Data to train any AI or machine learning model without Customer's express prior written consent. Section 2.4.3 governs the prohibition on using Passenger Data for model training.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.10 Airline Customisations.</h3>
                <p>
                  Message templates, brand guidelines, prompt overrides, and business policies configured by Customer through the Admin Dashboard ("Airline Customisations") remain the intellectual property of Customer. Publisher acquires no rights in Airline Customisations other than the limited licence to process them as necessary to provide the Offering. Publisher will treat all Airline Customisations as Confidential Information.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.11 Ownership of AI-Generated Outputs.</h3>
                <p>
                  All passenger-facing messages and communications generated by the Offering in response to Customer's instructions, Airline Customisations, and Passenger Data ("AI Outputs") shall be owned by Customer upon generation. Publisher makes no claim to ownership of AI Outputs. Publisher does not warrant the accuracy, completeness, or regulatory compliance of any AI Output, as set out in Section 7.2. Customer is solely responsible for any disclosure, labelling, or transparency obligations applicable to AI Outputs under applicable law, including the EU Artificial Intelligence Act and equivalent national legislation.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.12 No Free Trial.</h3>
                <p>
                  The Offering is available on a paid subscription basis only. No free trial is offered. All pricing is bespoke and available upon request from Publisher's sales team. The Subscription commences, and charges begin to accrue, on the Effective Date as set out in the applicable Order.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.13 Documentation Maintenance.</h3>
                <p>
                  Publisher will maintain Documentation that accurately describes the Offering's material functionality. Publisher will not materially reduce the functionality described in the Documentation without providing Customer at least thirty (30) days' prior written notice. Customer's right to terminate for cause under Section 11.3 applies if any such reduction constitutes a material breach of Section 7.1.3.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.14 Insurance.</h3>
                <p>
                  Publisher will maintain throughout the term of this Agreement: (a) professional indemnity / errors and omissions insurance with a minimum coverage of USD 1,000,000 per occurrence and in the aggregate; (b) cyber liability and data breach insurance with a minimum coverage of USD 1,000,000 per occurrence and in the aggregate; and (c) general commercial liability insurance with a minimum coverage of USD 2,000,000 per occurrence. Publisher will provide Customer with a certificate of insurance evidencing such coverage within ten (10) Business Days of a written request. Publisher will notify Customer promptly if any such policy lapses or is materially reduced.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>2. Compliance Obligations</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.1 Data Privacy.</h3>
                <p>
                  Customer and Publisher agree that the Customer is the controller of Personal Data and Publisher is the processor of such data, except when (a) Customer acts as a processor of Personal Data, in which case Publisher is a sub-processor or (b) stated otherwise in any Offering-specific terms. To the extent applicable, the parties will abide by the requirements of Data Protection Laws and execute a data processing agreement. Customer consents to the processing of Personal Data by Publisher and its Affiliates, and their respective agents and Subcontractors, as provided in this Agreement. Before providing Personal Data to Publisher, Customer will obtain all required consents from third parties (including Customer's contacts, partners, distributors, administrators, and employees) under applicable privacy and Data Protection Law.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.2 Aviation Regulatory Compliance.</h3>
                <p>
                  Customer is solely responsible for ensuring that all passenger communications generated through the Offering comply with applicable aviation consumer protection regulations, including EU Regulation 261/2004, United States DOT passenger protection rules, and equivalent national regulations in the jurisdictions in which Customer operates. Publisher does not warrant that any AI Output, message template, or compensation eligibility determination generated by the Offering will comply with any specific regulatory framework. Customer must independently verify the legal compliance of all communications before they are dispatched to passengers.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.3 Messaging Channel Compliance.</h3>
                <p>
                  Customer is solely responsible for ensuring that all use of communication channels through the Offering including SMS, WhatsApp, email, mobile push notifications, and in-app messages complies with applicable electronic communications laws, including the Telephone Consumer Protection Act (TCPA) in the United States, the EU ePrivacy Directive and national implementing legislation, the Telecom Regulatory Authority of India (TRAI) Do Not Disturb regulations, and equivalent messaging and marketing regulations in each jurisdiction in which Customer operates. Publisher provides the technical capability to send communications; Publisher makes no representation that use of any particular channel is lawful in any particular jurisdiction.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.4 Customer Audit Right.</h3>
                <p>
                  Customer may, no more than once per Subscription Year and on at least thirty (30) days' prior written notice, request that Publisher: (a) complete a written security and data processing questionnaire; or (b) provide a summary of its most recent third-party security audit report (SOC 2 Type II, ISO 27001 certification, or equivalent), subject to appropriate redactions to protect third-party confidential information. Publisher will respond to such requests within thirty (30) days. Customer may conduct a more comprehensive on-site or third-party audit only where: (i) a confirmed data breach involving Customer Data has occurred; or (ii) a competent regulatory authority requires it. Any audit must be conducted during normal business hours, on reasonable notice, at Customer's cost, by a mutually agreed qualified third party bound by confidentiality obligations. Publisher may require that any auditor execute a non-disclosure agreement before access is granted.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.5 Business Continuity.</h3>
                <p>
                  Publisher will maintain a documented business continuity and disaster recovery plan appropriate to the nature of the Offering. Publisher will test the plan at least annually and will provide Customer with a written summary of the plan and the most recent test results upon reasonable written request. The business continuity plan will address, at minimum, recovery time objectives for the Offering in the event of a failure of Publisher's primary infrastructure.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>3. Confidentiality</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.1 Scope.</h3>
                <p>
                  This Section governs the treatment of all Confidential Information exchanged between the parties in connection with this Agreement and supersedes any prior non-disclosure agreement between the parties to the extent it relates to the subject matter of this Agreement.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.2 Definition.</h3>
                <p>
                  "Confidential Information" means all non-public, confidential, or proprietary information disclosed by one party to the other in any form or medium, whether before or after the Effective Date, including: business, financial, technical, operational, legal, and strategic information; trade secrets, algorithms, software, source code, and product plans; information concerning personnel, customers, suppliers, and partners; Passenger Data, Customer Data, Airline Customisations, Support Data, the terms of this Agreement, and Customer's account credentials. Confidential Information does not include information that: (a) is or becomes publicly available other than through a breach of a confidentiality obligation; (b) was lawfully in the receiving party's possession before disclosure without restriction; (c) is received from a third party free of any obligation of confidence; or (d) is independently developed by the receiving party without reference to the disclosing party's Confidential Information.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.3 Obligations.</h3>
                <p>Each party shall:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>protect the other's Confidential Information using at least the same degree of care it applies to its own confidential information, and in any event no less than reasonable care;</li>
                  <li style={{ marginBottom: 8 }}>use the other's Confidential Information only for the purposes of performing its obligations or exercising its rights under this Agreement; and</li>
                  <li style={{ marginBottom: 8 }}>disclose Confidential Information only to its Representatives who have a genuine need to know and who are bound by confidentiality obligations no less protective than those in this Agreement. Each party remains responsible for any breach of this Section by its Representatives.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.4 Prohibition on Reverse Engineering.</h3>
                <p>
                  The receiving party must not reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, structure, or underlying logic of any software or other embodiment of the disclosing party's Confidential Information, except to the extent expressly permitted by mandatory applicable law that cannot be excluded by contract.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.5 Compelled Disclosure.</h3>
                <p>
                  A party may disclose Confidential Information to the extent required by applicable law, court order, or regulatory authority, provided that it: (a) gives the disclosing party prompt prior written notice to the extent legally permitted; and (b) limits the disclosure to the minimum extent required. The disclosing party will have the right to seek a protective order or equivalent relief before disclosure is made.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.6 Duration.</h3>
                <p>
                  Confidentiality obligations apply:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>in respect of Passenger Data and Customer Data that has been returned or destroyed in accordance with Section 11.7.3, for three (3) years from the date of such return or destruction; where data is retained pursuant to a legal obligation, the confidentiality obligation continues for as long as such data is retained and for three (3) years thereafter;</li>
                  <li style={{ marginBottom: 8 }}>in respect of trade secrets, for as long as the information retains its character as a trade secret under applicable law; and</li>
                  <li style={{ marginBottom: 8 }}>in respect of all other Confidential Information, for five (5) years from the date of disclosure.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.7 Remedies.</h3>
                <p>
                  Each party acknowledges that a breach of this Section may cause immediate and irreparable harm for which monetary damages alone may be an insufficient remedy. To the extent permitted by applicable law, each party is entitled to seek injunctive relief, specific performance, or other equitable remedies to prevent or restrain any actual or threatened breach, without prejudice to any other rights or remedies available at law or in equity.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>4. Service Levels</h2>
                <p>
                  Publisher's uptime commitment, maintenance windows, and service credit entitlements are set out in Annexure A (Service Level Agreement), which is incorporated into this Agreement by reference. Publisher commits to a Monthly Uptime Percentage of 97.5%, excluding downtime attributable to: (a) scheduled maintenance windows notified in advance; (b) failures of Microsoft Azure or other third-party infrastructure outside Publisher's reasonable control; or (c) Customer's acts or omissions. In the event of any inconsistency between Annexure A and the body of this Agreement, the body of this Agreement prevails. Service credits are Customer's sole and exclusive remedy for SLA failures. Nothing in this Section limits any right Customer may have to terminate this Agreement for cause under Section 11.3.
                </p>
                <p>
                  Publisher will give Customer prior written notice before deploying material software updates to the Offering. Updates to Admin Dashboard content (templates, brand guidelines, prompt overrides) are Customer-controlled and are not subject to update notifications. Version upgrades and Admin Dashboard access are included under the base Subscription.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>5. Force Majeure</h2>
                <p>
                  Neither party will be liable for any failure or delay in performing its obligations under this Agreement to the extent that such failure or delay is caused by circumstances beyond that party's reasonable control, including acts of God, natural disasters, pandemic or epidemic, acts of government, war, terrorism, civil unrest, industrial action, power or telecommunications failures, or failures of third-party infrastructure providers (including Microsoft Azure) ("Force Majeure Event"). The affected party will: (a) promptly notify the other party upon becoming aware of the Force Majeure Event; (b) use reasonable endeavours to mitigate the effects of and overcome the Force Majeure Event; and (c) resume performance as soon as reasonably practicable. For the avoidance of doubt, a Force Majeure Event affecting the aviation industry (such as severe weather, airspace closure, or air traffic control failure) that simultaneously causes both the disruption events to which the Offering responds and the unavailability of the Offering itself will excuse Publisher's performance under the SLA to the extent the unavailability is directly attributable to that Force Majeure Event. Publisher's SLA exclusions in Section 4 apply concurrently with this Section. If a Force Majeure Event continues for more than thirty (30) consecutive days, either party may terminate this Agreement on written notice without further liability, other than for obligations accrued prior to the Force Majeure Event.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>6. Compliance Monitoring</h2>
                <p>
                  Publisher may monitor Customer's use of the Offering through the Offering's built-in usage and access logs to verify compliance with the terms of this Agreement. If Publisher determines that Customer is using the Offering outside the scope of its Subscription, Publisher will notify Customer and Customer must promptly remedy the non-compliance, including by purchasing the appropriate Subscription tier if required. All information obtained through compliance monitoring is Confidential Information and may only be used for the purpose of verifying compliance. Upon reasonable request, Publisher will make available to Customer all information necessary to demonstrate compliance with GDPR obligations for the processing of Personal Data, including through a security questionnaire or self-attestation process.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>7. Warranties and Disclaimers</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>7.1 Publisher's Warranties.</h3>
                <p>Publisher continuously warrants that:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>it has the full right and authority to enter into this Agreement and to grant the rights set out herein;</li>
                  <li style={{ marginBottom: 8 }}>performing its obligations under this Agreement will not conflict with or violate any other agreement to which it is a party;</li>
                  <li style={{ marginBottom: 8 }}>the Offering will conform to the functionality described in the Documentation in all material respects;</li>
                  <li style={{ marginBottom: 8 }}>to the best of Publisher's knowledge at the time of publication, the Offering does not infringe any third-party patent, copyright, trademark, or trade secret; and</li>
                  <li style={{ marginBottom: 8 }}>the Offering does not contain any virus, malware, or malicious code that would damage or impair Customer's systems, networks, or data.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>7.2 AI Messaging Disclaimer.</h3>
                <p>
                  Publisher does not warrant the accuracy, completeness, suitability, or regulatory compliance of any AI-generated message, rebooking offer, compensation eligibility determination, or other AI Output generated by the Offering. The Offering is a decision-support and communication-automation tool. Customer bears sole responsibility for enabling and maintaining the HITL approval process in accordance with Section 1.8, and all messages approved and dispatched under that process are made at Customer's sole risk and responsibility. Publisher's warranty in Section 7.1.3 applies to the Offering's conformance with its documented messaging and decisioning logic only, and not to the accuracy, completeness, or regulatory compliance of any individual AI Output.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>7.3 Warranty Remedy.</h3>
                <p>
                  If the Offering fails to conform to the warranty in Section 7.1.3, Publisher will use reasonable commercial efforts to correct the non-conformity within thirty (30) days of receiving written notice from Customer identifying the failure in reasonable detail. If Publisher has not corrected the non-conformity or provided a reasonable workaround that restores material functionality within that thirty (30) day period, Customer may, at Customer's election:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>terminate the Subscription on written notice and receive a pro-rata refund of pre-paid Subscription fees for the unexpired portion of the then-current Subscription Year; or</li>
                  <li style={{ marginBottom: 8 }}>continue the Subscription and receive a service credit in an amount to be agreed by the parties, acting reasonably, reflecting the period and severity of the non-conformity.</li>
                </ol>
                <p>
                  This Section sets out Customer's sole and exclusive remedy for any warranty failure under Section 7.1, except as provided in Section 11.4.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>7.4 General Disclaimer.</h3>
                <p>
                  Save as expressly set out in this Agreement, the Offering is provided on an "as is" basis. To the fullest extent permitted by applicable law, Publisher excludes all warranties, conditions, and representations, whether express, implied, or statutory, including any implied warranty of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>8. Indemnity</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>8.1 By Publisher.</h3>
                <p>
                  Publisher will, at its own expense, defend Customer against any third-party claim alleging that Customer's authorised use of the Offering in accordance with this Agreement infringes a third party's intellectual property rights ("IP Claim"), and will indemnify Customer for damages, costs, and legal fees finally awarded by a court of competent jurisdiction or agreed in a written settlement approved in advance by Publisher. Publisher's aggregate liability under this Section 8.1 shall not exceed the total Subscription fees paid by Customer in the twelve (12) months immediately preceding the IP Claim.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>8.2 Exclusions from Publisher's Indemnity.</h3>
                <p>
                  Publisher has no obligation under Section 8.1 to the extent that an IP Claim arises from:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>Customer's use of the Offering in combination with software, hardware, data, or services not provided or approved in writing by Publisher, where the claim would not have arisen but for that combination;</li>
                  <li style={{ marginBottom: 8 }}>any modification of the Offering not made or authorised in writing by Publisher;</li>
                  <li style={{ marginBottom: 8 }}>Customer's failure to use the most current version of the Offering where Publisher has made a non-infringing version available and given Customer notice to upgrade;</li>
                  <li style={{ marginBottom: 8 }}>Customer's use of the Offering in a manner contrary to this Agreement or the Documentation; or</li>
                  <li style={{ marginBottom: 8 }}>Airline Customisations or Passenger Data provided by Customer.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>8.3 By Customer.</h3>
                <p>
                  Customer will, at its own expense, defend Publisher against any third-party claim arising from: (a) Customer's breach of this Agreement; (b) the unlawful or unauthorised use of the Offering by Customer or its Authorised Users; or (c) any third-party passenger claim arising from a communication approved and dispatched by Customer through the HITL process ("Customer Indemnity Claim"), except where such claim arises from a defect in the Offering itself rather than from Customer's configuration, content, or instructions. Customer will indemnify Publisher for damages, costs, and legal fees finally awarded or agreed in a written settlement approved in advance by Customer. Customer's aggregate liability under this Section 8.3 shall not exceed the total Subscription fees paid by Customer in the twelve (12) months immediately preceding the relevant claim.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>8.4 Indemnity Procedure.</h3>
                <p>The party seeking indemnification ("Indemnified Party") must:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>give the indemnifying party prompt written notice of the claim (and in any event within such time as to avoid material prejudice to the indemnifying party's ability to defend);</li>
                  <li style={{ marginBottom: 8 }}>grant the indemnifying party sole control of the defence and settlement of the claim; and</li>
                  <li style={{ marginBottom: 8 }}>provide reasonable cooperation and assistance at the indemnifying party's expense.</li>
                </ol>
                <p>
                  The Indemnified Party may participate in the defence at its own cost with counsel of its choice. The indemnifying party may not enter into any settlement that: (i) imposes any financial liability or obligation on the Indemnified Party; (ii) requires the Indemnified Party to make any admission of liability or fault; or (iii) does not include a full and unconditional release of the Indemnified Party from the claim; in each case without the Indemnified Party's prior written consent, not to be unreasonably withheld or delayed.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>9. Limitation of Liability</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.1 Aggregate Cap.</h3>
                <p>
                  Each party's total aggregate liability to the other under or in connection with this Agreement, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, is limited to the total Subscription fees paid by Customer in the twelve (12) months immediately preceding the event giving rise to the claim.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.2 Data Breach Cap.</h3>
                <p>
                  Notwithstanding Section 9.1, in the event of unauthorised access, use, or disclosure of Passenger Data or Customer Data due to a breach of Publisher's obligations under Section 2.5 (Security), Publisher's maximum aggregate liability will not exceed the greater of: (a) two times (2x) the Subscription fees paid by Customer in the twelve (12) months immediately preceding the incident; or (b) USD 500,000.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.3 AI Output Reliance.</h3>
                <p>
                  Without prejudice to Section 9.1, Publisher has no liability for any loss, cost, damage, or regulatory penalty arising from any AI Output generated by the Offering, including messaging errors, incorrect rebooking offers, or inaccurate compensation eligibility determinations, regardless of whether the HITL workflow was enabled, modified, or bypassed by Customer. This exclusion does not apply, and Publisher's liability shall instead be assessed under Section 9.1, where the Offering can be shown to have generated an output that materially deviates from the functionality described in the Documentation as a direct result of Publisher's own material breach of this Agreement. For the avoidance of doubt, this Section 9.3 is not overridden by the gross negligence or fraud exception in Section 9.5.4 except where Publisher's gross negligence or fraud directly caused the AI Output defect.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.4 Exclusion of Consequential Loss.</h3>
                <p>
                  Neither party is liable for any indirect, incidental, special, punitive, or consequential loss or damage, including loss of profits, loss of revenue, loss of data, business interruption, or reputational damage, arising under or in connection with this Agreement, regardless of the cause of action or the theory of liability, even if that party has been advised of the possibility of such damages.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.5 Exceptions.</h3>
                <p>
                  The limitations in Sections 9.1 and 9.4 do not apply to liability arising from:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>breach of Section 3 (Confidentiality), provided that a party's aggregate liability for a confidentiality breach shall not in any event exceed two times (2x) the annual Subscription fees paid in the twelve months preceding the breach, unless caused by gross negligence, wilful misconduct, or fraud;</li>
                  <li style={{ marginBottom: 8 }}>a party's indemnification obligations under Section 8, which are subject to the caps in Sections 8.1 and 8.3 respectively;</li>
                  <li style={{ marginBottom: 8 }}>death or personal injury caused by a party's negligence, to the extent such liability cannot be excluded by applicable law; or</li>
                  <li style={{ marginBottom: 8 }}>gross negligence, wilful misconduct, or fraud, provided that this exception does not expand Publisher's liability for AI Outputs beyond the scope stated in Section 9.3.</li>
                </ol>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>10. Pricing and Payment</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.1 Bespoke Pricing.</h3>
                <p>
                  All commercial terms, including Subscription fees, any volume or usage-based components, and payment schedules are individually negotiated and set out in the applicable Order. No binding pricing commitment exists until an Order has been executed by both parties. Prospective customers must contact Publisher's sales team to obtain a quotation. Publisher reserves the right to decline to contract with any prospective customer at its sole discretion.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.2 One-Time Setup Fee.</h3>
                <p>
                  In addition to the recurring Subscription fees, Customer will pay a one-time, non-refundable setup fee in the amount set out in the applicable Order ("Setup Fee"). The Setup Fee covers onboarding, initial configuration, integration with Customer's airline APIs and CDP, and go-live support as described in the Order. The Setup Fee is due and payable within thirty (30) days of the Effective Date, or as otherwise specified in the Order, and is payable regardless of whether Customer completes onboarding or activates the Offering. The Setup Fee is non-refundable in all circumstances, including on termination of this Agreement by either party.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.3 Subscription Fees.</h3>
                <p>
                  Subscription fees are invoiced in advance for each Subscription Year, or in accordance with the billing cadence set out in the Order. All invoices are due and payable within thirty (30) days of the invoice date unless a different payment period is specified in the Order.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.4 Late Payment.</h3>
                <p>
                  Amounts not paid by the due date will accrue interest from the due date at the rate of 1.5% per month (or the maximum rate permitted by applicable law, whichever is lower), compounding monthly. Publisher may, on fourteen (14) days' prior written notice, suspend Customer's access to the Offering if any invoice remains unpaid for more than thirty (30) days past its due date. Suspension under this Section does not relieve Customer of its obligation to pay outstanding amounts or constitute a waiver of any of Publisher's rights.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.5 Taxes.</h3>
                <p>
                  All fees set out in an Order are exclusive of applicable taxes, levies, duties, or similar governmental assessments, including goods and services tax (GST), value added tax (VAT), and withholding taxes ("Taxes"). Customer is responsible for paying all Taxes associated with its purchases under this Agreement, excluding taxes based on Publisher's net income. Where Publisher is required by law to collect Taxes, Publisher will invoice Customer for those Taxes and Customer will pay them in addition to the fees. If Customer is required by law to withhold any Taxes from payments to Publisher, Customer will gross up the payment so that Publisher receives the full invoiced amount after withholding.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.6 Disputed Invoices.</h3>
                <p>
                  If Customer disputes any invoice in good faith, Customer must: (a) pay the undisputed portion by the due date; (b) notify Publisher in writing of the disputed amount and the basis for the dispute within seven (7) days of receipt of the invoice; and (c) cooperate with Publisher to resolve the dispute promptly. Interest will not accrue on amounts subject to a bona fide dispute raised in accordance with this Section during the period of active dispute resolution. Disputes not notified within fifteen (15) days of receipt of invoice are deemed accepted.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.7 No Deduction or Set-Off.</h3>
                <p>
                  Customer will pay all amounts due under this Agreement in full without any deduction, set-off, counterclaim, or withholding (other than withholding Taxes addressed in Section 10.5), unless Customer has a court order requiring deduction or withholding of a specific amount.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>11. Term and Termination</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.1 Term.</h3>
                <p>
                  This Agreement takes effect on the Effective Date and continues for an initial Subscription Year of twelve (12) months, renewing automatically for successive Subscription Years in accordance with Section 1.2, unless terminated in accordance with this Section.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.2 Termination Without Cause.</h3>
                <p>
                  Either party may terminate this Agreement or any active Subscription without cause by giving at least sixty (60) days' prior written notice. During the initial Subscription Year, termination without cause takes effect at the end of that initial Subscription Year. For any subsequent Subscription Year, termination takes effect at the end of the Subscription Year in which the sixty (60) day notice period expires. No refund is provided for any Subscription fees paid for the Subscription Year in which notice is given. Publisher will not provide refunds or credits for any partial Subscription Year following termination without cause.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.3 Termination for Cause.</h3>
                <p>
                  Either party may terminate this Agreement immediately on written notice if:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>the other party commits a material breach of this Agreement and fails to remedy it within thirty (30) days of receiving written notice identifying the breach in reasonable detail; or</li>
                  <li style={{ marginBottom: 8 }}>the other party becomes Insolvent.</li>
                </ol>
                <p>
                  Without limiting what constitutes a material breach, the following will each constitute a material breach by the relevant party: by Publisher (i) persistent failure to meet the Monthly Uptime Percentage in Annexure A for three (3) or more consecutive calendar months; (ii) a confirmed data breach caused by Publisher's gross negligence or wilful misconduct; (iii) Publisher's insolvency; or (iv) Publisher's material breach of Section 2 (Data and Privacy) or Section 3 (Confidentiality); by Customer (i) non-payment of any Subscription fee or Setup Fee for more than thirty (30) days past its due date under Section 10; (ii) breach of Sections 1.5 or 1.8 that is not remedied within the cure period; or (iii) Customer's insolvency. Upon termination for cause by Customer, Customer will receive a credit for any Subscription fees paid in advance for any period after the date of termination.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.4 Warranty Termination.</h3>
                <p>
                  If Publisher commits a material breach of the warranties in Section 7.1 that is not remedied following the process in Section 7.3 within thirty (30) days, Customer may terminate the Subscription on written notice. Publisher will provide Customer a pro-rata refund of all pre-paid Subscription fees for the unexpired period of the then-current Subscription Year.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.5 Product Discontinuation.</h3>
                <p>
                  Publisher may discontinue the Offering at any time on at least ninety (90) days' prior written notice to active subscribers. Active Subscriptions will continue to be honoured until the end of the Subscription Year in which the notice period expires. Publisher has no obligation to maintain, develop, support, or replace the Offering after the discontinuation date.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.6 Suspension.</h3>
                <p>
                  Publisher may suspend Customer's access to the Offering during any period of material breach by Customer, after giving Customer reasonable prior notice (which may be reduced or waived in cases of security risk or regulatory obligation). Any suspension will be proportionate to and no longer than necessary to address the breach.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.7 Consequences of Termination.</h3>
                <p>Upon termination or expiry of this Agreement:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>all licences granted under this Agreement terminate immediately;</li>
                  <li style={{ marginBottom: 8 }}>all amounts due under any unpaid invoices, including any accrued interest, become due and payable immediately; and</li>
                  <li style={{ marginBottom: 8 }}>each party will, within thirty (30) days of termination or expiry, return or securely destroy all of the other's Confidential Information (including all Passenger Data and Customer Data) in its possession or control, and will issue a written certificate of deletion within a further ten (10) days, subject to any retention obligations imposed by applicable law or regulation. Where a party retains data pursuant to a legal obligation, it will notify the other party in writing of the nature and duration of the retention obligation.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.8 Survival.</h3>
                <p>
                  The following Sections survive termination or expiry of this Agreement for any reason: 1.4, 1.5, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.6, 3, 7.2, 7.4, 8, 9, 11.7, 12, and 13.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>12. General</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.1 Entire Agreement.</h3>
                <p>
                  This Agreement, together with the Annexures and Order forms, constitutes the entire agreement between the parties with respect to the Offering and supersedes all prior negotiations, representations, warranties, and agreements. Nothing in this Section limits any claim for fraudulent misrepresentation. Customer's use of the Offering is also subject to Publisher's Acceptable Use Policy as published at Airalert.aionos.ai. Publisher will not update the Acceptable Use Policy in a manner that materially restricts Customer's rights under this Agreement without Customer's prior written consent. In the event of any conflict, the following order of precedence applies:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>this Agreement;</li>
                  <li style={{ marginBottom: 8 }}>the Acceptable Use Policy;</li>
                  <li style={{ marginBottom: 8 }}>Annexure A (Service Level Agreement);</li>
                  <li style={{ marginBottom: 8 }}>Annexure B (Incident Response and Support); and</li>
                  <li style={{ marginBottom: 8 }}>Documentation.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.2 Independent Contractors.</h3>
                <p>
                  The parties are independent contractors. Nothing in this Agreement creates any partnership, joint venture, agency, franchise, or employment relationship between them.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.3 Amendments.</h3>
                <p>
                  No amendment to this Agreement is effective unless made in writing and signed by authorised representatives of both parties. Publisher will not unilaterally vary the terms of this Agreement during the term of any active Subscription without Customer's prior written consent.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.4 Assignment.</h3>
                <p>
                  Customer may not assign or transfer this Agreement or any rights under it without Publisher's prior written consent, except to a successor entity in connection with a merger, acquisition, or transfer of substantially all of Customer's assets, provided that the successor assumes all of Customer's obligations under this Agreement in writing. Publisher may assign this Agreement to an Affiliate or to a successor entity without Customer's consent, on written notice. Publisher will provide Customer with at least thirty (30) days' prior written notice of any assignment to a third party that is a direct competitor of Customer's core airline business. Customer may terminate this Agreement without penalty within thirty (30) days of receiving such notice. Any purported assignment in breach of this Section is void.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.5 Severability.</h3>
                <p>
                  If any provision of this Agreement is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, it will be modified to the minimum extent necessary to make it enforceable. If modification is not possible, it will be severed from this Agreement, and the remaining provisions will continue in full force and effect.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.6 Waiver.</h3>
                <p>
                  A failure or delay by either party in exercising any right or remedy under this Agreement does not constitute a waiver of that right or remedy. A waiver of any breach does not constitute a waiver of any subsequent or continuing breach. Any waiver must be in writing and signed by the waiving party.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.7 No Third-Party Rights.</h3>
                <p>
                  This Agreement does not create any rights in favour of, and is not enforceable by, any person or entity who is not a party to it, except as expressly provided. For the avoidance of doubt, passengers and other data subjects are not third-party beneficiaries of this Agreement.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.8 Notices.</h3>
                <p>
                  All notices under this Agreement must be in writing. Notices to Publisher must be sent to: (a) aionoslegal@aionos.ai; and (b) Aionos India Private Limited at its address mentioned above, Attention: Legal. Notices to Customer will be sent to the contact details designated by Customer in the applicable Order, or as otherwise notified to Publisher in writing. A notice sent by email is effective upon confirmation of receipt; a notice sent by courier or registered post is effective on the date shown on the delivery confirmation. In the event of a bounce or delivery failure of any email notice, the sender must promptly re-send the notice by courier or registered post.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.9 Governing Law.</h3>
                <p>
                  This Agreement is governed by the laws of India, without reference to its conflict of law principles. The parties expressly agree that the United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement. Nothing in this Section limits the application of the GDPR or other mandatory Data Protection Laws as required by applicable EU or national law.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.10 Dispute Resolution.</h3>
                <p>
                  Any dispute, controversy, or claim arising out of or in connection with this Agreement, including any question as to its existence, validity, or termination, shall be referred to and finally resolved by arbitration administered by the Delhi International Arbitration Centre ("DIAC") in accordance with the DIAC Rules in force at the date of the notice of arbitration, which Rules are incorporated into this clause by reference. The seat of arbitration is New Delhi. The tribunal shall consist of one (1) sole arbitrator. The language of arbitration is English. Either party may apply to the courts of New Delhi for urgent interim or conservatory relief, including an injunction to preserve confidential information or intellectual property, without waiving its right to arbitration.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.11 Compliance with Laws.</h3>
                <p>
                  Each party shall comply with all laws and regulations applicable to its respective obligations and activities under this Agreement, including export control, anti-corruption, anti-money laundering, and data protection laws. Publisher will obtain and maintain all approvals, licences, filings, or registrations necessary to its provision of the Offering.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.12 Construction.</h3>
                <p>
                  This Agreement is in English only. Any translation is for reference purposes only and has no legal effect. The word "including" and similar expressions are to be read as if followed by "without limitation." References to "days" mean calendar days. The word "may" denotes a right, not an obligation. References to "written" or "in writing" mean a paper document or email (where expressly authorised).
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.13 Electronic Execution.</h3>
                <p>
                  This Agreement may be accepted electronically, including by click-through acceptance on Publisher's or Microsoft's platform, and such acceptance has the same legal effect as a handwritten signature.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>13. Definitions</h2>
                <dl className="definition-list">
                  <dt><b>Affiliate: </b>Any entity that directly or indirectly controls, is controlled by, or is under common control with a party. "Control" means ownership of more than fifty percent (50%) of the voting securities of an entity or the power to direct its management and policies.</dt>
                  <dt><b>AI Output: </b>Has the meaning given in Section 1.11.</dt>
                  <dt><b>Airline Customisations: </b>Has the meaning given in Section 1.10.</dt>
                  <dt><b>Anti-Corruption Laws: </b>All applicable laws prohibiting fraud, bribery, corruption, money laundering, and related offences, including the U.S. Foreign Corrupt Practices Act, and the UK Bribery Act 2010.</dt>
                  <dt><b>Authorised User: </b>Any employee, contractor, or agent of Customer who is authorised by Customer to access and use the Offering under this Agreement, including OCC personnel, up to the maximum number specified in the applicable Order.</dt>           
                  <dt><b>Business Day: </b>A day (other than a Saturday, Sunday, or public holiday) on which banks are open for general business in New Delhi, India.</dt>
                  <dt><b>Confidential Information: </b>Has the meaning given in Section 3.2.</dt>
                  <dt><b>Customer Data: </b>All data supplied to Publisher by or on behalf of Customer through use of the Offering, including Passenger Data and Airline Customisations, but excluding Support Data.</dt>                 
                  <dt><b>Data Protection Laws: </b>Any law, regulation, or binding regulatory guidance applicable to either party relating to the processing, protection, privacy, or security of personal data and any applicable national or regional data protection legislation, as amended or replaced from time to time.</dt>                  
                  <dt><b>Documentation: </b>All user manuals, technical specifications, and other materials made available by Publisher describing the functionality, configuration, and use of the Offering, as updated by Publisher from time to time in accordance with Section 1.13.</dt>
                  <dt><b>Feedback: </b>Any idea, suggestion, comment, or input voluntarily provided by Customer to Publisher relating to the Offering or Publisher's products and services.</dt>           
                  <dt><b>Force Majeure Event: </b>Has the meaning given in Section 5.</dt>
                  <dt><b>DPRG: </b>Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and the free movement of such data.</dt>
                  <dt><b>HITL (Human-in-the-Loop): </b>The workflow in which Customer's Authorised Users review and approve passenger notifications before they are dispatched by the Offering.</dt>                  <dt><b>Insolvent: </b>The occurrence of any of the following in relation to a party: admission in writing of inability to pay debts as they fall due; making a general assignment for the benefit of creditors; appointment of a receiver, administrator, or trustee over its assets (unless set aside within 60 days); filing of an insolvency petition (unless dismissed within 60 days); adjudication as bankrupt or insolvent; commencement of winding-up or liquidation; or cessation of business.</dt>
                  <dt><b>Monthly Uptime Percentage: </b>Has the meaning given in Annexure A.</dt>
                  <dt><b>Offering: </b>The Aviation Disruption Recovery Agent platform and all associated services, features, AI agents, Admin Dashboard, MCP server, and components made available by Publisher under this Agreement, as described in the Documentation.</dt>
                  <dt><b>Order: </b>A written order form, statement of work, or equivalent commercial document executed by both parties that sets out the Subscription fees, Setup Fee, billing cadence, number of Authorised Users, Subscription Year commencement date, and any other agreed commercial terms, and which incorporates this Agreement by reference. In the event of any conflict between an Order and this Agreement, this Agreement prevails unless the Order expressly states otherwise.</dt>
                  <dt><b>Passenger Data: </b>Personal Data relating to airline passengers processed by Publisher on behalf of Customer in connection with the Offering, as further described in Section 2.1.</dt>
                  <dt><b>Personal Data: </b>Any information relating to an identified or identifiable natural person, as defined under applicable Data Protection Laws.</dt>
                  <dt><b>Representatives: </b>A party's employees, Affiliates, contractors, advisors, and consultants.</dt>
                  <dt><b>Setup Fee: </b>Has the meaning given in Section 10.2.</dt>
                  <dt><b>Standard Contractual Clauses: </b>The standard contractual clauses for the transfer of personal data to third countries as set out in Commission Implementing Decision (EU) 2021/914 of 4 June 2021, Module 2 (Controller to Processor).</dt>
                  <dt><b>Sub-processor: </b>Any third party to whom Publisher delegates its data processing obligations under this Agreement, including Publisher Affiliates and infrastructure providers, who stores, collects, transfers, or otherwise processes Personal Data or Customer Data in connection with providing the Offering.</dt>
                  <dt><b>Subscription: </b>Customer's paid right to access and use the Offering for the Subscription Year, as granted under and subject to the terms of this Agreement and the applicable Order.</dt>
                  <dt><b>Subscription Year: </b>Has the meaning given in Section 1.2.</dt>
                  <dt><b>Support Data: </b>All data, including text, sound, video, image files, or software, provided to Publisher by or on behalf of Customer through an engagement with Publisher to obtain technical support for the Offering.</dt>
                  
                </dl>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>ANNEXURE A — SERVICE LEVEL AGREEMENT</h2>
                <p>
                  This Annexure forms part of the Standard Contract between Aionos India Private Limited and Customer. Defined terms not defined here have the meanings given in Section 12 of the Agreement.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>A. Uptime Commitment.</h3>
                <p>
                  Publisher commits to a Monthly Uptime Percentage of ninety nine point nine percent (99.9%) for the Offering.
                </p>
                <p>
                  "Monthly Uptime Percentage" means the total number of minutes in a calendar month during which the Offering's recommendation engine is available and operational, divided by the total number of minutes in that calendar month, expressed as a percentage.
                </p>
                <p>
                  "Downtime" means any continuous period during which the Offering is wholly unavailable, excluding Excluded Downtime.
                </p>
                <p>
                  "Excluded Downtime" means unavailability caused by: (a) scheduled maintenance notified in accordance with Section B; (b) Customer's own acts or omissions, including misconfigurations, incorrect API inputs, or use contrary to this Agreement; (c) failures of third-party systems outside Publisher's reasonable control, including Customer's own infrastructure or data providers; (d) a Force Majeure Event; or (e) Microsoft Azure infrastructure outages not attributable to Publisher's architecture or deployment choices.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>B. Simulation Engine Availability.</h3>
                <p>
                  The Monthly Uptime Percentage in Section A applies to the Offering's recommendation engine. The simulation and what-if scenario engine is a non-transactional feature and is excluded from the uptime calculation. Publisher will use reasonable efforts to maintain simulation engine availability consistent with overall platform availability but does not commit to a separate uptime percentage for this feature. Temporary unavailability of the simulation engine does not constitute Downtime for the purposes of service credit calculations.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>C. Scheduled Maintenance.</h3>
                <p>
                  Publisher will give Customer at least five (5) business days' prior written notice of any scheduled maintenance that will affect Offering availability. Publisher will use reasonable efforts to schedule maintenance between 00:00 and 06:00 Indian Standard Time on weekdays, or at any time on weekends, and to complete maintenance within the notified window. Maintenance carried out in accordance with this Section does not constitute Downtime.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>D. Service Credits.</h3>
                <p>
                  If Publisher fails to meet the Monthly Uptime Percentage in any calendar month, Customer is entitled to a service credit applied against the next monthly invoice (or paid out directly if the Agreement has terminated), calculated as follows:
                </p>

                <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: 12, marginBottom: 12 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Monthly Uptime Percentage</th>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Credit (% of affected month's fees)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>99.0% to &lt; 99.9%</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>10%</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>95.0% to &lt; 99.0%</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>25%</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Below 95.0%</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>50%</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  Service credits are Customer's sole and exclusive remedy for SLA failures, subject to the termination right in Section 11.3. To claim a credit, Customer must submit a written request to aionoslegal@aionos.ai within thirty (30) days of the end of the affected month, setting out the dates and duration of Downtime and its impact. Publisher will respond within fifteen (15) business days. Credits are not available for Excluded Downtime. Total credits in any single month shall not exceed 50% of that month's Subscription fees.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>E. Persistent Failure.</h3>
                <p>
                  If Publisher fails to meet the Monthly Uptime Percentage for three (3) or more consecutive calendar months, Customer may terminate the Subscription without penalty under Section 11.3.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>F. Reporting.</h3>
                <p>
                  Publisher will make availability data accessible through its status page at Airalert.aionos.ai. Publisher will notify Customer without undue delay of any Downtime event that causes the Monthly Uptime Percentage to fall below 99.9%, and will provide a written root cause analysis within ten (10) business days of the resolution of any Downtime exceeding four (4) continuous hours.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>G. Force Majeure.</h3>
                <p>
                  Publisher is not in breach of its uptime commitment to the extent that a failure is caused by a Force Majeure Event. A "Force Majeure Event" is any event beyond Publisher's reasonable control, including natural disaster, act of war or terrorism, pandemic, governmental action, or widespread failure of internet infrastructure. Publisher will notify Customer promptly upon becoming aware of a Force Majeure Event and will use reasonable efforts to restore normal service as soon as practicable.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>ANNEXURE B — INCIDENT RESPONSE AND SUPPORT</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1. Support Tiers</h3>

                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>1.1 Standard Support</h4>
                <p>
                  Subject to the terms of this Agreement and during the applicable Subscription Term, Publisher shall make available Standard Support to Customer at no additional charge.
                </p>
                <p>Standard Support shall include:</p>
                <p>(a) Support Channels:</p>
                <ul style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>Email-based support</li>
                  <li style={{ marginBottom: 8 }}>Web-based ticketing system</li>
                </ul>
                <p>(b) Hours of Coverage: 24×7</p>
                <p>(c) Scope of Support:</p>
                <ul style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>Incident intake, classification, and initial troubleshooting</li>
                  <li style={{ marginBottom: 8 }}>Diagnosis and remediation of Incidents attributable to the Service</li>
                  <li style={{ marginBottom: 8 }}>General guidance concerning use of the Service in accordance with Publisher's published documentation</li>
                </ul>

                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>1.2 Optional Enhanced Support</h4>
                <p>
                  Publisher may, at its discretion, offer enhanced or premium support tiers, including but not limited to extended hours of coverage, 24×7 support, priority incident handling, proactive monitoring, or assignment of a dedicated technical account manager.
                </p>
                <p>
                  Any such enhanced support shall be subject to additional fees and shall apply only if expressly set forth in an applicable Order Form or written amendment executed by both Parties.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2. Incident Classification and Response Times</h3>

                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>2.1 Incident Severity Levels</h4>
                <p>(a) Severity 1 (Critical): An Incident resulting in a complete outage of the production environment or unavailability of a mission-critical function of the Service, with no commercially reasonable workaround available.</p>
                <p>(b) Severity 2 (High): An Incident causing significant degradation of core functionality or material business impact, for which a temporary workaround exists.</p>
                <p>(c) Severity 3 (Medium): An Incident resulting in limited impairment of non-critical functionality or performance degradation with minimal operational impact.</p>
                <p>(d) Severity 4 (Low): Requests relating to cosmetic issues, documentation errors, configuration questions, or enhancement requests.</p>

                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>2.2 Response and Resolution Targets</h4>
                <p>Publisher shall use commercially reasonable efforts to meet the following targets. Render as an HTML table:</p>

                <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: 12, marginBottom: 12 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Severity</th>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Initial Response Time</th>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Target Resolution Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Severity 1</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Within one (1) Business hour</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Eight (8) Business hours</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Severity 2</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Within four (4) Business hours</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Two (2) Business Days</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Severity 3</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Within one (1) Business Day</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Five (5) Business Days</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Severity 4</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Within two (2) Business Days</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>As mutually agreed</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  The foregoing resolution targets are non-binding objectives and do not constitute service level guarantees unless expressly stated otherwise in the Agreement or an applicable SLA.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3. Escalation</h3>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>3.1 Escalation Process</h4>
                <p>
                  Publisher shall handle Incidents through a tiered escalation structure comprising:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>Level 1: First-line technical support</li>
                  <li style={{ marginBottom: 8 }}>Level 2: Product specialists or platform engineering</li>
                  <li style={{ marginBottom: 8 }}>Level 3: Senior engineering and architectural resources</li>
                </ol>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>3.2 Escalation Conditions</h4>
                <p>An Incident shall be escalated where:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>The Incident is classified as Severity 1;</li>
                  <li style={{ marginBottom: 8 }}>The target resolution time for a Severity 2 or higher Incident is likely to be exceeded; or</li>
                  <li style={{ marginBottom: 8 }}>The Incident reflects a recurring or systemic issue materially affecting the Service.</li>
                </ol>
                <p>
                  Upon written request, Publisher shall facilitate management-level escalation for unresolved Severity 1 or Severity 2 Incidents.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>4. Support Exclusions</h3>
                <p>
                  Publisher shall have no obligation to provide support in connection with issues arising from or attributable to any of the following ("Support Exclusions"):
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>Use of the Service in a manner inconsistent with the Agreement or Provider's documentation;</li>
                  <li style={{ marginBottom: 8 }}>Errors, omissions, or misconfigurations caused by Customer or its users;</li>
                  <li style={{ marginBottom: 8 }}>Failures or malfunctions of third-party software, hardware, GPS devices, telematics equipment, APIs, or telecommunications services not controlled by Publisher;</li>
                  <li style={{ marginBottom: 8 }}>Customer's infrastructure, networking environment, cloud services, or data connectivity issues;</li>
                  <li style={{ marginBottom: 8 }}>Use of beta, preview, or non-generally-available features;</li>
                  <li style={{ marginBottom: 8 }}>Events of force majeure; or</li>
                  <li style={{ marginBottom: 8 }}>Services or activities not expressly included in the Customer's Subscription.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>5. Support Contact Details</h3>
                <dl className="definition-list">
                  <dt>Primary Support Email: Deepankur.sinha@aionos.ai</dt>
                  
                  <dt>Support Portal: Admin Dashboard</dt>
                  
                  <dt>Emergency Contact (Severity 1 Only): Rishabh.Raizada@aionos.ai</dt>
                  
                </dl>
                <p>Emergency contact details shall be used solely for Severity 1 Incidents affecting production environments.</p>

              </div>

              <div className="footer">
                <div>© AionOS India Private Limited · Third Floor, Dr. Gopal Das Bhawan, 28 Barakhamba Road, Connaught Place, New Delhi – 110001</div>
                <div style={{ marginTop: 8 }}>
                  Legal contact: <a className="legal-link" href="mailto:aionoslegal@aionos.ai"style={{color: "blue",textDecoration: "underline",}}>aionoslegal@aionos.ai</a>
                </div>
              </div>
            </div>
            </>
            )}

            {activeTab === "ibm" && (
              <>
                <div className="section-head">
                  <h2 className="h2">
                    Aviation Disruption Resiliency — Standard Contract
                  </h2>

                  <p className="lead">
                    Formal agreement and terms for the Aviation Disruption Recovery Agent offering.
                  </p>
                </div>

                {/* <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginTop: 32,
                    marginBottom: 20,
                    color: "#6366f1",
                  }}
                >
                  IBM
                </h3> */}
                {/* <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 32, marginBottom: 20, color: '#6366f1' }}>IBM</h3> */}

                <div
                  style={{
                    maxWidth: 920,
                    margin: "0 auto",
                    color: "#374151",
                    lineHeight: 1.8,
                    fontSize: "15px",
                  }}
                >
                  <p style={{ marginBottom: 20, fontStyle: 'italic', color: '#6b7280' }}>
                  This Standard Contract ("Agreement") is entered into as of the date of execution of the applicable Order (the "Effective Date"), between the customer identified in the Order ("Customer") and AionOS India Private Limited, a company incorporated in India with its registered office at Third Floor, Dr. Gopal Das, Bhawan, 28 Barakhamba Road, Connaught Place, New Delhi – 110001 ("Publisher").
                </p>

                <p style={{ marginBottom: 20, fontStyle: 'italic', color: '#6b7280' }}>
                  This Agreement constitutes the entire and exclusive agreement between the parties with respect to the Offering and supersedes all prior and contemporaneous representations, understandings, and agreements relating to its subject matter. Nothing in this paragraph limits any claim for fraudulent misrepresentation. By subscribing to the Offering, Customer represents and warrants that it has the authority to enter into this Agreement on behalf of itself and, where applicable, its Affiliates. Capitalised terms have the meanings given in Section 13 (Definitions).
                </p>

                <div style={{ marginBottom: 20, padding: 16, backgroundColor: '#f3f4f6', borderLeft: '4px solid #6366f1', borderRadius: 4 }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>IBM Disclaimer</p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>
                    IBM has created the template on which this Agreement is based to facilitate a transaction between Publisher and Customer. Both parties acknowledge that IBM is not a party to this Agreement, nor in any way responsible for the parties' actions or obligations under this Agreement. Microsoft's relationship with Customer and Publisher is solely governed by Microsoft's respective agreements with those parties; Microsoft otherwise disclaims all liability resulting from this Agreement. Where the Offering is listed on the Microsoft Marketplace, that listing is for discovery purposes only; the commercial terms governing the Subscription are set out in the applicable Order and this Agreement.
                  </p>
                </div>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>1. Licence</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.1 Licence Grant.</h3>
                <p>
                  Offerings are licensed, not sold. Upon subscription, and subject to Customer's compliance with this Agreement, Publisher grants Customer a non-exclusive, non-transferable, limited licence to access and use the Offering solely for Customer's own internal airline operations during the active Subscription term. The Offering may incorporate components subject to open-source software licences. Where such components are included, the applicable open-source licence terms are incorporated by reference and take precedence over this Section to the extent of any inconsistency.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.2 Subscription Term.</h3>
                <p>
                  The initial Subscription term is twelve (12) months from the Effective Date ("initial Subscription Year"). Subscriptions renew automatically for successive twelve (12) month periods ("Subscription Year") at Publisher's then-current list price for the Offering, unless either party gives written notice of non-renewal at least sixty (60) days before the end of the then-current Subscription Year. Publisher will give Customer at least thirty (30) days' prior written notice of any price change before it applies to a renewal. If Customer does not wish to renew at the new price, Customer may give notice of non-renewal before the new price takes effect and no further charges will apply after the end of the then-current Subscription Year. Subscription fees and billing cadence are as set out in the applicable Order.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.3 Authorised Users.</h3>
                <p>
                  Customer is responsible for controlling access to the Offering and for all use of the Offering by its Authorised Users. Customer must ensure that all Authorised Users comply with this Agreement. The Offering is intended for use by Customer's Operations Control Centre (OCC) personnel responsible for initiating and approving passenger notifications during disruption events. The maximum number of Authorised Users is as set out in the applicable Order. Customer must not permit access by more Authorised Users than are licensed under the applicable Order.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.4 Reservation of Rights.</h3>
                <p>
                  All rights in and to the Offering not expressly granted under this Agreement are reserved by Publisher. The Offering is protected by copyright and other applicable intellectual property laws. No licence, right, or interest is granted by implication, waiver, or estoppel. Customer acquires no ownership interest in the Offering by virtue of this Agreement.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.5 Restrictions.</h3>
                <p>Customer must not, and must ensure its Authorised Users do not:</p>
                <ul style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>copy, modify, adapt, translate, reverse engineer, decompile, or disassemble any part of the Offering, or attempt to do so;</li>
                  <li style={{ marginBottom: 8 }}>introduce any software or component into the Offering that would cause Publisher's proprietary code to become subject to any open-source licence obligation;</li>
                  <li style={{ marginBottom: 8 }}>circumvent or disable any technical limitation or access control in the Offering, including the HITL approval workflow;</li>
                  <li style={{ marginBottom: 8 }}>use the Offering for any unlawful purpose or in violation of any applicable law or regulation, including applicable aviation consumer protection regulations;</li>
                  <li style={{ marginBottom: 8 }}>use the Offering in or for the benefit of any entity subject to applicable sanctions laws or export control restrictions, including entities listed on any sanctions list maintained by the United Nations, the United States, or the European Union;</li>
                  <li style={{ marginBottom: 8 }}>use the Offering to send passenger communications that are misleading, inaccurate, or non-compliant with applicable aviation regulations (including EU Regulation 261/2004 or equivalent national rules);</li>
                  <li style={{ marginBottom: 8 }}>transfer, sublicence, rent, lease, lend, or otherwise make the Offering available to any third party; or</li>
                  <li style={{ marginBottom: 8 }}>use the Offering to provide outsourced or hosted services to third parties.</li>
                </ul>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.6 Non-Transferability.</h3>
                <p>
                  The Subscription and all rights granted under this Agreement are personal to Customer and may not be transferred or assigned without Publisher's prior written consent, except as part of a merger, acquisition, or transfer of substantially all of Customer's assets, in which case Section 12.4 applies.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.7 Feedback.</h3>
                <p>
                  Where Customer voluntarily provides Feedback to Publisher, Customer grants Publisher a non-exclusive, royalty-free, worldwide, perpetual licence to use, reproduce, modify, distribute, and incorporate such Feedback into Publisher's products and services solely for product development and improvement purposes. Feedback that Customer designates as confidential in writing at the time of submission will be treated as Confidential Information and may not be disclosed to third parties or used in a manner that would identify Customer without Customer's prior written consent. Publisher's use of Feedback does not give rise to any claim of inventorship, co-ownership, or compensation by Customer.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.8 Customer Configuration and HITL Responsibility.</h3>
                <p>
                  The Offering supports a Human-in-the-Loop ("HITL") workflow in which Customer's Authorised Users (OCC personnel) initiate and approve passenger notifications before they are dispatched. Customer must enable and maintain the HITL approval process for all passenger-facing communications. Customer must provide Publisher with at least five (5) Business Days' prior written notice before disabling or materially modifying the HITL workflow. Where Customer disables or bypasses the HITL workflow without such notice, Publisher's liability exclusion under Section 9.3 applies in full and Publisher's warranty under Section 7.1.3 is suspended in respect of any AI Outputs generated during that period. Customer is solely responsible for:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>ensuring that all required HITL approvals are completed before messages are dispatched to passengers;</li>
                  <li style={{ marginBottom: 8 }}>configuring all message templates, brand guidelines, prompt overrides, escalation thresholds, and eligibility rules via the Admin Dashboard;</li>
                  <li style={{ marginBottom: 8 }}>the accuracy, completeness, and integrity of all Passenger Data, airline API connections, CDP data, and third-party inputs supplied to the Offering;</li>
                  <li style={{ marginBottom: 8 }}>testing the Offering's behaviour in a non-production environment before go-live;</li>
                  <li style={{ marginBottom: 8 }}>ensuring that its use of the Offering complies with all aviation regulations, consumer protection laws, data protection obligations, and messaging regulations applicable to Customer's operations and the jurisdictions in which it operates; and</li>
                  <li style={{ marginBottom: 8 }}>all decisions made or approved by its personnel through the HITL process.</li>
                </ol>
                <p>
                  Publisher has no liability for outcomes arising from Customer's configuration decisions, threshold settings, HITL approvals, or inaccurate inputs. Publisher's warranty obligations under Section 7.1.3 are limited to the Offering's messaging and decisioning logic failing to perform in accordance with the functionality described in the Documentation. Publisher's exclusion of liability for AI Outputs under Section 9.3 applies regardless of whether the HITL workflow was enabled, modified, or bypassed by Customer. Publisher's SLA obligations and warranty under Section 7.1.3 are suspended to the extent that Offering performance is degraded by changes to, unavailability of, or incompatibility in Customer's airline APIs, CDP, or third-party data sources.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.9 AI Model Training.</h3>
                <p>
                  Publisher may use anonymised, aggregated, non-personally-identifiable operational metrics (such as system performance indicators and interaction pattern statistics) derived from Customer's use of the Offering to improve the Offering's underlying AI models. For the avoidance of doubt, "operational metrics" means system-level data that has been stripped of all identifiers and cannot be reverse-engineered to identify any individual, airline, or transaction; it does not include Customer configuration data, Airline Customisations, or Passenger Data. Publisher will not use Passenger Data, Airline Customisations, or any other Customer Data to train any AI or machine learning model without Customer's express prior written consent. Section 2.4.3 governs the prohibition on using Passenger Data for model training.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.10 Airline Customisations.</h3>
                <p>
                  Message templates, brand guidelines, prompt overrides, and business policies configured by Customer through the Admin Dashboard ("Airline Customisations") remain the intellectual property of Customer. Publisher acquires no rights in Airline Customisations other than the limited licence to process them as necessary to provide the Offering. Publisher will treat all Airline Customisations as Confidential Information.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.11 Ownership of AI-Generated Outputs.</h3>
                <p>
                  All passenger-facing messages and communications generated by the Offering in response to Customer's instructions, Airline Customisations, and Passenger Data ("AI Outputs") shall be owned by Customer upon generation. Publisher makes no claim to ownership of AI Outputs. Publisher does not warrant the accuracy, completeness, or regulatory compliance of any AI Output, as set out in Section 7.2. Customer is solely responsible for any disclosure, labelling, or transparency obligations applicable to AI Outputs under applicable law, including the EU Artificial Intelligence Act and equivalent national legislation.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.12 No Free Trial.</h3>
                <p>
                  The Offering is available on a paid subscription basis only. No free trial is offered. All pricing is bespoke and available upon request from Publisher's sales team. The Subscription commences, and charges begin to accrue, on the Effective Date as set out in the applicable Order.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.13 Documentation Maintenance.</h3>
                <p>
                  Publisher will maintain Documentation that accurately describes the Offering's material functionality. Publisher will not materially reduce the functionality described in the Documentation without providing Customer at least thirty (30) days' prior written notice. Customer's right to terminate for cause under Section 11.3 applies if any such reduction constitutes a material breach of Section 7.1.3.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1.14 Insurance.</h3>
                <p>
                  Publisher will maintain throughout the term of this Agreement: (a) professional indemnity / errors and omissions insurance with a minimum coverage of USD 1,000,000 per occurrence and in the aggregate; (b) cyber liability and data breach insurance with a minimum coverage of USD 1,000,000 per occurrence and in the aggregate; and (c) general commercial liability insurance with a minimum coverage of USD 2,000,000 per occurrence. Publisher will provide Customer with a certificate of insurance evidencing such coverage within ten (10) Business Days of a written request. Publisher will notify Customer promptly if any such policy lapses or is materially reduced.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>2. Compliance Obligations</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.1 Data Privacy.</h3>
                <p>
                  Customer and Publisher agree that the Customer is the controller of Personal Data and Publisher is the processor of such data, except when (a) Customer acts as a processor of Personal Data, in which case Publisher is a sub-processor or (b) stated otherwise in any Offering-specific terms. To the extent applicable, the parties will abide by the requirements of Data Protection Laws and execute a data processing agreement. Customer consents to the processing of Personal Data by Publisher and its Affiliates, and their respective agents and Subcontractors, as provided in this Agreement. Before providing Personal Data to Publisher, Customer will obtain all required consents from third parties (including Customer's contacts, partners, distributors, administrators, and employees) under applicable privacy and Data Protection Law.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.2 Aviation Regulatory Compliance.</h3>
                <p>
                  Customer is solely responsible for ensuring that all passenger communications generated through the Offering comply with applicable aviation consumer protection regulations, including EU Regulation 261/2004, United States DOT passenger protection rules, and equivalent national regulations in the jurisdictions in which Customer operates. Publisher does not warrant that any AI Output, message template, or compensation eligibility determination generated by the Offering will comply with any specific regulatory framework. Customer must independently verify the legal compliance of all communications before they are dispatched to passengers.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.3 Messaging Channel Compliance.</h3>
                <p>
                  Customer is solely responsible for ensuring that all use of communication channels through the Offering including SMS, WhatsApp, email, mobile push notifications, and in-app messages complies with applicable electronic communications laws, including the Telephone Consumer Protection Act (TCPA) in the United States, the EU ePrivacy Directive and national implementing legislation, the Telecom Regulatory Authority of India (TRAI) Do Not Disturb regulations, and equivalent messaging and marketing regulations in each jurisdiction in which Customer operates. Publisher provides the technical capability to send communications; Publisher makes no representation that use of any particular channel is lawful in any particular jurisdiction.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.4 Customer Audit Right.</h3>
                <p>
                  Customer may, no more than once per Subscription Year and on at least thirty (30) days' prior written notice, request that Publisher: (a) complete a written security and data processing questionnaire; or (b) provide a summary of its most recent third-party security audit report (SOC 2 Type II, ISO 27001 certification, or equivalent), subject to appropriate redactions to protect third-party confidential information. Publisher will respond to such requests within thirty (30) days. Customer may conduct a more comprehensive on-site or third-party audit only where: (i) a confirmed data breach involving Customer Data has occurred; or (ii) a competent regulatory authority requires it. Any audit must be conducted during normal business hours, on reasonable notice, at Customer's cost, by a mutually agreed qualified third party bound by confidentiality obligations. Publisher may require that any auditor execute a non-disclosure agreement before access is granted.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2.5 Business Continuity.</h3>
                <p>
                  Publisher will maintain a documented business continuity and disaster recovery plan appropriate to the nature of the Offering. Publisher will test the plan at least annually and will provide Customer with a written summary of the plan and the most recent test results upon reasonable written request. The business continuity plan will address, at minimum, recovery time objectives for the Offering in the event of a failure of Publisher's primary infrastructure.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>3. Confidentiality</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.1 Scope.</h3>
                <p>
                  This Section governs the treatment of all Confidential Information exchanged between the parties in connection with this Agreement and supersedes any prior non-disclosure agreement between the parties to the extent it relates to the subject matter of this Agreement.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.2 Definition.</h3>
                <p>
                  "Confidential Information" means all non-public, confidential, or proprietary information disclosed by one party to the other in any form or medium, whether before or after the Effective Date, including: business, financial, technical, operational, legal, and strategic information; trade secrets, algorithms, software, source code, and product plans; information concerning personnel, customers, suppliers, and partners; Passenger Data, Customer Data, Airline Customisations, Support Data, the terms of this Agreement, and Customer's account credentials. Confidential Information does not include information that: (a) is or becomes publicly available other than through a breach of a confidentiality obligation; (b) was lawfully in the receiving party's possession before disclosure without restriction; (c) is received from a third party free of any obligation of confidence; or (d) is independently developed by the receiving party without reference to the disclosing party's Confidential Information.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.3 Obligations.</h3>
                <p>Each party shall:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>protect the other's Confidential Information using at least the same degree of care it applies to its own confidential information, and in any event no less than reasonable care;</li>
                  <li style={{ marginBottom: 8 }}>use the other's Confidential Information only for the purposes of performing its obligations or exercising its rights under this Agreement; and</li>
                  <li style={{ marginBottom: 8 }}>disclose Confidential Information only to its Representatives who have a genuine need to know and who are bound by confidentiality obligations no less protective than those in this Agreement. Each party remains responsible for any breach of this Section by its Representatives.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.4 Prohibition on Reverse Engineering.</h3>
                <p>
                  The receiving party must not reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, structure, or underlying logic of any software or other embodiment of the disclosing party's Confidential Information, except to the extent expressly permitted by mandatory applicable law that cannot be excluded by contract.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.5 Compelled Disclosure.</h3>
                <p>
                  A party may disclose Confidential Information to the extent required by applicable law, court order, or regulatory authority, provided that it: (a) gives the disclosing party prompt prior written notice to the extent legally permitted; and (b) limits the disclosure to the minimum extent required. The disclosing party will have the right to seek a protective order or equivalent relief before disclosure is made.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.6 Duration.</h3>
                <p>
                  Confidentiality obligations apply:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>in respect of Passenger Data and Customer Data that has been returned or destroyed in accordance with Section 11.7.3, for three (3) years from the date of such return or destruction; where data is retained pursuant to a legal obligation, the confidentiality obligation continues for as long as such data is retained and for three (3) years thereafter;</li>
                  <li style={{ marginBottom: 8 }}>in respect of trade secrets, for as long as the information retains its character as a trade secret under applicable law; and</li>
                  <li style={{ marginBottom: 8 }}>in respect of all other Confidential Information, for five (5) years from the date of disclosure.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3.7 Remedies.</h3>
                <p>
                  Each party acknowledges that a breach of this Section may cause immediate and irreparable harm for which monetary damages alone may be an insufficient remedy. To the extent permitted by applicable law, each party is entitled to seek injunctive relief, specific performance, or other equitable remedies to prevent or restrain any actual or threatened breach, without prejudice to any other rights or remedies available at law or in equity.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>4. Service Levels</h2>
                <p>
                  Publisher's uptime commitment, maintenance windows, and service credit entitlements are set out in Annexure A (Service Level Agreement), which is incorporated into this Agreement by reference. Publisher commits to a Monthly Uptime Percentage of 97.5%, excluding downtime attributable to: (a) scheduled maintenance windows notified in advance; (b) failures of IBM or other third-party infrastructure outside Publisher's reasonable control; or (c) Customer's acts or omissions. In the event of any inconsistency between Annexure A and the body of this Agreement, the body of this Agreement prevails. Service credits are Customer's sole and exclusive remedy for SLA failures. Nothing in this Section limits any right Customer may have to terminate this Agreement for cause under Section 11.3.
                </p>
                <p>
                  Publisher will give Customer prior written notice before deploying material software updates to the Offering. Updates to Admin Dashboard content (templates, brand guidelines, prompt overrides) are Customer-controlled and are not subject to update notifications. Version upgrades and Admin Dashboard access are included under the base Subscription.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>5. Force Majeure</h2>
                <p>
                  Neither party will be liable for any failure or delay in performing its obligations under this Agreement to the extent that such failure or delay is caused by circumstances beyond that party's reasonable control, including acts of God, natural disasters, pandemic or epidemic, acts of government, war, terrorism, civil unrest, industrial action, power or telecommunications failures, or failures of third-party infrastructure providers (including IBM) ("Force Majeure Event"). The affected party will: (a) promptly notify the other party upon becoming aware of the Force Majeure Event; (b) use reasonable endeavours to mitigate the effects of and overcome the Force Majeure Event; and (c) resume performance as soon as reasonably practicable. For the avoidance of doubt, a Force Majeure Event affecting the aviation industry (such as severe weather, airspace closure, or air traffic control failure) that simultaneously causes both the disruption events to which the Offering responds and the unavailability of the Offering itself will excuse Publisher's performance under the SLA to the extent the unavailability is directly attributable to that Force Majeure Event. Publisher's SLA exclusions in Section 4 apply concurrently with this Section. If a Force Majeure Event continues for more than thirty (30) consecutive days, either party may terminate this Agreement on written notice without further liability, other than for obligations accrued prior to the Force Majeure Event.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>6. Compliance Monitoring</h2>
                <p>
                  Publisher may monitor Customer's use of the Offering through the Offering's built-in usage and access logs to verify compliance with the terms of this Agreement. If Publisher determines that Customer is using the Offering outside the scope of its Subscription, Publisher will notify Customer and Customer must promptly remedy the non-compliance, including by purchasing the appropriate Subscription tier if required. All information obtained through compliance monitoring is Confidential Information and may only be used for the purpose of verifying compliance. Upon reasonable request, Publisher will make available to Customer all information necessary to demonstrate compliance with GDPR obligations for the processing of Personal Data, including through a security questionnaire or self-attestation process.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>7. Warranties and Disclaimers</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>7.1 Publisher's Warranties.</h3>
                <p>Publisher continuously warrants that:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>it has the full right and authority to enter into this Agreement and to grant the rights set out herein;</li>
                  <li style={{ marginBottom: 8 }}>performing its obligations under this Agreement will not conflict with or violate any other agreement to which it is a party;</li>
                  <li style={{ marginBottom: 8 }}>the Offering will conform to the functionality described in the Documentation in all material respects;</li>
                  <li style={{ marginBottom: 8 }}>to the best of Publisher's knowledge at the time of publication, the Offering does not infringe any third-party patent, copyright, trademark, or trade secret; and</li>
                  <li style={{ marginBottom: 8 }}>the Offering does not contain any virus, malware, or malicious code that would damage or impair Customer's systems, networks, or data.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>7.2 AI Messaging Disclaimer.</h3>
                <p>
                  Publisher does not warrant the accuracy, completeness, suitability, or regulatory compliance of any AI-generated message, rebooking offer, compensation eligibility determination, or other AI Output generated by the Offering. The Offering is a decision-support and communication-automation tool. Customer bears sole responsibility for enabling and maintaining the HITL approval process in accordance with Section 1.8, and all messages approved and dispatched under that process are made at Customer's sole risk and responsibility. Publisher's warranty in Section 7.1.3 applies to the Offering's conformance with its documented messaging and decisioning logic only, and not to the accuracy, completeness, or regulatory compliance of any individual AI Output.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>7.3 Warranty Remedy.</h3>
                <p>
                  If the Offering fails to conform to the warranty in Section 7.1.3, Publisher will use reasonable commercial efforts to correct the non-conformity within thirty (30) days of receiving written notice from Customer identifying the failure in reasonable detail. If Publisher has not corrected the non-conformity or provided a reasonable workaround that restores material functionality within that thirty (30) day period, Customer may, at Customer's election:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>terminate the Subscription on written notice and receive a pro-rata refund of pre-paid Subscription fees for the unexpired portion of the then-current Subscription Year; or</li>
                  <li style={{ marginBottom: 8 }}>continue the Subscription and receive a service credit in an amount to be agreed by the parties, acting reasonably, reflecting the period and severity of the non-conformity.</li>
                </ol>
                <p>
                  This Section sets out Customer's sole and exclusive remedy for any warranty failure under Section 7.1, except as provided in Section 11.4.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>7.4 General Disclaimer.</h3>
                <p>
                  Save as expressly set out in this Agreement, the Offering is provided on an "as is" basis. To the fullest extent permitted by applicable law, Publisher excludes all warranties, conditions, and representations, whether express, implied, or statutory, including any implied warranty of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>8. Indemnity</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>8.1 By Publisher.</h3>
                <p>
                  Publisher will, at its own expense, defend Customer against any third-party claim alleging that Customer's authorised use of the Offering in accordance with this Agreement infringes a third party's intellectual property rights ("IP Claim"), and will indemnify Customer for damages, costs, and legal fees finally awarded by a court of competent jurisdiction or agreed in a written settlement approved in advance by Publisher. Publisher's aggregate liability under this Section 8.1 shall not exceed the total Subscription fees paid by Customer in the twelve (12) months immediately preceding the IP Claim.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>8.2 Exclusions from Publisher's Indemnity.</h3>
                <p>
                  Publisher has no obligation under Section 8.1 to the extent that an IP Claim arises from:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>Customer's use of the Offering in combination with software, hardware, data, or services not provided or approved in writing by Publisher, where the claim would not have arisen but for that combination;</li>
                  <li style={{ marginBottom: 8 }}>any modification of the Offering not made or authorised in writing by Publisher;</li>
                  <li style={{ marginBottom: 8 }}>Customer's failure to use the most current version of the Offering where Publisher has made a non-infringing version available and given Customer notice to upgrade;</li>
                  <li style={{ marginBottom: 8 }}>Customer's use of the Offering in a manner contrary to this Agreement or the Documentation; or</li>
                  <li style={{ marginBottom: 8 }}>Airline Customisations or Passenger Data provided by Customer.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>8.3 By Customer.</h3>
                <p>
                  Customer will, at its own expense, defend Publisher against any third-party claim arising from: (a) Customer's breach of this Agreement; (b) the unlawful or unauthorised use of the Offering by Customer or its Authorised Users; or (c) any third-party passenger claim arising from a communication approved and dispatched by Customer through the HITL process ("Customer Indemnity Claim"), except where such claim arises from a defect in the Offering itself rather than from Customer's configuration, content, or instructions. Customer will indemnify Publisher for damages, costs, and legal fees finally awarded or agreed in a written settlement approved in advance by Customer. Customer's aggregate liability under this Section 8.3 shall not exceed the total Subscription fees paid by Customer in the twelve (12) months immediately preceding the relevant claim.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>8.4 Indemnity Procedure.</h3>
                <p>The party seeking indemnification ("Indemnified Party") must:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>give the indemnifying party prompt written notice of the claim (and in any event within such time as to avoid material prejudice to the indemnifying party's ability to defend);</li>
                  <li style={{ marginBottom: 8 }}>grant the indemnifying party sole control of the defence and settlement of the claim; and</li>
                  <li style={{ marginBottom: 8 }}>provide reasonable cooperation and assistance at the indemnifying party's expense.</li>
                </ol>
                <p>
                  The Indemnified Party may participate in the defence at its own cost with counsel of its choice. The indemnifying party may not enter into any settlement that: (i) imposes any financial liability or obligation on the Indemnified Party; (ii) requires the Indemnified Party to make any admission of liability or fault; or (iii) does not include a full and unconditional release of the Indemnified Party from the claim; in each case without the Indemnified Party's prior written consent, not to be unreasonably withheld or delayed.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>9. Limitation of Liability</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.1 Aggregate Cap.</h3>
                <p>
                  Each party's total aggregate liability to the other under or in connection with this Agreement, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, is limited to the total Subscription fees paid by Customer in the twelve (12) months immediately preceding the event giving rise to the claim.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.2 Data Breach Cap.</h3>
                <p>
                  Notwithstanding Section 9.1, in the event of unauthorised access, use, or disclosure of Passenger Data or Customer Data due to a breach of Publisher's obligations under Section 2.5 (Security), Publisher's maximum aggregate liability will not exceed the greater of: (a) two times (2x) the Subscription fees paid by Customer in the twelve (12) months immediately preceding the incident; or (b) USD 500,000.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.3 AI Output Reliance.</h3>
                <p>
                  Without prejudice to Section 9.1, Publisher has no liability for any loss, cost, damage, or regulatory penalty arising from any AI Output generated by the Offering, including messaging errors, incorrect rebooking offers, or inaccurate compensation eligibility determinations, regardless of whether the HITL workflow was enabled, modified, or bypassed by Customer. This exclusion does not apply, and Publisher's liability shall instead be assessed under Section 9.1, where the Offering can be shown to have generated an output that materially deviates from the functionality described in the Documentation as a direct result of Publisher's own material breach of this Agreement. For the avoidance of doubt, this Section 9.3 is not overridden by the gross negligence or fraud exception in Section 9.5.4 except where Publisher's gross negligence or fraud directly caused the AI Output defect.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.4 Exclusion of Consequential Loss.</h3>
                <p>
                  Neither party is liable for any indirect, incidental, special, punitive, or consequential loss or damage, including loss of profits, loss of revenue, loss of data, business interruption, or reputational damage, arising under or in connection with this Agreement, regardless of the cause of action or the theory of liability, even if that party has been advised of the possibility of such damages.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>9.5 Exceptions.</h3>
                <p>
                  The limitations in Sections 9.1 and 9.4 do not apply to liability arising from:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>breach of Section 3 (Confidentiality), provided that a party's aggregate liability for a confidentiality breach shall not in any event exceed two times (2x) the annual Subscription fees paid in the twelve months preceding the breach, unless caused by gross negligence, wilful misconduct, or fraud;</li>
                  <li style={{ marginBottom: 8 }}>a party's indemnification obligations under Section 8, which are subject to the caps in Sections 8.1 and 8.3 respectively;</li>
                  <li style={{ marginBottom: 8 }}>death or personal injury caused by a party's negligence, to the extent such liability cannot be excluded by applicable law; or</li>
                  <li style={{ marginBottom: 8 }}>gross negligence, wilful misconduct, or fraud, provided that this exception does not expand Publisher's liability for AI Outputs beyond the scope stated in Section 9.3.</li>
                </ol>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>10. Pricing and Payment</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.1 Bespoke Pricing.</h3>
                <p>
                  All commercial terms, including Subscription fees, any volume or usage-based components, and payment schedules are individually negotiated and set out in the applicable Order. No binding pricing commitment exists until an Order has been executed by both parties. Prospective customers must contact Publisher's sales team to obtain a quotation. Publisher reserves the right to decline to contract with any prospective customer at its sole discretion.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.2 One-Time Setup Fee.</h3>
                <p>
                  In addition to the recurring Subscription fees, Customer will pay a one-time, non-refundable setup fee in the amount set out in the applicable Order ("Setup Fee"). The Setup Fee covers onboarding, initial configuration, integration with Customer's airline APIs and CDP, and go-live support as described in the Order. The Setup Fee is due and payable within thirty (30) days of the Effective Date, or as otherwise specified in the Order, and is payable regardless of whether Customer completes onboarding or activates the Offering. The Setup Fee is non-refundable in all circumstances, including on termination of this Agreement by either party.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.3 Subscription Fees.</h3>
                <p>
                  Subscription fees are invoiced in advance for each Subscription Year, or in accordance with the billing cadence set out in the Order. All invoices are due and payable within thirty (30) days of the invoice date unless a different payment period is specified in the Order.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.4 Late Payment.</h3>
                <p>
                  Amounts not paid by the due date will accrue interest from the due date at the rate of 1.5% per month (or the maximum rate permitted by applicable law, whichever is lower), compounding monthly. Publisher may, on fourteen (14) days' prior written notice, suspend Customer's access to the Offering if any invoice remains unpaid for more than thirty (30) days past its due date. Suspension under this Section does not relieve Customer of its obligation to pay outstanding amounts or constitute a waiver of any of Publisher's rights.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.5 Taxes.</h3>
                <p>
                  All fees set out in an Order are exclusive of applicable taxes, levies, duties, or similar governmental assessments, including goods and services tax (GST), value added tax (VAT), and withholding taxes ("Taxes"). Customer is responsible for paying all Taxes associated with its purchases under this Agreement, excluding taxes based on Publisher's net income. Where Publisher is required by law to collect Taxes, Publisher will invoice Customer for those Taxes and Customer will pay them in addition to the fees. If Customer is required by law to withhold any Taxes from payments to Publisher, Customer will gross up the payment so that Publisher receives the full invoiced amount after withholding.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.6 Disputed Invoices.</h3>
                <p>
                  If Customer disputes any invoice in good faith, Customer must: (a) pay the undisputed portion by the due date; (b) notify Publisher in writing of the disputed amount and the basis for the dispute within seven (7) days of receipt of the invoice; and (c) cooperate with Publisher to resolve the dispute promptly. Interest will not accrue on amounts subject to a bona fide dispute raised in accordance with this Section during the period of active dispute resolution. Disputes not notified within fifteen (15) days of receipt of invoice are deemed accepted.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>10.7 No Deduction or Set-Off.</h3>
                <p>
                  Customer will pay all amounts due under this Agreement in full without any deduction, set-off, counterclaim, or withholding (other than withholding Taxes addressed in Section 10.5), unless Customer has a court order requiring deduction or withholding of a specific amount.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>11. Term and Termination</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.1 Term.</h3>
                <p>
                  This Agreement takes effect on the Effective Date and continues for an initial Subscription Year of twelve (12) months, renewing automatically for successive Subscription Years in accordance with Section 1.2, unless terminated in accordance with this Section.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.2 Termination Without Cause.</h3>
                <p>
                  Either party may terminate this Agreement or any active Subscription without cause by giving at least sixty (60) days' prior written notice. During the initial Subscription Year, termination without cause takes effect at the end of that initial Subscription Year. For any subsequent Subscription Year, termination takes effect at the end of the Subscription Year in which the sixty (60) day notice period expires. No refund is provided for any Subscription fees paid for the Subscription Year in which notice is given. Publisher will not provide refunds or credits for any partial Subscription Year following termination without cause.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.3 Termination for Cause.</h3>
                <p>
                  Either party may terminate this Agreement immediately on written notice if:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>the other party commits a material breach of this Agreement and fails to remedy it within thirty (30) days of receiving written notice identifying the breach in reasonable detail; or</li>
                  <li style={{ marginBottom: 8 }}>the other party becomes Insolvent.</li>
                </ol>
                <p>
                  Without limiting what constitutes a material breach, the following will each constitute a material breach by the relevant party: by Publisher (i) persistent failure to meet the Monthly Uptime Percentage in Annexure A for three (3) or more consecutive calendar months; (ii) a confirmed data breach caused by Publisher's gross negligence or wilful misconduct; (iii) Publisher's insolvency; or (iv) Publisher's material breach of Section 2 (Data and Privacy) or Section 3 (Confidentiality); by Customer (i) non-payment of any Subscription fee or Setup Fee for more than thirty (30) days past its due date under Section 10; (ii) breach of Sections 1.5 or 1.8 that is not remedied within the cure period; or (iii) Customer's insolvency. Upon termination for cause by Customer, Customer will receive a credit for any Subscription fees paid in advance for any period after the date of termination.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.4 Warranty Termination.</h3>
                <p>
                  If Publisher commits a material breach of the warranties in Section 7.1 that is not remedied following the process in Section 7.3 within thirty (30) days, Customer may terminate the Subscription on written notice. Publisher will provide Customer a pro-rata refund of all pre-paid Subscription fees for the unexpired period of the then-current Subscription Year.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.5 Product Discontinuation.</h3>
                <p>
                  Publisher may discontinue the Offering at any time on at least ninety (90) days' prior written notice to active subscribers. Active Subscriptions will continue to be honoured until the end of the Subscription Year in which the notice period expires. Publisher has no obligation to maintain, develop, support, or replace the Offering after the discontinuation date.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.6 Suspension.</h3>
                <p>
                  Publisher may suspend Customer's access to the Offering during any period of material breach by Customer, after giving Customer reasonable prior notice (which may be reduced or waived in cases of security risk or regulatory obligation). Any suspension will be proportionate to and no longer than necessary to address the breach.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.7 Consequences of Termination.</h3>
                <p>Upon termination or expiry of this Agreement:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>all licences granted under this Agreement terminate immediately;</li>
                  <li style={{ marginBottom: 8 }}>all amounts due under any unpaid invoices, including any accrued interest, become due and payable immediately; and</li>
                  <li style={{ marginBottom: 8 }}>each party will, within thirty (30) days of termination or expiry, return or securely destroy all of the other's Confidential Information (including all Passenger Data and Customer Data) in its possession or control, and will issue a written certificate of deletion within a further ten (10) days, subject to any retention obligations imposed by applicable law or regulation. Where a party retains data pursuant to a legal obligation, it will notify the other party in writing of the nature and duration of the retention obligation.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>11.8 Survival.</h3>
                <p>
                  The following Sections survive termination or expiry of this Agreement for any reason: 1.4, 1.5, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.6, 3, 7.2, 7.4, 8, 9, 11.7, 12, and 13.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>12. General</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.1 Entire Agreement.</h3>
                <p>
                  This Agreement, together with the Annexures and Order forms, constitutes the entire agreement between the parties with respect to the Offering and supersedes all prior negotiations, representations, warranties, and agreements. Nothing in this Section limits any claim for fraudulent misrepresentation. Customer's use of the Offering is also subject to Publisher's Acceptable Use Policy as published at Airalert.aionos.ai. Publisher will not update the Acceptable Use Policy in a manner that materially restricts Customer's rights under this Agreement without Customer's prior written consent. In the event of any conflict, the following order of precedence applies:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>this Agreement;</li>
                  <li style={{ marginBottom: 8 }}>the Acceptable Use Policy;</li>
                  <li style={{ marginBottom: 8 }}>Annexure A (Service Level Agreement);</li>
                  <li style={{ marginBottom: 8 }}>Annexure B (Incident Response and Support); and</li>
                  <li style={{ marginBottom: 8 }}>Documentation.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.2 Independent Contractors.</h3>
                <p>
                  The parties are independent contractors. Nothing in this Agreement creates any partnership, joint venture, agency, franchise, or employment relationship between them.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.3 Amendments.</h3>
                <p>
                  No amendment to this Agreement is effective unless made in writing and signed by authorised representatives of both parties. Publisher will not unilaterally vary the terms of this Agreement during the term of any active Subscription without Customer's prior written consent.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.4 Assignment.</h3>
                <p>
                  Customer may not assign or transfer this Agreement or any rights under it without Publisher's prior written consent, except to a successor entity in connection with a merger, acquisition, or transfer of substantially all of Customer's assets, provided that the successor assumes all of Customer's obligations under this Agreement in writing. Publisher may assign this Agreement to an Affiliate or to a successor entity without Customer's consent, on written notice. Publisher will provide Customer with at least thirty (30) days' prior written notice of any assignment to a third party that is a direct competitor of Customer's core airline business. Customer may terminate this Agreement without penalty within thirty (30) days of receiving such notice. Any purported assignment in breach of this Section is void.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.5 Severability.</h3>
                <p>
                  If any provision of this Agreement is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, it will be modified to the minimum extent necessary to make it enforceable. If modification is not possible, it will be severed from this Agreement, and the remaining provisions will continue in full force and effect.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.6 Waiver.</h3>
                <p>
                  A failure or delay by either party in exercising any right or remedy under this Agreement does not constitute a waiver of that right or remedy. A waiver of any breach does not constitute a waiver of any subsequent or continuing breach. Any waiver must be in writing and signed by the waiving party.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.7 No Third-Party Rights.</h3>
                <p>
                  This Agreement does not create any rights in favour of, and is not enforceable by, any person or entity who is not a party to it, except as expressly provided. For the avoidance of doubt, passengers and other data subjects are not third-party beneficiaries of this Agreement.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.8 Notices.</h3>
                <p>
                  All notices under this Agreement must be in writing. Notices to Publisher must be sent to: (a) aionoslegal@aionos.ai; and (b) Aionos India Private Limited at its address mentioned above, Attention: Legal. Notices to Customer will be sent to the contact details designated by Customer in the applicable Order, or as otherwise notified to Publisher in writing. A notice sent by email is effective upon confirmation of receipt; a notice sent by courier or registered post is effective on the date shown on the delivery confirmation. In the event of a bounce or delivery failure of any email notice, the sender must promptly re-send the notice by courier or registered post.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.9 Governing Law.</h3>
                <p>
                  This Agreement is governed by the laws of India, without reference to its conflict of law principles. The parties expressly agree that the United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement. Nothing in this Section limits the application of the GDPR or other mandatory Data Protection Laws as required by applicable EU or national law.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.10 Dispute Resolution.</h3>
                <p>
                  Any dispute, controversy, or claim arising out of or in connection with this Agreement, including any question as to its existence, validity, or termination, shall be referred to and finally resolved by arbitration administered by the Delhi International Arbitration Centre ("DIAC") in accordance with the DIAC Rules in force at the date of the notice of arbitration, which Rules are incorporated into this clause by reference. The seat of arbitration is New Delhi. The tribunal shall consist of one (1) sole arbitrator. The language of arbitration is English. Either party may apply to the courts of New Delhi for urgent interim or conservatory relief, including an injunction to preserve confidential information or intellectual property, without waiving its right to arbitration.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.11 Compliance with Laws.</h3>
                <p>
                  Each party shall comply with all laws and regulations applicable to its respective obligations and activities under this Agreement, including export control, anti-corruption, anti-money laundering, and data protection laws. Publisher will obtain and maintain all approvals, licences, filings, or registrations necessary to its provision of the Offering.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.12 Construction.</h3>
                <p>
                  This Agreement is in English only. Any translation is for reference purposes only and has no legal effect. The word "including" and similar expressions are to be read as if followed by "without limitation." References to "days" mean calendar days. The word "may" denotes a right, not an obligation. References to "written" or "in writing" mean a paper document or email (where expressly authorised).
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>12.13 Electronic Execution.</h3>
                <p>
                  This Agreement may be accepted electronically, including by click-through acceptance on Publisher's or IBM's platform, and such acceptance has the same legal effect as a handwritten signature.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>13. Definitions</h2>
                <dl className="definition-list">
                  <dt><b>Affiliate: </b>Any entity that directly or indirectly controls, is controlled by, or is under common control with a party. "Control" means ownership of more than fifty percent (50%) of the voting securities of an entity or the power to direct its management and policies.</dt>
                  <dt><b>AI Output: </b>Has the meaning given in Section 1.11.</dt>
                  <dt><b>Airline Customisations: </b>Has the meaning given in Section 1.10.</dt>
                  <dt><b>Anti-Corruption Laws: </b>All applicable laws prohibiting fraud, bribery, corruption, money laundering, and related offences, including the U.S. Foreign Corrupt Practices Act, and the UK Bribery Act 2010.</dt>
                  <dt><b>Authorised User: </b>Any employee, contractor, or agent of Customer who is authorised by Customer to access and use the Offering under this Agreement, including OCC personnel, up to the maximum number specified in the applicable Order.</dt>           
                  <dt><b>Business Day: </b>A day (other than a Saturday, Sunday, or public holiday) on which banks are open for general business in New Delhi, India.</dt>
                  <dt><b>Confidential Information: </b>Has the meaning given in Section 3.2.</dt>
                  <dt><b>Customer Data: </b>All data supplied to Publisher by or on behalf of Customer through use of the Offering, including Passenger Data and Airline Customisations, but excluding Support Data.</dt>                 
                  <dt><b>Data Protection Laws: </b>Any law, regulation, or binding regulatory guidance applicable to either party relating to the processing, protection, privacy, or security of personal data and any applicable national or regional data protection legislation, as amended or replaced from time to time.</dt>                  
                  <dt><b>Documentation: </b>All user manuals, technical specifications, and other materials made available by Publisher describing the functionality, configuration, and use of the Offering, as updated by Publisher from time to time in accordance with Section 1.13.</dt>
                  <dt><b>Feedback: </b>Any idea, suggestion, comment, or input voluntarily provided by Customer to Publisher relating to the Offering or Publisher's products and services.</dt>           
                  <dt><b>Force Majeure Event: </b>Has the meaning given in Section 5.</dt>
                  <dt><b>DPRG: </b>Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and the free movement of such data.</dt>
                  <dt><b>HITL (Human-in-the-Loop): </b>The workflow in which Customer's Authorised Users review and approve passenger notifications before they are dispatched by the Offering.</dt>                  <dt><b>Insolvent: </b>The occurrence of any of the following in relation to a party: admission in writing of inability to pay debts as they fall due; making a general assignment for the benefit of creditors; appointment of a receiver, administrator, or trustee over its assets (unless set aside within 60 days); filing of an insolvency petition (unless dismissed within 60 days); adjudication as bankrupt or insolvent; commencement of winding-up or liquidation; or cessation of business.</dt>
                  <dt><b>Monthly Uptime Percentage: </b>Has the meaning given in Annexure A.</dt>
                  <dt><b>Offering: </b>The Aviation Disruption Recovery Agent platform and all associated services, features, AI agents, Admin Dashboard, MCP server, and components made available by Publisher under this Agreement, as described in the Documentation.</dt>
                  <dt><b>Order: </b>A written order form, statement of work, or equivalent commercial document executed by both parties that sets out the Subscription fees, Setup Fee, billing cadence, number of Authorised Users, Subscription Year commencement date, and any other agreed commercial terms, and which incorporates this Agreement by reference. In the event of any conflict between an Order and this Agreement, this Agreement prevails unless the Order expressly states otherwise.</dt>
                  <dt><b>Passenger Data: </b>Personal Data relating to airline passengers processed by Publisher on behalf of Customer in connection with the Offering, as further described in Section 2.1.</dt>
                  <dt><b>Personal Data: </b>Any information relating to an identified or identifiable natural person, as defined under applicable Data Protection Laws.</dt>
                  <dt><b>Representatives: </b>A party's employees, Affiliates, contractors, advisors, and consultants.</dt>
                  <dt><b>Setup Fee: </b>Has the meaning given in Section 10.2.</dt>
                  <dt><b>Standard Contractual Clauses: </b>The standard contractual clauses for the transfer of personal data to third countries as set out in Commission Implementing Decision (EU) 2021/914 of 4 June 2021, Module 2 (Controller to Processor).</dt>
                  <dt><b>Sub-processor: </b>Any third party to whom Publisher delegates its data processing obligations under this Agreement, including Publisher Affiliates and infrastructure providers, who stores, collects, transfers, or otherwise processes Personal Data or Customer Data in connection with providing the Offering.</dt>
                  <dt><b>Subscription: </b>Customer's paid right to access and use the Offering for the Subscription Year, as granted under and subject to the terms of this Agreement and the applicable Order.</dt>
                  <dt><b>Subscription Year: </b>Has the meaning given in Section 1.2.</dt>
                  <dt><b>Support Data: </b>All data, including text, sound, video, image files, or software, provided to Publisher by or on behalf of Customer through an engagement with Publisher to obtain technical support for the Offering.</dt>
                </dl>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>ANNEXURE A — SERVICE LEVEL AGREEMENT</h2>
                <p>
                  This Annexure forms part of the Standard Contract between Aionos India Private Limited and Customer. Defined terms not defined here have the meanings given in Section 12 of the Agreement.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>A. Uptime Commitment.</h3>
                <p>
                  Publisher commits to a Monthly Uptime Percentage of ninety nine point nine percent (99.9%) for the Offering.
                </p>
                <p>
                  "Monthly Uptime Percentage" means the total number of minutes in a calendar month during which the Offering's recommendation engine is available and operational, divided by the total number of minutes in that calendar month, expressed as a percentage.
                </p>
                <p>
                  "Downtime" means any continuous period during which the Offering is wholly unavailable, excluding Excluded Downtime.
                </p>
                <p>
                  "Excluded Downtime" means unavailability caused by: (a) scheduled maintenance notified in accordance with Section B; (b) Customer's own acts or omissions, including misconfigurations, incorrect API inputs, or use contrary to this Agreement; (c) failures of third-party systems outside Publisher's reasonable control, including Customer's own infrastructure or data providers; (d) a Force Majeure Event; or (e) IBM infrastructure outages not attributable to Publisher's architecture or deployment choices.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>B. Simulation Engine Availability.</h3>
                <p>
                  The Monthly Uptime Percentage in Section A applies to the Offering's recommendation engine. The simulation and what-if scenario engine is a non-transactional feature and is excluded from the uptime calculation. Publisher will use reasonable efforts to maintain simulation engine availability consistent with overall platform availability but does not commit to a separate uptime percentage for this feature. Temporary unavailability of the simulation engine does not constitute Downtime for the purposes of service credit calculations.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>C. Scheduled Maintenance.</h3>
                <p>
                  Publisher will give Customer at least five (5) business days' prior written notice of any scheduled maintenance that will affect Offering availability. Publisher will use reasonable efforts to schedule maintenance between 00:00 and 06:00 Indian Standard Time on weekdays, or at any time on weekends, and to complete maintenance within the notified window. Maintenance carried out in accordance with this Section does not constitute Downtime.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>D. Service Credits.</h3>
                <p>
                  If Publisher fails to meet the Monthly Uptime Percentage in any calendar month, Customer is entitled to a service credit applied against the next monthly invoice (or paid out directly if the Agreement has terminated), calculated as follows:
                </p>

                <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: 12, marginBottom: 12 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Monthly Uptime Percentage</th>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Credit (% of affected month's fees)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>99.0% to &lt; 99.9%</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>10%</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>95.0% to &lt; 99.0%</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>25%</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Below 95.0%</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>50%</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  Service credits are Customer's sole and exclusive remedy for SLA failures, subject to the termination right in Section 11.3. To claim a credit, Customer must submit a written request to aionoslegal@aionos.ai within thirty (30) days of the end of the affected month, setting out the dates and duration of Downtime and its impact. Publisher will respond within fifteen (15) business days. Credits are not available for Excluded Downtime. Total credits in any single month shall not exceed 50% of that month's Subscription fees.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>E. Persistent Failure.</h3>
                <p>
                  If Publisher fails to meet the Monthly Uptime Percentage for three (3) or more consecutive calendar months, Customer may terminate the Subscription without penalty under Section 11.3.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>F. Reporting.</h3>
                <p>
                  Publisher will make availability data accessible through its status page at Airalert.aionos.ai. Publisher will notify Customer without undue delay of any Downtime event that causes the Monthly Uptime Percentage to fall below 99.9%, and will provide a written root cause analysis within ten (10) business days of the resolution of any Downtime exceeding four (4) continuous hours.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>G. Force Majeure.</h3>
                <p>
                  Publisher is not in breach of its uptime commitment to the extent that a failure is caused by a Force Majeure Event. A "Force Majeure Event" is any event beyond Publisher's reasonable control, including natural disaster, act of war or terrorism, pandemic, governmental action, or widespread failure of internet infrastructure. Publisher will notify Customer promptly upon becoming aware of a Force Majeure Event and will use reasonable efforts to restore normal service as soon as practicable.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 20, paddingTop: 20, borderTop: '2px solid #e5e7eb' }}>ANNEXURE B — INCIDENT RESPONSE AND SUPPORT</h2>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>1. Support Tiers</h3>

                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>1.1 Standard Support</h4>
                <p>
                  Subject to the terms of this Agreement and during the applicable Subscription Term, Publisher shall make available Standard Support to Customer at no additional charge.
                </p>
                <p>Standard Support shall include:</p>
                <p>(a) Support Channels:</p>
                <ul style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>Email-based support</li>
                  <li style={{ marginBottom: 8 }}>Web-based ticketing system</li>
                </ul>
                <p>(b) Hours of Coverage: 24×7</p>
                <p>(c) Scope of Support:</p>
                <ul style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>Incident intake, classification, and initial troubleshooting</li>
                  <li style={{ marginBottom: 8 }}>Diagnosis and remediation of Incidents attributable to the Service</li>
                  <li style={{ marginBottom: 8 }}>General guidance concerning use of the Service in accordance with Publisher's published documentation</li>
                </ul>

                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>1.2 Optional Enhanced Support</h4>
                <p>
                  Publisher may, at its discretion, offer enhanced or premium support tiers, including but not limited to extended hours of coverage, 24×7 support, priority incident handling, proactive monitoring, or assignment of a dedicated technical account manager.
                </p>
                <p>
                  Any such enhanced support shall be subject to additional fees and shall apply only if expressly set forth in an applicable Order Form or written amendment executed by both Parties.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>2. Incident Classification and Response Times</h3>

                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>2.1 Incident Severity Levels</h4>
                <p>(a) Severity 1 (Critical): An Incident resulting in a complete outage of the production environment or unavailability of a mission-critical function of the Service, with no commercially reasonable workaround available.</p>
                <p>(b) Severity 2 (High): An Incident causing significant degradation of core functionality or material business impact, for which a temporary workaround exists.</p>
                <p>(c) Severity 3 (Medium): An Incident resulting in limited impairment of non-critical functionality or performance degradation with minimal operational impact.</p>
                <p>(d) Severity 4 (Low): Requests relating to cosmetic issues, documentation errors, configuration questions, or enhancement requests.</p>

                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>2.2 Response and Resolution Targets</h4>
                <p>Publisher shall use commercially reasonable efforts to meet the following targets. Render as an HTML table:</p>

                <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: 12, marginBottom: 12 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Severity</th>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Initial Response Time</th>
                      <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb', fontWeight: 700 }}>Target Resolution Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Severity 1</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Within one (1) Business hour</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Eight (8) Business hours</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Severity 2</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Within four (4) Business hours</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Two (2) Business Days</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Severity 3</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Within one (1) Business Day</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Five (5) Business Days</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Severity 4</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>Within two (2) Business Days</td>
                      <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>As mutually agreed</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  The foregoing resolution targets are non-binding objectives and do not constitute service level guarantees unless expressly stated otherwise in the Agreement or an applicable SLA.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>3. Escalation</h3>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>3.1 Escalation Process</h4>
                <p>
                  Publisher shall handle Incidents through a tiered escalation structure comprising:
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>Level 1: First-line technical support</li>
                  <li style={{ marginBottom: 8 }}>Level 2: Product specialists or platform engineering</li>
                  <li style={{ marginBottom: 8 }}>Level 3: Senior engineering and architectural resources</li>
                </ol>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginTop: 18, marginBottom: 10 }}>3.2 Escalation Conditions</h4>
                <p>An Incident shall be escalated where:</p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>The Incident is classified as Severity 1;</li>
                  <li style={{ marginBottom: 8 }}>The target resolution time for a Severity 2 or higher Incident is likely to be exceeded; or</li>
                  <li style={{ marginBottom: 8 }}>The Incident reflects a recurring or systemic issue materially affecting the Service.</li>
                </ol>
                <p>
                  Upon written request, Publisher shall facilitate management-level escalation for unresolved Severity 1 or Severity 2 Incidents.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>4. Support Exclusions</h3>
                <p>
                  Publisher shall have no obligation to provide support in connection with issues arising from or attributable to any of the following ("Support Exclusions"):
                </p>
                <ol style={{ marginLeft: 32, marginBottom: 16, listStyleType: 'decimal' }}>
                  <li style={{ marginBottom: 8 }}>Use of the Service in a manner inconsistent with the Agreement or Provider's documentation;</li>
                  <li style={{ marginBottom: 8 }}>Errors, omissions, or misconfigurations caused by Customer or its users;</li>
                  <li style={{ marginBottom: 8 }}>Failures or malfunctions of third-party software, hardware, GPS devices, telematics equipment, APIs, or telecommunications services not controlled by Publisher;</li>
                  <li style={{ marginBottom: 8 }}>Customer's infrastructure, networking environment, cloud services, or data connectivity issues;</li>
                  <li style={{ marginBottom: 8 }}>Use of beta, preview, or non-generally-available features;</li>
                  <li style={{ marginBottom: 8 }}>Events of force majeure; or</li>
                  <li style={{ marginBottom: 8 }}>Services or activities not expressly included in the Customer's Subscription.</li>
                </ol>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>5. Support Contact Details</h3>
                <dl className="definition-list">
                  <dt>Primary Support Email: Deepankur.sinha@aionos.ai</dt>
                  
                  <dt>Support Portal: Admin Dashboard</dt>
                  
                  <dt>Emergency Contact (Severity 1 Only): Rishabh.Raizada@aionos.ai</dt>
                  
                </dl>
                <p>Emergency contact details shall be used solely for Severity 1 Incidents affecting production environments.</p>


                </div>
              </>
            )}
      </section>
    </div>
  );
}

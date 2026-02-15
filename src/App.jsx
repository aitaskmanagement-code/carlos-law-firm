import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting Carlos Law Firm! We will review your case and contact you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', caseType: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const NavLink = ({ page, children }) => (
    <a 
      href="#" 
      className={currentPage === page ? 'active' : ''}
      onClick={(e) => { e.preventDefault(); setCurrentPage(page) }}
    >
      {children}
    </a>
  )

  const renderHome = () => (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fighting for Justice <span>No Win, No Fee</span></h1>
          <p>Carlos Law Firm provides expert contingency attorneys in Miami, Florida. You don't pay unless we win your case. Get the justice you deserve today.</p>
          <div className="hero-cta">
            <button className="cta-btn" onClick={() => setCurrentPage('contact')}>Free Consultation</button>
            <button className="secondary-btn" onClick={() => setCurrentPage('practice')}>Our Practice Areas</button>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="banner">
        <h3>📞 Call Now: (305) 555-0100 | Se Habla Español</h3>
      </div>

      {/* About */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Miami's Trusted Contingency Attorneys</h2>
            <p>At Carlos Law Firm, we believe everyone deserves access to quality legal representation, regardless of their financial situation. That's why we work on a contingency fee basis — you pay nothing unless we win your case.</p>
            <p>With over 20 years of experience in Florida courts, our team of dedicated attorneys has recovered millions of dollars for clients in Miami and across South Florida. We handle all types of personal injury and civil litigation cases.</p>
            <p>Our commitment to excellence and personalized attention sets us apart. When you hire Carlos Law Firm, you'll work directly with an experienced attorney who will fight for the maximum compensation you deserve.</p>
            <button className="cta-btn" onClick={() => setCurrentPage('contact')}>Schedule Free Consultation</button>
          </div>
          <div className="about-image">
            ⚖️ Justice for All
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="section-header">
          <h2>Our Legal Services</h2>
          <p>Comprehensive legal representation for all case types in Miami, Florida</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🚗</div>
            <h3>Car Accidents</h3>
            <p>Serious injuries from auto accidents require experienced legal representation. We fight for maximum compensation for medical bills, lost wages, and pain and suffering.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>Medical Malpractice</h3>
            <p>When healthcare providers cause harm through negligence, we hold them accountable. Complex malpractice cases handled with expertise and compassion.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Slip & Fall</h3>
            <p>Property owners must maintain safe premises. If you've been injured on someone's property, we help you seek fair compensation for your injuries.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👷</div>
            <h3>Workers Compensation</h3>
            <p>On-the-job injuries can leave you unable to work. We help injured workers get the benefits they deserve from employers and insurance companies.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚰️</div>
            <h3>Wrongful Death</h3>
            <p>Losing a loved one due to someone else's negligence is devastating. We help families seek justice and compensation for their devastating loss.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚤</div>
            <h3>Boating Accidents</h3>
            <p>Miami's waterways can be dangerous. We represent victims of boat and jet ski accidents, including catastrophic injuries and fatalities.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="section-header">
          <h2>Why Choose Carlos Law Firm?</h2>
          <p>Committed to getting you the best possible outcome</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="icon">💰</div>
            <h3>No Win, No Fee</h3>
            <p>We work on contingency. You pay nothing unless we win your case and recover compensation for you.</p>
          </div>
          <div className="why-card">
            <div className="icon">⚖️</div>
            <h3>20+ Years Experience</h3>
            <p>Our attorneys have decades of combined experience fighting for accident victims in Miami and South Florida.</p>
          </div>
          <div className="why-card">
            <div className="icon">🏆</div>
            <h3>$50M+ Recovered</h3>
            <p>We have a proven track record of securing substantial settlements and verdicts for our clients.</p>
          </div>
          <div className="why-card">
            <div className="icon">👥</div>
            <h3>Personal Attention</h3>
            <p>You'll work directly with an experienced attorney, not a paralegal or assistant. We care about your case.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Get Justice?</h2>
        <p>Don't wait. The statute of limitations may limit your ability to file a claim. Get your free consultation today.</p>
        <button className="cta-btn" style={{background: 'white'}} onClick={() => setCurrentPage('contact')}>Free Case Evaluation</button>
      </section>
    </>
  )

  const renderPracticeAreas = () => (
    <>
      <div className="page-header">
        <h1>Practice Areas</h1>
        <p>Comprehensive legal services for accident victims and their families in Miami, Florida</p>
      </div>

      <section className="practice-areas">
        <div className="practice-category">
          <h2>Personal Injury</h2>
          <div className="practice-list">
            <div className="practice-item">
              <h3>Car Accident Attorney Miami</h3>
              <p>Car accidents can cause devastating injuries. Our Miami car accident lawyers help victims recover compensation for medical expenses, lost wages, property damage, and pain and suffering. We handle all types of vehicle accidents including rear-end collisions, T-bone accidents, hit-and-runs, and rideshare accidents.</p>
            </div>
            <div className="practice-item">
              <h3>Truck Accident Lawyer</h3>
              <p>Commercial truck accidents often result in catastrophic injuries due to the size and weight of big rigs. Our experienced truck accident attorneys understand the complex federal and state regulations governing the trucking industry and will hold negligent trucking companies accountable.</p>
            </div>
            <div className="practice-item">
              <h3>Motorcycle Accident Attorney</h3>
              <p>Motorcyclists are particularly vulnerable on Miami's roads. If you've been injured in a motorcycle accident, our dedicated attorneys will fight for fair compensation even when insurance companies try to blame you for the crash.</p>
            </div>
            <div className="practice-item">
              <h3>Pedestrian & Bicycle Accident Lawyer</h3>
              <p>Miami's busy streets pose serious risks for pedestrians and cyclists. If you've been hit by a vehicle, our attorneys will help you navigate the legal process and recover the compensation you deserve.</p>
            </div>
          </div>
        </div>

        <div className="practice-category">
          <h2>Serious Injuries & Wrongful Death</h2>
          <div className="practice-list">
            <div className="practice-item">
              <h3>Medical Malpractice</h3>
              <p>When doctors, hospitals, or healthcare providers fail to meet the standard of care, patients suffer. Our medical malpractice attorneys handle surgical errors, misdiagnosis, birth injuries, medication errors, and more complex medical negligence cases.</p>
            </div>
            <div className="practice-item">
              <h3>Wrongful Death Attorney</h3>
              <p>Losing a family member due to negligence is heartbreaking. We help surviving family members in Miami pursue wrongful death claims for funeral expenses, lost income, loss of companionship, and other damages.</p>
            </div>
            <div className="practice-item">
              <h3>Brain & Spinal Cord Injuries</h3>
              <p>Catastrophic injuries can change lives forever. We help victims of traumatic brain injuries (TBI), spinal cord injuries, and other permanent disabilities secure the long-term care and compensation they need.</p>
            </div>
            <div className="practice-item">
              <h3>Slip and Fall / Premises Liability</h3>
              <p>Property owners in Miami have a legal duty to maintain safe premises. If you've been injured due to hazardous conditions on someone's property, we will fight for the compensation you deserve.</p>
            </div>
          </div>
        </div>

        <div className="practice-category">
          <h2>Additional Practice Areas</h2>
          <div className="practice-list">
            <div className="practice-item">
              <h3>Workers Compensation</h3>
              <p>Florida workers injured on the job are entitled to workers' comp benefits. We help injured workers in Miami navigate the complex claims process and appeal denied claims.</p>
            </div>
            <div className="practice-item">
              <h3>Boating & Maritime Accidents</h3>
              <p>Miami's waterways see numerous accidents involving boats, jet skis, and yachts. Our maritime accident attorneys handle Jones Act claims, cruise ship injuries, and all types of watercraft accidents.</p>
            </div>
            <div className="practice-item">
              <h3>Dog Bite & Animal Attacks</h3>
              <p>Dog owners in Florida can be held strictly liable for injuries caused by their pets. If you've been attacked, we will pursue maximum compensation for your injuries.</p>
            </div>
            <div className="practice-item">
              <h3>Nursing Home Abuse</h3>
              <p>Elderly residents deserve dignified care. If your loved one has suffered abuse or neglect in a Miami nursing home, we will hold the facility accountable and fight for justice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Don't See Your Case Type?</h2>
        <p>We handle many more types of cases. Contact us to discuss your specific situation.</p>
        <button className="cta-btn" style={{background: 'white'}} onClick={() => setCurrentPage('contact')}>Free Consultation</button>
      </section>
    </>
  )

  const renderContact = () => (
    <>
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get your free case evaluation today. Se Habla Español.</p>
      </div>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>At Carlos Law Firm, we offer free consultations for all cases. Fill out the form or call us directly. We're here to help you get the justice you deserve.</p>
          
          <div className="contact-details">
            <h3>Office Location</h3>
            <div className="contact-item">
              <strong>📍 Address:</strong> 123 Brickell Avenue, Suite 1500, Miami, FL 33131
            </div>
            <div className="contact-item">
              <strong>📞 Phone:</strong> (305) 555-0100
            </div>
            <div className="contact-item">
              <strong>📧 Email:</strong> info@carloslawfirm.net
            </div>
            <div className="contact-item">
              <strong>🕐 Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM
            </div>
          </div>

          <div className="contact-details">
            <h3>Service Areas</h3>
            <p>Miami, Miami Beach, Coral Gables, Hialeah, Miami Gardens, North Miami, South Miami, Kendall, Doral, and all of Miami-Dade County, Florida.</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Free Case Evaluation</h3>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(305) 555-0100"
            />
          </div>
          <div className="form-group">
            <label htmlFor="caseType">Case Type</label>
            <select
              id="caseType"
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
            >
              <option value="">Select case type</option>
              <option value="car-accident">Car Accident</option>
              <option value="truck-accident">Truck Accident</option>
              <option value="motorcycle">Motorcycle Accident</option>
              <option value="medical-malpractice">Medical Malpractice</option>
              <option value="slip-fall">Slip & Fall</option>
              <option value="workers-comp">Workers Compensation</option>
              <option value="wrongful-death">Wrongful Death</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Describe Your Case *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Please briefly describe how you were injured..."
            />
          </div>
          <button type="submit" className="form-submit">
            Submit Free Case Evaluation
          </button>
        </form>
      </section>
    </>
  )

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Carlos <span>Law Firm</span></div>
        <ul className="nav-links">
          <li><NavLink page="home">Home</NavLink></li>
          <li><NavLink page="practice">Practice Areas</NavLink></li>
          <li><NavLink page="contact">Contact</NavLink></li>
        </ul>
        <button className="cta-btn" onClick={() => setCurrentPage('contact')}>Free Consultation</button>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && renderHome()}
      {currentPage === 'practice' && renderPracticeAreas()}
      {currentPage === 'contact' && renderContact()}

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Carlos Law Firm</h4>
            <p>Miami's trusted contingency attorneys. No fees unless we win your case.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#" onClick={(e) => {e.preventDefault(); setCurrentPage('home')}}>Home</a>
            <a href="#" onClick={(e) => {e.preventDefault(); setCurrentPage('practice')}}>Practice Areas</a>
            <a href="#" onClick={(e) => {e.preventDefault(); setCurrentPage('contact')}}>Contact</a>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 123 Brickell Ave, Miami, FL</p>
            <p>📞 (305) 555-0100</p>
            <p>📧 info@carloslawfirm.net</p>
          </div>
          <div className="footer-section">
            <h4>Practice Areas</h4>
            <p>Car Accidents</p>
            <p>Medical Malpractice</p>
            <p>Workers Compensation</p>
            <p>Wrongful Death</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Carlos Law Firm. All rights reserved. Attorney Advertising.</p>
        </div>
      </footer>
    </>
  )
}

export default App

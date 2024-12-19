import Header from '../__public/__layouts/Header';
import { Helmet } from 'react-helmet';

const Careers = () => {
  return (
    <>
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />

    <header className="header">
        <div className="header-content">
        <h1>Launch Your <span className="highlight">Career</span> With Us</h1>
        <p>
            Are you passionate about technology and innovation? Do you thrive in a fast-paced environment?  
            <b>Smash Technology</b> is a dynamic and growing company looking for talented individuals to join our team.  
            <span>We offer a unique opportunity to work on cutting-edge technologies and shape the future of app-based services.</span>
        </p>
        </div>
    </header>

    <section className="job-openings">
        <h2 className="section-title">Current Openings</h2>
        <p className="section-subtitle">We are currently seeking qualified candidates for these positions</p>

        <div className="jobs-container">
        <div className="job-card">
            <div className="job-details">
            <h3>Product Designer</h3>
            <p>We are looking for an experienced Product Designer to join our team and help shape user-friendly designs.</p>
            <a href="#" className="read-more">Read more</a>
            </div>
            <button className="apply-btn">Apply</button>
        </div>

        <div className="job-card">
            <div className="job-details">
            <h3>Full Stack Developer</h3>
            <p>Join our growing team to design, develop, and maintain cutting-edge solutions.</p>
            <a href="#" className="read-more">Read more</a>
            </div>
            <button className="apply-btn">Apply</button>
        </div>

        <div className="job-card">
            <div className="job-details">
            <h3>Customer Service Representative</h3>
            <p>Provide exceptional customer support and ensure client satisfaction at every step.</p>
            <a href="#" className="read-more">Read more</a>
            </div>
            <button className="apply-btn">Apply</button>
        </div>
        </div>
    </section>
    <section className="why-choose-us">
        <h2>Why Choose Smash Technology?</h2>
        <div className="choose-content">
        <h3>Work on industry-leading products</h3>
        <p>Be part of a team developing and maintaining innovative apps used by millions globally.</p>
        </div>
    </section>

    </>
  )
}

export default Careers
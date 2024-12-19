import Header from '../__public/__layouts/Header';
import { Helmet } from 'react-helmet';

const InvestmentWithROI = () => {
  return (
    <>
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />
    
  <section className="investment-header">
    <h1>Unlock Investment Opportunities with <br /> Smash Technology</h1>
    <p>
      Welcome to Smash Technology, where innovation meets investment! We're thrilled to present 
      our unique investment plans, each designed to offer exceptional returns every month. Explore 
      our diverse brands and see how you can benefit from our investment plans.
    </p>
  </section>

  <section className="investment-plans">
    <h2>Investment Plans</h2>
    <div className="plans-container">
      <div className="plan-card">
        <h3>Micro Investment</h3>
        <p>Amount</p>
        <h4>₦150,000 - ₦450,000</h4>
        <p>R.O.I</p>
        <span className="roi">2.5%</span>
        <button className="invest-btn">Invest</button>
      </div>

      <div className="plan-card">
        <h3>Macro Investment</h3>
        <p>Amount</p>
        <h4>₦500,000 - ₦5,000,000</h4>
        <p>R.O.I</p>
        <span className="roi">3%</span>
        <button className="invest-btn">Invest</button>
      </div>

      <div className="plan-card">
        <h3>Platinum Investment</h3>
        <p>Amount</p>
        <h4>₦5,000,000 & Above</h4>
        <p>R.O.I</p>
        <span className="roi">3.5%</span>
        <button className="invest-btn">Invest</button>
      </div>
    </div>
  </section>

  <section className="brands">
    <h2>Our Brands</h2>
    <div className="brands-placeholder">
    </div>
  </section>
    </>
  );
}

export default InvestmentWithROI;
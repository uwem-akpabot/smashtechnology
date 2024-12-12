import { Link } from 'react-router-dom';
import { UilYoutube, UilLinkedin, UilEnvelope, UilPhone, UilWhatsapp } 
  from '@iconscout/react-unicons';

const CompanyBanner = (props) => {
  return (
    <div className="zyzics_company_banner zy-c3 zy-c1-xs">
        <div>
            <h1>{props.project} IT Training <br />and Software Ltd.</h1>
        </div> 
        
        {/* <span className="rc">RC. 7921450</span> */}
    
        <nav className="zy-nav nav-right">
                <Link to="/" className="">Our Services</Link>
                <Link to="/" className="">Products</Link>
                <Link to="/" className="">More</Link> 
            </nav>
            
        <div className="contacts">
            <div>
                <h6>
                    <a href="tel:+2348021075169" style={{color: '#17224d'}}>
                        <UilPhone /> +234 802-107-5169
                    </a>
                </h6>
            </div>
            <div>
                <a href="https://wa.me/message/GMNIQ5YNLZRFD1" className="zyzics__social-link" title="Chat with Zyzics on WhatsApp"><UilWhatsapp /></a>
                <a href="" className="zyzics__social-link" title="Send us an email"><UilEnvelope /></a>
                <a href="https://www.youtube.com/@zyzics-it-training" className="zyzics__social-link" title="Subscribe to our YouTube channel"><UilYoutube /></a>
                
                {/* <a href="https://linkedin.com/company/zyzics" className="zyzics__social-link"><UilLinkedin /></a> */}
            </div>        
        </div>         
    </div>
  )
}

export default CompanyBanner

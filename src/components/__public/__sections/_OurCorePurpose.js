import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import biz2 from './../../../assets/images/ourbusiness/Food.png';
import core1 from './../../../assets/images/corevalues/1.png';
import core2 from './../../../assets/images/corevalues/2.png';
import core3 from './../../../assets/images/corevalues/3.png';
import core4 from './../../../assets/images/corevalues/4.png';

const OurCorePurpose = () => {
  return (
    <>
    <div className="sections" id="ourcorepurpose">
        <h2>Our Core Purpose</h2>

        <div className="c1_2 c1-sm c1-xs box">
          <div className="square">
            <img src={biz2} />
          </div>

          <div>
            <div className="num_text">
              <div>
                <h1>1&nbsp;</h1>
                <div class="vertical-line"></div>
              </div>
              <div>
                <h3>Ease Your Stress</h3>
                <p>Our core purpose is to ensure you live an easy and stress-free life. We are breaking down those difficult-to-achieve tasks into a single press of a button 
                so you can have a wonderful experience in the comfort of your home or office space.</p>
              </div>
            </div>

            <div className="num_text">
              <div>
                <h1>2 </h1>
                <div class="vertical-line"></div>
              </div>
              <div>
                <h3>Make A Difference</h3>
                <p>We want you to be unique and different. You don’t have to wait under the sun for a cab or bus or struggle to meet your team or investors as others do. 
                We offer services that will help you make a difference and stand out.</p>
              </div>
            </div>

            <div className="num_text">
              <div>
                <h1>3 </h1>
              </div>
              <div>
                <h3>Get 100% Enjoyment</h3>
                <p>We won’t only ease your stress but also ensure you get 100% satisfaction and first-rate customer service. Our customer support is always available 
                24/7 to attend to your needs.</p>
              </div>
            </div>
          </div>

        </div>
        
      {/* <div className="">
        <img src={biz2} />

        <div className="c2 c1-md c1-sm c1-xs">
          <div className="">
            <h1>1</h1>
            <div class="vertical-line"></div>
            <h1>2</h1>
            <div class="vertical-line"></div>
            <h1>3</h1>
          </div>

          <div>
            <h3>Ease Your Stress</h3>
            <p>Our core purpose is to ensure you live an easy and stress-free life. We are breaking down those difficult-to-achieve tasks into a single press of a button 
              so you can have a wonderful experience in the comfort of your home or office space.</p>
          
            <h3>Make A Difference</h3>
            <p>We want you to be unique and different. You don’t have to wait under the sun for a cab or bus or struggle to meet your team or investors as others do. 
              We offer services that will help you make a difference and stand out.</p>
          
            <h3>Get 100% Enjoyment</h3>
            <p>We won’t only ease your stress but also ensure you get 100% satisfaction and first-rate customer service. Our customer support is always available 
              24/7 to attend to your needs.</p>
          </div>
        </div>

      </div> */}
    </div>
    </>
  )
}
export default OurCorePurpose;
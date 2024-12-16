import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
// import { Link } from 'react-router-dom';
import ceo21 from './../../../../assets/images/otherpages/inner/CEO 21.png';
import vivian21 from './../../../../assets/images/otherpages/inner/Vivian21.png';

const MissionCEO = () => {
  return (
    <>
    <div className="sections" id="about_missionceo">
        <h2>Our Mission &amp; Vision</h2>
        
        <div className="zy-c1 zy-c1-sm zy-c1-xs text-center">
          <p>Smash Technology's aims at revolutionizing the tech industry by delivering innovative, user-centric solutions that transform everyday experiences 
            across e-commerce, transport, real estate, food delivery, and investment, with a vision to be a global leader in technology, driving progress 
            and redefining industries through sustainable innovations that inspire connectivity, growth, and a tech-savvy future.</p>
        </div>
    </div>

    <div className="zy-c2 zy-c1-sm zy-c1-xs text-center ceo-div">
        <img src={ceo21} />
        
        <div>
            <h3>Paul Eigbefoh</h3>
            <h4>Chief Executive Officer Smash Technology</h4>
            
            <p>Paul Eigbefoh is the visionary CEO of Smash Technology, a trailblazing company at the forefront of innovation in e-commerce, transport, 
            travels, real estate, food delivery, and investment solutions. With a passion for technology and a keen eye for transformative opportunities, 
            Paul has spearheaded the development of user-centric platforms that redefine convenience and connectivity. Under his leadership, 
            Smash Technology has grown into a dynamic force in the tech industry, driven by a commitment to sustainability, innovation, and empowering 
            individuals and businesses worldwide.</p>
        </div>
    </div>

    <div className="corevalue-div">
        <div className="zy-c1 zy-c1-sm zy-c1-xs text-center">
            <h3>Our Core Values</h3>

            Integrity
            Innovation
            Excellence
            Collaboration

            <p>At the heart of Smash Technology Limited is a relentless drive to innovate and push the boundaries of what's possible. We constantly seek new 
                and creative ways to solve problems and deliver cutting-edge solutions that set us apart from the competition.</p>
        </div>
    </div>

    

    <div className="commitment-div">
        {/* Commitment to Sustainability */}
        <div className="zy-c1 zy-c1-sm zy-c1-xs text-center">
            <h3>Commitment to Sustainability</h3>

            <p>Smash Technology's aims at revolutionizing the tech industry by delivering innovative, user-centric solutions that transform everyday experiences 
                across e-commerce, transport, real estate, food delivery, and investment, with a vision to be a global leader in technology, driving progress 
                and redefining industries through sustainable innovations that inspire connectivity, growth, and a tech-savvy future.</p>
        </div>

        {/* Commitment to Quality */}
        <h3 className="text-center">Commitment to Quality</h3>
        <div className="zy-c3 zy-c1-sm zy-c1-xs text-center">
            <div>
                <h4>Rigorous Testing</h4>
                <p>At Smash Technology Limited, we are dedicated to delivering products and services of the highest quality. Our development process includes 
                extensive testing to identify and address any issues before release, ensuring our solutions meet the most stringent quality standards.</p>
            </div>

            <div>
                <h4>Continuous Improvement</h4>
                <p>We are constantly seeking ways to enhance our offerings and refine our processes. Our teams actively monitor customer feedback and industry trends, 
                using that insight to drive continuous improvements that keep our solutions ahead of the curve.</p>
            </div>

            <div>
                <h4>Quality Certifications</h4>
                <p>To demonstrate our commitment to quality, we have aligned our practices and policies with frameworks such as ISO 9001, CMMI, NIST, and 
                ISO 27001, which is an indication of our dedication to consistent, secure and reliable service delivery.</p>
            </div>
        </div>

        {/* Exceptional Customer Service */}
        <h3 className="text-center">Exceptional Customer Service</h3>

        <div className="zy-c2 zy-c1-sm zy-c1-xs">
            <img src={vivian21} />
        
            <div>
                <p>Our dedicated customer service team is always available to promptly address any inquiries or issues you may have. We pride ourselves on our 
                quick response times and our ability to provide personalized solutions to meet your unique needs. We understand that every business is 
                different, which is why we take the time to understand your specific challenges and requirements. Our team will work closely with you to 
                develop custom-tailored solutions that deliver maximum value and efficiency.</p>
            </div>
        </div>
    </div>
    </>
  )
}
export default MissionCEO;
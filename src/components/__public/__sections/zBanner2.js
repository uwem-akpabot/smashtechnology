import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import softwareengr from '../../../assets/videos/softwareengr.mp4';

const Banner2 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        console.log('Error trying to play video:', error);
      });
    }
  }, []);

  return (
    <div className="zy-c5_2 zy-c1-md zy-c1-sm zy-c1-xs">
      <div className="zyzics_ittraining-banner">

        {/* <h1>Simplified Solution For Organizations</h1> */}
        {/* <h1>Zyzics IT Training and Software Ltd.</h1> */}
        <h1>Learn IT Courses In Simple, Clear Steps</h1>
        <p>We create robust software that helps users, teams, and organizations to collaborate, 
          enjoy seamless workflow, and complete their tasks easily.</p>

          <Link to="/conference-registration" className="zyzics-btn button__header">Get Software</Link> 
        {/* <h1>Learn</h1>          
        <h2>Your Dream IT Courses In Simple, Clear Steps</h2> */}
        {/* <p>Our lessons are easy to follow. We break complex topics into simple, illustrative, and step-by-step guide for a clear understanding. Zyzics offers professional IT training (in software development, programming, website design, etc.) and develops 
          robust enterprise software solutions for organizations to ease their workflow. </p> */}
        
        {/* <Link to="/conference-registration" className="zyzics-button button__header">Start Learning</Link> */}
      </div>

      <div>
        <div className="zyzics_ittraining-black">
          <video ref={videoRef} width="100%" height="100%" loop>
            <source src={softwareengr} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <div className="categ__text"> */}
        <div className="zyzics_ittraining-subbanner">
          <h3>Website Design</h3>
          <p><b>Modern CSS for Astonishing Web Design</b></p>
          <p>25 Lessons</p>
        </div>
        {/* </div> */}
        
      </div>
    </div> 
  )
}

export default Banner2

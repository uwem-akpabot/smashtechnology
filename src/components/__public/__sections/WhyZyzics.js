import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilEdit, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const WhyZyzics = () => {
  return (
    <div className="whyzyzics">
      <div className="welcome">
        <span>Welcome to Zyzics</span>
        <h3>What makes Zyzics different?</h3>
        <p>Why we are special Why we are special Why we are special Why we are special Why we</p>

        <Link to="/" className="zyzics-btn button__header">See our apps 
            <UilArrowRight /></Link>
      </div>
      <div className="feats zy-c2">
        <div className="feats-inner">
            <div><UilTrophy className="uil" /></div>
            <p>We have exceptional skill in explaining complex subjects, making them easy to understand</p>
        </div>
        <div className="feats-inner">
            <div><UilSitemap className="uil" /></div>
            <p>We apply Software Engineering to develop software that are easy to use &amp; perform flawlessly </p>
        </div>
        <div className="feats-inner">
            <div><UilDesktop className="uil" /></div>
            <p>Why we are special Why we are special Why we are special</p>
        </div>
        <div className="feats-inner">
            <div><UilGlobe className="uil" /></div>
            <p>Our service is a long-term relationship, providing support all the way to grow your business  </p>
        </div>
        <div className="feats-inner">
            <div><UilEdit className="uil" /></div>
            <p>Why we are special Why we are special Why we are special</p>
        </div>
        <div className="feats-inner">
            <div><UilLock className="uil" /></div>
            <p>Why we are special Why we are special Why we are special</p>
        </div>
      </div>
    </div>
  )
}

export default WhyZyzics

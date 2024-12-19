import Header from '../__public/__layouts/Header';
import { Helmet } from 'react-helmet';

const MediaIT = () => {
  return (
    <>
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />
    <section className="team-intro">
        <h2>Meet The IT Team</h2>
        <p>
        Our IT team is the backbone of innovation at Smash Technology. Comprising skilled developers, 
        designers, and tech strategists, they bring our ideas to life with cutting-edge solutions and 
        seamless user experiences. From creating intuitive apps to maintaining secure and reliable systems, 
        get to know the brilliant minds behind our digital excellence.
        </p>
    </section>

    <section className="team-members">
      <div className="team-container">
        <div className="team-lead">
            <img src="https://via.placeholder.com/300x400" alt="Team Lead" />
            <h3>Gracious</h3>
            <p>Cyber Security</p>
        </div>

        <div className="team-list">
            <ul>
            <li>
                <div className="team-info">
                <span className="name">Valentine</span>
                <span className="role">Product</span>
                </div>
            </li>
            <li>
                <div className="team-info">
                <span className="name">Victor</span>
                <span className="role">IT Support</span>
                </div>
            </li>
            <li>
                <div className="team-info">
                <span className="name">Uwem</span>
                <span className="role">Engineering</span>
                </div>
            </li>
            <li>
                <div className="team-info">
                <span className="name">Chris</span>
                <span className="role">Graphics</span>
                </div>
            </li>
            <li>
                <div className="team-info">
                <span className="name">Vivian</span>
                <span className="role">Social Media</span>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </section>   
    </>
  )
}

export default MediaIT
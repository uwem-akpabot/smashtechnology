import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <>
    <div className="sections" id="whoweare">
      <div className="zy-c2 zy-c1-sm zy-c1-xs">

        <h2 className="mobile">Who we are</h2>

        <div className="zy-c2 zy-c2-xs splash">
            <div>
                <div className="small-container"></div>
                <div className="line-container"></div>
            </div>
            <div> 
                <div className="line-container"></div>
                <div className="small-container"></div>
            </div>
        </div>

        <div className="">
            <div>
              <h2 className="desktop">Who we are</h2>
            </div>
            <p><span>Smash Technology</span> is a tech group of companies focused on employing technology to service its clients locally and globally. Initially, the brand focused on Transport 
                Investment across the country and beyond before pivoting into other viable sectors such as E-hailing, E-commerce, Food delivery, Booking platform, Virtual Office 
                platforms, Travels, Real Estate, Social Networking among others.
            </p>

            <p><span>Smash Technology</span> is a combination of almost a decade of visionary leadership, hard work, and dedication from many experienced and committed men and women 
                who are aligned with the core purpose and goal of the brand.
            </p>
            <br />

            <Link to="/about" className="smashtech-button">Learn More</Link>
        </div>

      </div>
    </div>
    </>
  )
}
export default WhoWeAre;
import { useEffect } from 'react';
import Header from '../__public/__layouts/Header';
import { Helmet } from 'react-helmet';
import Banner from '../__public/__sections/_Banner';
import WhoWeAre from '../__public/__sections/_WhoWeAre';
import Map from '../__public/__sections/_Map';
import OurBusiness from '../__public/__sections/_OurBusiness';
import OurTeam from '../__public/__sections/_OurTeam';
import CoreValues from '../__public/__sections/_CoreValues';
import OurCorePurpose from '../__public/__sections/_OurCorePurpose';
import MissionVision from '../__public/__sections/MissionVision';

const Home = (props) => {
  useEffect(() => {
    document.title = `${props.company}`;
  }, []);

  return (
    <>
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />
    
    <Banner />

    <WhoWeAre />

    <OurBusiness />

    {/* <OurCorePurpose /> */}

    <section class="core-purpose">
  <div class="circle"></div>

  <div class="content">
    <div class="item">
      <div class="number">1</div>
      <div class="text">
        <h3>Ease Your Stress</h3>
        <p>
          Our core purpose is to ensure you live an easy and stress-free life. We are breaking down those
          difficult-to-achieve tasks into a single press of a button.
        </p>
      </div>
    </div>

    <div class="item">
      <div class="number">2</div>
      <div class="text">
        <h3>Make A Difference</h3>
        <p>
          We want you to be unique and different. We offer services that will help you make a difference
          and stand out.
        </p>
      </div>
    </div>

    <div class="item">
      <div class="number">3</div>
      <div class="text">
        <h3>Get 100% Enjoyment</h3>
        <p>
          We ensure you get 100% satisfaction and first-rate customer service. Our customer support is
          always available 24/7.
        </p>
      </div>
    </div>
  </div>
</section>


    <OurTeam />

    <CoreValues />

    <MissionVision />

    <Map />

  </>
  );
}

export default Home;
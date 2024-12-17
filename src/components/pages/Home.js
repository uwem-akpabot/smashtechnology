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

    <OurTeam />

    <CoreValues />

    <MissionVision />

    <Map />

  </>
  );
}

export default Home;
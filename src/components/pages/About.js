import { useEffect, useRef } from 'react';
import Header from '../__public/__layouts/Header';
import { Helmet } from 'react-helmet';
import Map from '../__public/__sections/_Map';
import MissionCEO from '../__public/__sections/About/MissionCEO';
import Banner_about from '../__public/__sections/_Banner_about';

const About = (props) => {
  useEffect(() => {
    document.title = `${props.company} - About`;
  }, []);

  return (
    <>
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />
    <Banner_about />
    <MissionCEO />

    <Map />
  </>
  );
}

export default About;
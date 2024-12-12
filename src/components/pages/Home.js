import { useEffect, useRef } from 'react';
import Header from '../__public/__layouts/Header';
import { Helmet } from 'react-helmet';
import Banner from '../__public/__sections/_Banner';
import WhoWeAre from '../__public/__sections/_WhoWeAre';
import CompanyBanner from '../__public/__sections/zCompanyBanner';
import Training_Courses from '../__public/__sections/Training_Courses';
import Training_Categories from '../__public/__sections/Training_Categories';
import Nav from '../__public/__layouts/zNav';
import Navbar from '../__public/__layouts/Navbar';
import Footer from '../__public/__layouts/Footer';
import Services_Categories from '../__public/__sections/Services_Categories';
import New_Banner from '../__public/__sections/New_Banner';
import New_Navbar from '../__public/__layouts/New_Navbar';
import WhyZyzics from '../__public/__sections/WhyZyzics';
import Services from '../__public/__sections/Services';
import Subjects from '../__public/__sections/Subjects';
import WorkPortfolio from '../__public/__sections/WorkPortfolio';
import OurBusiness from '../__public/__sections/_OurBusiness';
import OurTeam from '../__public/__sections/_OurTeam';
import CoreValues from '../__public/__sections/_CoreValues';
import Map from '../__public/__sections/_Map';

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
    {/* <New_Navbar project={props.project} /> */}
    {/* <New_Banner /> */}

    <Navbar company={props.company} />
    <Banner />
    <WhoWeAre />
    <OurBusiness />
    {/* skipped */}
    <OurTeam />
    <Map />
    <Footer />
    {/* <CoreValues /> */}
    
    {/* <Subjects />

    <Training_Courses /> */}

    {/* <WorkPortfolio /> */}

    {/* <Footer project={props.project} company={props.company} /> */}

    {/* <WhyZyzics /> */}
    {/* <Services_Categories /> */}
    
    {/* <Training_Categories />  */}
  </>
  );
}

export default Home;
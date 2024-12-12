import { Helmet } from 'react-helmet';

const Header = () => {
  return (
    <>
    <Helmet>
		  <link href="/styles/App.css" rel="stylesheet" type="text/css" />
      <link href="/styles/Responsive.css" rel="stylesheet" type="text/css" />
      {/* <link href="/styles/New_Navbar.css" rel="stylesheet" type="text/css" /> */}
      <link href="/styles/Navbar.css" rel="stylesheet" type="text/css" />
    </Helmet>
	
    </>
  );
};

export default Header;
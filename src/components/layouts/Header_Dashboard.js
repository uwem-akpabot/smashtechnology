import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Header_Dashboard = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  // Function to load external scripts
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    const initDataTable = () => {
      const $ = window.$;
      $(document).ready(function() {
        if ($.fn.dataTable.isDataTable('#dataTable')) {
          $('#dataTable').DataTable().clear().destroy(); // Destroy the previous DataTable instance
        }
        $('#dataTable').DataTable({
          // Optionally, you can add DataTable options here
        });
      });
    };

    // Load scripts in the correct order
    loadScript('/sb-admin-2/vendor/jquery/jquery.min.js') // First load jQuery
      .then(() => {
        return loadScript('/sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'); // Load Bootstrap
      })
      .then(() => loadScript('https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js')) // Load DataTables JS
      .then(() => {
        if (dataLoaded) {
          initDataTable(); // Initialize DataTables after data is loaded
        }
      })
      .catch(error => {
        console.error('Error loading scripts:', error);
      });

    return () => {
      // Cleanup loaded scripts from the document
      document.querySelectorAll('script[src*="jquery"]').forEach(script => script.remove());
      document.querySelectorAll('script[src*="datatables"]').forEach(script => script.remove());
    };
  }, [dataLoaded]); // Re-run effect when data is loaded

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setDataLoaded(true); // Set dataLoaded to true after data is supposedly fetched
    }, 1000);
  }, []);

  return (
    <Helmet>
      {/* FontAwesome and Fonts */}
      <link href="/sb-admin-2/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
      
      {/* SB Admin 2 CSS */}
      <link href="/sb-admin-2/css/sb-admin-2.min.css" rel="stylesheet" />
      
      {/* DataTables CSS */}
      <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" />
    </Helmet>
  );
};

export default Header_Dashboard;

import { Helmet } from 'react-helmet';

const Header_Reg = () => {
  return (
    <Helmet>
      <link href="/sb-admin-2/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet" />
      <link href="/sb-admin-2/css/sb-admin-2.min.css"
        rel="stylesheet" />
      <script src="/sb-admin-2/vendor/jquery/jquery.min.js"></script>
      <script src="/sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/sb-admin-2/vendor/jquery-easing/jquery.easing.min.js"></script>
      <script src="/sb-admin-2/js/sb-admin-2.min.js"></script>
    </Helmet>
  )
}
export default Header_Reg;
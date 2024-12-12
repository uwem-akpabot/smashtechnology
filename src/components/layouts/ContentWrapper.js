import { useEffect, useState } from 'react';
import people4 from './../../assets/img/people/4.jpg'

const ContentWrapper = () => {
    const [fname, setFname] = useState('');
    const [sname, setSname] = useState('');

    useEffect(() => {
        const firstName = localStorage.getItem('fname');
        const lastName = localStorage.getItem('sname');
        setFname(firstName);
        setSname(lastName);
    }, []);

    return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>
        <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                    aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>

        <ul className="navbar-nav ml-auto">

            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-search fa-fw"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown">
                    <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small"
                                placeholder="Search for..." aria-label="Search"
                                aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>

            {/* <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger badge-counter">3+</span>
                </a>
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">
                        Notifications
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-primary">
                                <i className="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 12, 2024</div>
                            <span className="font-weight-bold">A new annpuncement has been posted at the national level!</span>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-success">
                                <i className="fas fa-donate text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 7, 2024</div>
                            Register now for the upcoming event!
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                </div>
            </li>

            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger badge-counter">2</span>
                </a>
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                        Personal Messages
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                alt="..." />
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate">Hi there! Welcome to our website. God bless you for registering.</div>
                            <div className="small text-gray-500">National Excos · 58m</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                alt="..." />
                            <div className="status-indicator"></div>
                        </div>
                        <div>
                            <div className="text-truncate">Stay connected with this platform 24/7</div>
                            <div className="small text-gray-500">Eagles · 1d</div>
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                </div>
            </li> */}

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{fname} {sname}</span>
                    <img className="img-profile rounded-circle"
                        src={people4} />
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Password
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </a>
                </div>
            </li>

            <li className="nav-item dropdown no-arrow">
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </a></li>
        </ul>
    </nav>      
  )
}
export default ContentWrapper
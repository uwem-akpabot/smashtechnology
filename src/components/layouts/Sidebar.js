import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Sidebar = (props) => {
    const [fname, setFname] = useState('');
    const [sname, setSname] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const firstName = localStorage.getItem('fname');
        const lastName = localStorage.getItem('sname');
        const adminStatus = localStorage.getItem('isAdmin') === 'true';
        setFname(firstName);
        setSname(lastName);
        setIsAdmin(adminStatus);
    }, []);

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link to="/dashboard" className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-1 small">{props.project}</div>
        </Link>
        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
            <Link to="/dashboard" className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
        </li>
        {/* <hr className="sidebar-divider" /> */}

        {/* <div className="sidebar-heading">
            User
        </div> */}
        <li className="nav-item">
            {isAdmin ? (
            <>
                <Link to="/manage-conference" className="nav-link">
                    <i className="fas fa-fw fa-clock"></i><span>Conference Register</span>
                </Link>
            </>
            ) : (
                <></>
            )}
        </li>
        
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-user"></i>
                <span>Members</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Manage List:</h6>

                    {isAdmin ? (
                    <>
                        <Link to="/manage-members" className="collapse-item">All Members</Link>
                        <Link to={`/member/${fname}-${sname}`} className="collapse-item">My Profile</Link>
                        <Link to={`/edit-member/${fname}-${sname}`} className="collapse-item">Edit My Profile</Link>
                    </>
                    ) : (
                        <>
                        <Link to={`/member/${fname}-${sname}`} className="collapse-item">My Profile</Link>
                        <Link to={`/edit-member/${fname}-${sname}`} className="collapse-item">Edit My Profile</Link>
                        </>
                    )}
                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-bell"></i>
                <span>Events/Activities</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Districts/Locations:</h6>
                    <Link to="/manage-activities" className="collapse-item">Cardinal Event</Link>
                    <Link to="/manage-activities-gallery" className="collapse-item">Sub-Event Gallery</Link>
                </div>
            </div>
        </li>
        <li className="nav-item">
            <Link to="/manage-zones" className="nav-link">
                <i className="fas fa-fw fa-globe"></i>
                <span>Zones</span>
            </Link>
        </li>
        {/* <hr className="sidebar-divider" /> */}

        {/* <div className="sidebar-heading">
            Public
        </div> */}

        
        <li className="nav-item">
            <Link to="/content-management" className="nav-link">
                <i className="fas fa-fw fa-table"></i>
                <span>Content Managemt</span>
            </Link>
        </li>

        <li className="nav-item">
            <Link to="" className="nav-link">
                <i className="fas fa-fw fa-envelope"></i>
                <span>Information</span>
            </Link>
        </li>

        <li className="nav-item">
            <Link to="" className="nav-link">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Settings</span>
            </Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    </ul>
  )
}
export default Sidebar

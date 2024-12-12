import { useEffect, useState } from 'react';
import { baseUrl } from '../configs/Config';

const PgContent_Dash = () => {
    const [fname, setFname] = useState('');
    const [sname, setSname] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [count, setCount] = useState({ members: 0, zones: 0, activities: 0 });

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const response = await fetch(`${baseUrl}/counts/`);
                const data = await response.json();
                setCount({
                    members: data.members || 0,
                    zones: data.zones || 0,
                    activities: data.activities || 0
                });
            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        };
    
        fetchCounts();
    }, []);  

    useEffect(() => {
        const firstName = localStorage.getItem('fname');
        const lastName = localStorage.getItem('sname');
        const adminStatus = localStorage.getItem('isAdmin') === 'true';
        setFname(firstName);
        setSname(lastName);
        setIsAdmin(adminStatus);
    }, []);

  return (
    <>
    {/* <!-- Begin Page Content --> */}
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">

            {/* Admin-specific content */}
            {isAdmin ? (
                <h1 className="h3 mb-0 text-gray-800">Hello {isAdmin && 'Admin'}, ({fname})!</h1>
            ) : (
                <h1 className="h3 mb-0 text-gray-800">Hello, {fname} {sname}!</h1>
            )}
            
            {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
        </div>

        <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    No. of Members</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{count.members}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    No. of Zones</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{count.zones}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">No. of Activities
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{count.activities}</div>
                                    </div>
                                    <div className="col">
                                        {/* <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info" role="progressbar"
                                                style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Growth</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">78%</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    <div
                        className="card-header bg-info text-white py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold">National Messages</h6>
                        {/* <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Other:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>Recent announcement sent internally from the Eagles of Zion to all registered and verified members.
                                to the Church to verified members.</li>
                        </ul>
                    </div>
                </div>

                <div className="card shadow mb-4">
                    <div
                        className="card-header py-3 bg-warning text-white d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold">Zonal Messages</h6>
                        {/* <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Other:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>The most recent announcement sent internally from your Zone to all registered and verified members.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">Server Migration <span
                                className="float-right">20%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}}
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Sales Tracking <span
                                className="float-right">40%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}}
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Customer Database <span
                                className="float-right">60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Payout Details <span
                                className="float-right">80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}}
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Account Setup <span
                                className="float-right">Complete!</span></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PgContent_Dash

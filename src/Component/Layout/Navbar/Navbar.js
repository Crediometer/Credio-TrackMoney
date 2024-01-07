const Navbar = () => {
    return ( 
        <div className="navbar">
             <header className="navbar pcoded-header navbar-expand-lg navbar-light">
                <div className="m-header">
                    {/* <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a> */}
                    <div className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">Datta Able</span>
                    </div>
                </div>
                <div className="collapse navbar-collapse">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <div className="main-search">
                                <div className="input-group">
                                    <input type="text" id="m-search" className="form-control" placeholder="Search . . ."></input>
                                    <a href="javascript:" className="input-group-append search-close">
                                        <i className="feather icon-x input-group-text"></i>
                                    </a>
                                    <span className="input-group-append search-btn btn btn-primary">
                                        <i className="feather icon-search input-group-text"></i>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul> */}
                    {/* <ul className="navbar-nav ml-auto">
                        <li>
                            <div className="dropdown drp-user">
                            
                                <div className="dropdown-menu dropdown-menu-right profile-notification">
                                    <div className="pro-head">
                                        <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image"></img>
                                        <span>John Doe</span>
                                        <a href="auth-signin.html" className="dud-logout" title="Logout">
                                            <i className="feather icon-log-out"></i>
                                        </a>
                                    </div>
                                    <ul className="pro-body">
                                        <li><a href="javascript:" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li>
                                        <li><a href="javascript:" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
                                        <li><a href="message.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</a></li>
                                        <li><a href="auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </header>
        </div>
    );
}
 
export default Navbar;
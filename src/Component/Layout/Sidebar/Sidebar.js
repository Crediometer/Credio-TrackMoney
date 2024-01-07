import { connect } from 'react-redux';
import './Sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import { LogOutAuthAction } from '../../../Redux/Login/LoginAction';

const Sidebar = ({togglemodal, logout}) => {
    const history = useNavigate();
    const handlelogout =()=>{
        logout(
            ()=>{ history(`/`)}
        )
    }

    return ( 
        <div className="sidebar">
               <nav className="pcoded-navbar">
                <div className="navbar-wrapper">
                    <div className="navbar-brand header-logo">
                        <a href="index.html" className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-trending-up"></i>
                            </div>
                            <span className="b-title">Datta Able</span>
                        </a>
                        <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                    </div>
                    <div className="navbar-content scroll-div">
                        <ul className="nav pcoded-inner-navbar">
                            <li className="nav-item pcoded-menu-caption">
                                <label>Navigation</label>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                                <a href="index.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                            </li>
                            <li onClick={togglemodal} data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                                <a className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Dispute Management</span></a>
                            </li>
                            <div className="logout-button" onClick={handlelogout}>
                                <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                                    <a className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Log Out</span></a>
                                </li>
                            </div>
                        </ul>
                       
                    </div>
                    
                </div>
            </nav>
        </div>
     );
}
const mapStoreToProps = (state) => {
    return {
      
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => dispatch(LogOutAuthAction(history)),
    };
};
 

export default connect(mapStoreToProps,mapDispatchToProps)(Sidebar);
import { connect } from 'react-redux';
import './Sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import logo from '../../../assets/images/new-logo.png'
import { LogOutAuthAction } from '../../../Redux/Login/LoginAction';
import { useState } from 'react';

const Sidebar = ({togglemodal, logout}) => {
    const [value, setValue] = useState(0)
    const history = useNavigate();
    const handlelogout =()=>{
        logout(
            ()=>{ history(`/`)}
        )
    }
    const handleVaule=(id)=>{
        setValue(id)
    }

    return ( 
        <div className="sidebar">
               <nav className="pcoded-navbar">
                <div className="navbar-wrapper">
                    <div className="navbar-brand header-logo">
                        <a className="b-brand">
                            <div className="logo-con">
                                <img src={logo}></img>
                            </div>
                            <span className="b-title">Credio TrackMoney</span>
                        </a>
                        {/* <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a> */}
                    </div>
                    <div className="navbar-content scroll-div">
                        <ul className="nav pcoded-inner-navbar">
                            <li className="nav-item pcoded-menu-caption">
                                <label>Navigation</label>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className={(value===0)? "nav-item active" : "nav-item"} onclick={()=>{handleVaule(0)}}>
                                <Link to="/dashboard" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
                            </li>
                            <li onClick={togglemodal} data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                                <a className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Dispute Management</span></a>
                            </li>
                            <li data-username="form elements advance componant validation masking wizard picker select" className={(value===1)? "nav-item active" : "nav-item"} onclick={()=>{handleVaule(1)}}>
                                <Link to="/dashboard/settings" className="nav-link "><span className="pcoded-micon"><FiSettings /></span><span className="pcoded-mtext">Settings</span></Link>
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
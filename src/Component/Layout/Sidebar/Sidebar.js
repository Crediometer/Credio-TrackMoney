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
               <nav class="pcoded-navbar">
                <div class="navbar-wrapper">
                    <div class="navbar-brand header-logo">
                        <a href="index.html" class="b-brand">
                            <div class="b-bg">
                                <i class="feather icon-trending-up"></i>
                            </div>
                            <span class="b-title">Datta Able</span>
                        </a>
                        <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                    </div>
                    <div class="navbar-content scroll-div">
                        <ul class="nav pcoded-inner-navbar">
                            <li class="nav-item pcoded-menu-caption">
                                <label>Navigation</label>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item active">
                                <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></a>
                            </li>
                            <li onClick={togglemodal} data-username="form elements advance componant validation masking wizard picker select" class="nav-item">
                                <a class="nav-link "><span class="pcoded-micon"><i class="feather icon-file-text"></i></span><span class="pcoded-mtext">Dispute Management</span></a>
                            </li>
                            <div className="logout-button" onClick={handlelogout}>
                                <li data-username="form elements advance componant validation masking wizard picker select" class="nav-item">
                                    <a class="nav-link "><span class="pcoded-micon"><i class="feather icon-file-text"></i></span><span class="pcoded-mtext">Log Out</span></a>
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
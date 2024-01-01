import { FaCheck } from "react-icons/fa";
import './MultiStepProgressBar.css';
import styles3 from '../../assets/css/Activate.module.css'
import { Link } from "react-router-dom";
const Payout = () => {
    return ( 
        <div className="payout">
            <div className="payout-icon"><FaCheck/></div>
            <p >Successfully registered</p>
            <Link to="/dashboard">
            <div className="signup-button">
                <button className="btn btn-primary shadow-2 mb-4 text-center"><span>Ok</span></button>        
            </div>
            </Link>
        </div>
    );
}
 
export default Payout;
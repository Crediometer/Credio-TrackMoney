import "./Modal.css"
import { FaCheck, FaSadTear, FaSmile } from "react-icons/fa";
import LottieAnimation from "../../Lotties";
import loader from '../../assets/loading.json'
import { Link } from "react-router-dom";
const LoadingModal = ({message}) => {
    return ( 
        <div className="successmodal">
            <div className="modal-background">
                <div className="modalss">
                    <div className="animation">
                        <LottieAnimation data={loader}/>
                    </div>
                   <p className="create-payment">{message}</p> 
                </div>
            </div>
        </div>
    );
}
 
export default LoadingModal;
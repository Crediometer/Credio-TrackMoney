import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import wrong from '../../assets/Errorr.json'
const Errormodal = ({error, togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="modalss">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <div className="onetime-modal">
                    <div className="animation">
                        <LottieAnimation data={wrong}/>
                    </div>
                    <p className="create-payment">{error}</p>
                    <div className="signup-button">
                        <button class="btn btn-primary shadow-2 mb-4" onClick={togglemodal}>Ok</button>   
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Errormodal;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import styles from '../../assets/css/Registration.module.css';
import styles2 from '../../assets/css/style.module.css' 
import styles3 from '../../assets/css/Activate.module.css'
import './MultiStepProgressBar.css'
import { useEffect, useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import {FiAlertTriangle} from 'react-icons/fi'
import {AiOutlineFile} from 'react-icons/ai'
import DragandDrop from "../Drag-and-Drop/DragandDrop";
import { verifyBVN, verifyRC } from "../../Redux/Verify/BvnAction";
import LoadingModal from "../modal/LoadingModal";
import Errormodal from "../modal/Errormodal";
import DragandDropImage from "../Drag-and-Drop/DragandDropImage";
import DragandDropMermat from "../Drag-and-Drop/DragandDropMermat";
import { postbusiness } from "../../Redux/SignUp/BusinessAction";
import LottieAnimation from '../../Lotties';
import loader from '../../assets/loading.json'

const Business = ({
    next, 
    business, 
    error, 
    loading,
    verifybvn,
    verifyrc,
    bvnload, 
    bvnerror,
    rcload, 
    rcerror,
    rcname,
    bvnname
}) => {
    const [nameState, setNameState] = useState({});
    const [formState, setFormState] = useState(null)
    const [postState, setPostState] = useState({});
    const [mermat, setMermat] = useState("");
    const [proImage, setProImage] = useState("");
    const [board, setBoard] = useState("");
    const [bvn, setbvn] = useState("");
    const [dob, setdob] = useState('');
    const [showbvn, setShowbvn] = useState(false)
    const [showrc, setShowrc] = useState(false)
    const [showbvnerror, setshowbvnerror]= useState(false)
    const [showRCerror, setshowRCerror]= useState(false)
    const [rcNumber, setrcNumber]= useState("");
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    const handlebvn = (e) => {
        const value = e.target.value;
        setbvn(value);
        setNameState({ ...nameState, ...{ bvn } });
        setPostState({ ...postState, ...{ bvn } });
    };
    const handledob = (e) => {
        const value = e.target.value;
        setdob(value);
        setNameState({ ...nameState, ...{ userDob: dob } });
        setPostState({ ...postState, ...{ userDob: dob } });
    };
    const handlercnumber = (e) => {
        const value = e.target.value;
        setrcNumber(value);
        setNameState({ ...nameState, ...{ rcNumber } });
    };
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    const togglemodal2 = ()=>{
        setshowbvnerror(!showbvnerror)
    }
    const togglemodal3 = ()=>{
        setshowRCerror(!showRCerror)
    }
    const updateProImage = (imageData) => {
        setProImage(imageData);
    };
    const updateMermat = (filedata) => {
        setMermat(filedata);
    };
    const updateboard = (filedata) => {
        setBoard(filedata);
    };
      
    useEffect(()=>{
        setNameState({ ...nameState, ...{ profileURL: proImage, mermatURL: mermat, shareholdersAgreement: board } });
    },[board, mermat, proImage, nameState])
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setNameState({ ...nameState, ...{ profileURL: proImage, mermatURL: mermat, shareholdersAgreement: board } });
        console.log(nameState)
        try{
            
            await business(nameState, ()=>{ 
            next();
            // setPending(true);
            }, ()=>{ 
                setErrorHandler(error)
                setshowerror(true)
                // setPending(false);
            });
        }catch(error){
            // setPending(false)
        }
    };
    useEffect(() => {
        console.log("proImage:", proImage);
        console.log("mermat:", mermat);
        console.log("board:", board);
    }, [proImage, mermat, board]);
    useEffect(() => {
        if (dob !== "" && bvn.length === 11) {
            verifybvn(postState, 
                ()=>{ 
                    setShowbvn(true);
                }, ()=>{ 
                    setshowbvnerror(true);
                }
            )
        }  
    }, [bvn, dob, postState]);
    useEffect(() => {
        if (rcNumber.length === 7) {
            verifyrc({rcNumber: rcNumber}, 
                ()=>{ 
                    setShowrc(true);
                }, ()=>{ 
                    setshowRCerror(true);
                }
            )
        }  
    }, [rcNumber]);

    return ( 
        <form method='post' onSubmit={handleSubmit}>
            <p className="businessHead">Enter verification details for at least one of the directors</p>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>BVN</label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter BNV"
                        maxLength={11}
                        required
                        onBlur={handlebvn}
                        onChange={handlebvn}
                    >
                    </input>
                </div>
                {showbvn && (<p className={styles2.fieldvalue}>{bvnname}</p>)}
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>DOB</label>
                    <input 
                        className={styles2.fieldinput}
                        type="date"
                        required
                        
                        onBlur={handledob}
                        onChange={handledob}
                    >
                    </input>
                </div>
                
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Rc Number</label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Rc Number"
                        required
                        maxLength={7}
                        onBlur={handlercnumber}
                        onChange={handlercnumber}
                    >
                    </input>
                </div>
                {showrc && (<p className={styles2.fieldvalue}>{rcname}</p>)}
            </div>
            <div className={styles.form2}>
               <p className='addimage'>Profile Imagef</p>
               <DragandDropImage profile={updateProImage}/>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
            </div>
            <div className={styles.form2}>
               <p className='addimage'>Mermat</p>
               <DragandDropMermat mermat={updateMermat}/>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
            </div>
            <div className={styles.form2}>
               <p className='addimage'>Board Resolution</p>
               <DragandDrop board={updateboard}/>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
            </div>
            {/* {show && ( */}
                <div>
                    {loading ? (
                        <button className="btn btn-primary shadow-2 mb-4 text-center submit-button" disabled>
                            <div className="animation">
                                <LottieAnimation data={loader}/>
                            </div>
                        </button>
                    ) : (
                        <button className="btn btn-primary shadow-2 mb-4 text-center submit-button"><span>Save</span></button>
                    )}
                </div>
            {/* )} */}
            <div className="signup-button">
            {/* <button onClick={()=>{next();}} className="btn btn-primary shadow-2 mb-4 text-center submit-button"><span>Save</span></button>         */}
            </div>
            
 
            {bvnload && (<LoadingModal message="Validating BVN Details"/>)}
            {rcload && (<LoadingModal message="Validating RC Number"/>)}
            {showbvnerror&& (<Errormodal error={bvnerror} togglemodal={togglemodal2}/>)}
            {showRCerror&& (<Errormodal error={rcerror} togglemodal={togglemodal3}/>)}
            {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)}
        </form>
    );
}


const mapStoreToProps = (state) => {
    console.log(state)
    return {
        bvnname:state.verifybvn.data.fullName,
        rcname:state.verifyrc.data.businessName,
        error: state.business.error,
        loading: state.business.loading,
        bvnload: state.verifybvn.loading,
        bvnerror: state.verifybvn.error,
        rcload: state.verifyrc.loading,
        rcerror: state.verifyrc.error
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        business: (nameState, history, setErrorHandler) => {
            dispatch(postbusiness(nameState, history, setErrorHandler));
        },
        verifybvn: (nameState, history, errors) => {
            dispatch(verifyBVN(nameState, history, errors));
        },
        verifyrc: (nameState, history, errors) => {
            dispatch(verifyRC(nameState, history, errors));
        }
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Business);
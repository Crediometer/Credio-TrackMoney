import "./Signup.css";
import MultiStepProgressbar from "../../Component/Multiformbar/MultiStepProgressbar";
import Personal from "../../Component/Multiformbar/Personal";
import Business from "../../Component/Multiformbar/Business";
import Payout from "../../Component/Multiformbar/Payout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Signup = ({account}) => {
    const [index, setIndex] = useState(1)
    
    useEffect(()=>{
        if(account==false){
            setIndex(2)
        }
    },[account])

    
    const nextButton = () => {
        window.scrollTo(0, 0);
        if (index < 4){
            setIndex(prevIndex => prevIndex + 1)
        } 
    }
    return ( 
        <div className="signup">
            <div className="auth-wrapper">
                <div className="auth-content signup-card">
                    <div className="auth-bg">
                        <span className="r"></span>
                        <span className="r s"></span>
                        <span className="r s"></span>
                        <span className="r"></span>
                    </div>
                    <div className="progressbar-outer">
                        <MultiStepProgressbar step={index}/> 
                    </div>
                    <div className="card signup-card-inner">
                        <div className="card-body">
                            <div className="mb-4 text-center">
                                <i className="feather icon-user-plus auth-icon"></i>
                            </div>
                            <h3 className="mb-4 text-center">Sign up</h3>
                            {index===1 && (<Personal next={nextButton}/>)}
                            {index===2 && (<Business next={nextButton}/>)}
                            {/* {index===3 && (<Verification/>)} */}
                            {index===3 && (<Payout/>)}
                            {/* <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username"></input>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email"></input>
                            </div>
                            <div className="input-group mb-4">
                                <input type="password" className="form-control" placeholder="password"></input>
                            </div>
                            <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-1" checked=""></input>
                                    <label for="checkbox-fill-1" className="cr"> Save Details</label>
                                </div>
                            </div>
                            <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"></input>
                                    <label for="checkbox-fill-2" className="cr">Send me the <a href="#!"> Newsletter</a> weekly.</label>
                                </div>
                            </div>
                            <button className="btn btn-primary shadow-2 mb-4">Sign up</button> */}
                            {/* <p className="mb-0 text-muted">Allready have an account? <Link to="/"> Log in</Link></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.login?.error,
        loading: state?.login?.dataAdded,
        account: state?.login?.token?.accountSetupDone
        // getprofile: state?.getprofile?.data
    }
}

export default connect(mapStateToProps,)(Signup);
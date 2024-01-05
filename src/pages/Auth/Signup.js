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
            <div class="auth-wrapper">
                <div class="auth-content signup-card">
                    <div class="auth-bg">
                        <span class="r"></span>
                        <span class="r s"></span>
                        <span class="r s"></span>
                        <span class="r"></span>
                    </div>
                    <div className="progressbar-outer">
                        <MultiStepProgressbar step={index}/> 
                    </div>
                    <div className="card signup-card-inner">
                        <div class="card-body">
                            <div class="mb-4 text-center">
                                <i class="feather icon-user-plus auth-icon"></i>
                            </div>
                            <h3 class="mb-4 text-center">Sign up</h3>
                            {index===1 && (<Personal next={nextButton}/>)}
                            {index===2 && (<Business next={nextButton}/>)}
                            {/* {index===3 && (<Verification/>)} */}
                            {index===3 && (<Payout/>)}
                            {/* <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Username"></input>
                            </div>
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Email"></input>
                            </div>
                            <div class="input-group mb-4">
                                <input type="password" class="form-control" placeholder="password"></input>
                            </div>
                            <div class="form-group text-left">
                                <div class="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-1" checked=""></input>
                                    <label for="checkbox-fill-1" class="cr"> Save Details</label>
                                </div>
                            </div>
                            <div class="form-group text-left">
                                <div class="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"></input>
                                    <label for="checkbox-fill-2" class="cr">Send me the <a href="#!"> Newsletter</a> weekly.</label>
                                </div>
                            </div>
                            <button class="btn btn-primary shadow-2 mb-4">Sign up</button> */}
                            {/* <p class="mb-0 text-muted">Allready have an account? <Link to="/"> Log in</Link></p> */}
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
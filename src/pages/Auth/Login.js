import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import consts from "./keys/const";
import JSEncrypt from 'jsencrypt';
import { LoginAuthAction } from "../../Redux/Login/LoginAction";
import LottieAnimation from "../../Lotties";
import loader from '../../assets/loading.json'

const Login = ({login, loading, error,account}) => {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [loginState, setLoginState] = useState({})
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const history = useNavigate();
    useEffect(() => {
        setErrorHandler(error)  
    }, [error]);
    const handleemail = (e)=>{
        const value = e.target.value
        setemail(value)
        setLoginState({ ...loginState, ...{username: email} });
    }
    const handlePassword = (e)=>{
        const value = e.target.value
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setPassword(encrypted)
        setLoginState({ ...loginState, ...{password: value  } });
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await login(loginState, 
                ()=>{ 
                   history(`/dashboard`)
                // setPending(true);
                }, ()=>{ 
                    history(`/signup`)
                // setPending(true);
                },()=>{ 
                    setErrorHandler(error)
                    // setPending(false);
                });
        }catch(error){
        }
    }
    return ( 
        <div className="login">
            <div class="auth-wrapper">
                <div class="auth-content">
                    <div class="auth-bg">
                        <span class="r"></span>
                        <span class="r s"></span>
                        <span class="r s"></span>
                        <span class="r"></span>
                    </div>
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-4">
                                <i class="feather icon-unlock auth-icon"></i>
                            </div>
                            <h3 class="mb-4">Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div class="input-group mb-3">
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        placeholder="Email" 
                                        onChange={handleemail} 
                                        onBlur={handleemail} 
                                        required
                                    ></input>
                                </div>
                                <div class="input-group mb-4">
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        placeholder="password" 
                                        onChange={handlePassword}
                                        onBlur={handlePassword}
                                        required
                                    ></input>
                                </div>
                                {(errorHandler?.dataAdded) ?
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        
                                    </div> : <div className="login-error">{errorHandler}</div>
                                }
                                {loading ? (
                                    <button class="btn btn-primary shadow-2 mb-4 submit-button" disabled>
                                       <div className="animation">
                                            <LottieAnimation data={loader}/>
                                        </div>
                                    </button>
                                ) : (
                                    <button class="btn btn-primary shadow-2 mb-4 submit-button"><span>Login</span></button>
                                )}
                                
                                <p class="mb-0 text-muted">Don’t have an account? <Link to="/Signup">Signup</Link></p>
                            </form>
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

const mapDispatchToProps = dispatch => {
    return{
        login: (loginState, history, next, setErrorHandler) => {
            dispatch(LoginAuthAction(loginState, history, next, setErrorHandler));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
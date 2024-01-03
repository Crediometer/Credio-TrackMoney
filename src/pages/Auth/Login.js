import { Link } from "react-router-dom";

const Login = () => {
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
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Email"></input>
                            </div>
                            <div class="input-group mb-4">
                                <input type="password" class="form-control" placeholder="password"></input>
                            </div>
                            <Link to="/dashboard"><button class="btn btn-primary shadow-2 mb-4 submit-button">Login</button></Link>
                            <p class="mb-0 text-muted">Don’t have an account? <Link to="/Signup">Signup</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;
// import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./LoginTypes" 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import store from "../Store";
// import { fetchgetprofile } from '../Getprofile/GetprofileAction';

const AuthActionType = {
    // REGISTER_SUCCESS: "REGISTER_SUCCESS",
    // REGISTER_FAIL: "REGISTER_FAIL",
    LOGIN_START: "LOGIN_START",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
};

const baseUrl = "https://fe-sandbox-cred.onrender.com/api/v1/trackMoney"
let autoLogoutTimer;
const LoginAuthAction = (loginState, history, next, setErrorHandler) => {
    return async (dispatch) => {
      dispatch({type: AuthActionType.LOGIN_START})
      try {
        const res = await axios.post(`${baseUrl}/login`, loginState);
        const { data } = res;
       console.log(res)
        dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
        // fetchgetprofile()
        if(res.status===200){
          if(res.data.token.accountSetupDone){
            history();
          }else{
            next()
          }
            // autoLogoutTimer = setTimeout(() => {
            //   dispatch(LogOutAuthAction(history));
            // }, 10000);
            // getprofile()
                   
        }
      } catch (error) {
        console.log(error)
        if (error.response) {
          dispatch({
            type: AuthActionType.LOGIN_FAIL,
            payload: error.response.data.error,
          });
          setErrorHandler({ hasError: true, message: error.response.data.error });
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.error });
      }
    };
};
const LogOutAuthAction = (history) => {
  // logout();
  // clearTimeout(autoLogoutTimer)
  return async (dispatch) => {
    try {
      // const res = await axios.get("https://credio-api.herokuapp.com/api/v1/auth/login");
      // const { data } = res;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        // payload: data.message,
      });
      history();
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.LOGOUT_FAIL,
          // payload: error.response.data.message,
        });
      }
    }
  };
};
export {
    // RegisterAuthAction,
    AuthActionType,
    LogOutAuthAction,
    LoginAuthAction,
};
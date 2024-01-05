import { BUSINESS_REQUEST, BUSINESS_SUCCESS, BUSINESS_FALIURE } from "./BusinessType"
import axios from "axios";

export const businessrequest = ()=>{
    return{
        type:BUSINESS_REQUEST
    }
}
export const businesssuccess = (data)=>{
    return{
        type:BUSINESS_SUCCESS,
        payload: data
    }
}
export const businessfaliure = (error)=>{
    return{
        type:BUSINESS_FALIURE,
        payload: error
    }
}

const baseURl = "https://fe-sandbox-cred.onrender.com/api/v1/trackMoney";

export const postbusiness = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(businessrequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/business-info`, poststate,{ headers: headers })
            const data = response
            dispatch(businesssuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(businessfaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
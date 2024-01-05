import { PERSONAL_REQUEST, PERSONAL_SUCCESS, PERSONAL_FALIURE } from "./PersonalTypes";
import axios from "axios";

export const personalrequest = ()=>{
    return{
        type:PERSONAL_REQUEST
    }
}
export const personalsuccess = (data)=>{
    return{
        type:PERSONAL_SUCCESS,
        payload: data
    }
}
export const personalfaliure = (error)=>{
    return{
        type:PERSONAL_FALIURE,
        payload: error
    }
}

const baseURl = "https://fe-sandbox-cred.onrender.com/api/v1/trackMoney";

export const postpersonal = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(personalrequest())

        try{
            const response = await axios.post(`${baseURl}/signup`, poststate)
            const data = response.data.token.token
            console.log(data)
            dispatch(personalsuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(personalfaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
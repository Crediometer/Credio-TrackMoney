import { BVN_REQUEST, BVN_SUCCESS, BVN_FALIURE, RC_NO_REQUEST, RC_NO_SUCCESS, RC_NO_FALIURE } from "./BvnType"
import axios from "axios";

export const bvnrequest = ()=>{
    return{
        type:BVN_REQUEST
    }
}
export const bvnsuccess = (data)=>{
    return{
        type:BVN_SUCCESS,
        payload: data
    }
}
export const bvnfaliure = (error)=>{
    return{
        type:BVN_FALIURE,
        payload: error
    }
}

export const rcrequest = ()=>{
    return{
        type:RC_NO_REQUEST
    }
}
export const rcsuccess = (data)=>{
    return{
        type:RC_NO_SUCCESS,
        payload: data
    }
}
export const rcfaliure = (error)=>{
    return{
        type:RC_NO_FALIURE,
        payload: error
    }
}

const baseURl = "https://fe-sandbox-cred.onrender.com/api/v1/trackMoney";

export const verifyBVN = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(bvnrequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            console.log(datas)
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/verify-bvn`, poststate,{ headers: headers })
            const data = response.data
            console.log(data)
            dispatch(bvnsuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(bvnfaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}


export const verifyRC = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(rcrequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            console.log(datas)
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/verify-rc`, poststate,{ headers: headers })
            const data = response.data
            console.log(data)
            dispatch(rcsuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(rcfaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
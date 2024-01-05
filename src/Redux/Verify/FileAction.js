import { DOC_REQUEST,DOC_SUCCESS, DOC_FALIURE, PROFILE_IMG_REQUEST, PROFILE_IMG_SUCCESS, PROFILE_IMG_FALIURE, BOARD_SUCCESS } from "./FileType"

import axios from "axios";

export const docrequest = ()=>{
    return{
        type:DOC_REQUEST
    }
}
export const docsuccess = (data)=>{
    return{
        type:DOC_SUCCESS,
        payload: data
    }
}
export const boardsuccess = (data)=>{
    return{
        type:BOARD_SUCCESS,
        payload: data
    }
}
export const docfaliure = (error)=>{
    return{
        type:DOC_FALIURE,
        payload: error
    }
}

export const profileimgrequest = ()=>{
    return{
        type:PROFILE_IMG_REQUEST
    }
}
export const profileimgsuccess = (data)=>{
    return{
        type:PROFILE_IMG_SUCCESS,
        payload: data
    }
}
export const profileimgfaliure = (error)=>{
    return{
        type:PROFILE_IMG_FALIURE,
        payload: error
    }
}

const baseURl = "https://fe-sandbox-cred.onrender.com/api/v1/trackMoney";

export const verifymermat = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(profileimgrequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/uploadDocument`, poststate,{ headers: headers })
            const data = response.data
            console.log(data)
            dispatch(docsuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(profileimgfaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const verifyboard = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(profileimgrequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/uploadDocument`, poststate,{ headers: headers })
            const data = response.data
            console.log(data)
            dispatch(boardsuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(profileimgfaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const verifyprofileimg = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(profileimgrequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/uploadDocument`, poststate,{ headers: headers })
            const data = response.data
            console.log(data)
            dispatch(profileimgsuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(profileimgfaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
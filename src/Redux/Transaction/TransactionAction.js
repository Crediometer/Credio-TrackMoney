import { TRANSACTION_REQUEST, TRANSACTION_SUCCESS, TRANSACTION_FALIURE, OVERVIEW_REQUEST, OVERVIEW_SUCCESS, OVERVIEW_FALIURE } from "./TransactionType"
import axios from "axios";

export const transactionrequest = ()=>{
    return{
        type:TRANSACTION_REQUEST
    }
}
export const transactionsuccess = (data)=>{
    return{
        type:TRANSACTION_SUCCESS,
        payload: data
    }
}
export const transactionfaliure = (error)=>{
    return{
        type:TRANSACTION_FALIURE,
        payload: error
    }
}

export const overviewrequest = ()=>{
    return{
        type:OVERVIEW_REQUEST
    }
}
export const overviewsuccess = (data)=>{
    return{
        type:OVERVIEW_SUCCESS,
        payload: data
    }
}
export const overviewfaliure = (error)=>{
    return{
        type:OVERVIEW_FALIURE,
        payload: error
    }
}

const baseURl = "https://fe-sandbox-cred.onrender.com/api/v1/trackMoney";

export const fetchtransaction = ( ) => {
    return async (dispatch) => {
        dispatch(transactionrequest())

        let datas = JSON.parse(localStorage.getItem("auth"));
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas.token}`,
        };
        axios.get(`${baseURl}/getTransactions`, { headers: headers })
        .then( response => {
            const data = response.data
            dispatch(transactionsuccess(data))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(transactionfaliure(errorMsg))
        })
       
    }
}

export const fetchoverview = ( ) => {
    return async (dispatch) => {
        dispatch(overviewrequest())

        let datas = JSON.parse(localStorage.getItem("auth"));
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas.token}`,
        };
        axios.get(`${baseURl}/getOverview`, { headers: headers })
        .then( response => {
            const data = response.data
            console.log(data)
            dispatch(overviewsuccess(data))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(overviewfaliure(errorMsg))
        })
       
    }
}
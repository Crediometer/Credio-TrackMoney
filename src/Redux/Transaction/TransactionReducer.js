import { TRANSACTION_REQUEST, TRANSACTION_SUCCESS, TRANSACTION_FALIURE, OVERVIEW_FALIURE, OVERVIEW_SUCCESS, OVERVIEW_REQUEST } from "./TransactionType"

const initialState = {
    loading: false,
    data:[],
    error: ""
}
export const transactionReduceR = (state = initialState, action) => {
    switch(action.type){
        case TRANSACTION_REQUEST:
            return{
                ...state,
                loading: true
            }
        case TRANSACTION_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case TRANSACTION_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}


export const overviewReducer = (state = initialState, action) => {
    switch(action.type){
        case OVERVIEW_REQUEST:
            return{
                ...state,
                loading: true
            }
        case OVERVIEW_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case OVERVIEW_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}
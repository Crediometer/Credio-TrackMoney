import { BVN_REQUEST, BVN_SUCCESS, BVN_FALIURE, RC_NO_REQUEST,RC_NO_SUCCESS, RC_NO_FALIURE } from "./BvnType"


const initialState = {
    loading: false,
    data:[],
    error: ""
}
export const bvnReducer = (state = initialState, action) => {
    switch(action.type){
        case BVN_REQUEST:
            return{
                ...state,
                loading: true
            }
        case BVN_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case BVN_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}


export const RCReducer = (state = initialState, action) => {
    switch(action.type){
        case RC_NO_REQUEST:
            return{
                ...state,
                loading: true
            }
        case RC_NO_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case RC_NO_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}
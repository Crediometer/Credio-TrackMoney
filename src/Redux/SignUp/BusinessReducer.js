import { BUSINESS_REQUEST, BUSINESS_SUCCESS, BUSINESS_FALIURE } from "./BusinessType"

const initialState = {
    loading: false,
    data:[],
    error: ""
}
export const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case BUSINESS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case BUSINESS_SUCCESS:
            return{
                loading: false,
                date: action.payload,
                error:''
            }
        case BUSINESS_FALIURE:
            return{
                loading: false,
                date: [],
                error:action.payload
            }
        default: return state
    }
}
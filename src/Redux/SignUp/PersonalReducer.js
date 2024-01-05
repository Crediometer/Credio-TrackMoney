import axios from "axios";
import { PERSONAL_REQUEST, PERSONAL_SUCCESS, PERSONAL_FALIURE } from "./PersonalTypes";

const initialState = {
    loading: false,
    data:[],
    error: ""
}
export const personalReducer = (state = initialState, action) => {
    switch(action.type){
        case PERSONAL_REQUEST:
            return{
                ...state,
                loading: true
            }
        case PERSONAL_SUCCESS:
            const loginAuthState = {
                auth: true,
                dataAdded: false,
                token: action.payload,
                error: ''
              };
              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${action.payload}`;
              localStorage.setItem("auth", JSON.stringify(loginAuthState));
              return loginAuthState;
        case PERSONAL_FALIURE:
            return{
                loading: false,
                date: [],
                error:action.payload
            }
        default: return state
    }
}
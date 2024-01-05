import { DOC_REQUEST,DOC_SUCCESS, DOC_FALIURE, PROFILE_IMG_REQUEST, PROFILE_IMG_SUCCESS, PROFILE_IMG_FALIURE, BOARD_SUCCESS } from "./FileType"


const initialState = {
    loading: false,
    data:[],
    error: ""
}
// export const docReducer = (state = initialState, action) => {
//     switch(action.type){
//         case DOC_REQUEST:
//             return{
//                 ...state,
//                 loading: true
//             }
//         case DOC_SUCCESS:
//             return{
//                 loading: false,
//                 date: action.payload,
//                 error:''
//             }
//         case DOC_FALIURE:
//             return{
//                 loading: false,
//                 date: [],
//                 error:action.payload
//             }
//         default: return state
//     }
// }


export const profileimgReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILE_IMG_REQUEST:
            return{
                ...state,
                loading: true
            }
        case PROFILE_IMG_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case DOC_SUCCESS:
            return{
                ...state,
                loading: false,
                mermatdata: action.payload,
            }
        case BOARD_SUCCESS:
            return{
                ...state,
                loading: false,
                boarddata: action.payload,
            }
        case PROFILE_IMG_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}
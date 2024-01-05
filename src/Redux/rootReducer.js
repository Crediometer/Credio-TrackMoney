import {combineReducers} from 'redux';
import { personalReducer } from './SignUp/PersonalReducer';
import { businessReducer } from './SignUp/BusinessReducer';
import { RCReducer, bvnReducer } from './Verify/BvnReducer';
import { docReducer, profileimgReducer } from './Verify/FileReducer';
import authReducer from './Login/LoginReducer';
import { statementReducer } from './Statement/StatementReducer';
import { overviewReducer, transactionReduceR } from './Transaction/TransactionReducer';


const rootReducer = combineReducers({
    login:authReducer,
    personal: personalReducer,
    business: businessReducer,
    verifybvn: bvnReducer,
    verifyrc: RCReducer,
    statement: statementReducer,
    transaction: transactionReduceR,
    overview:overviewReducer,
    verifyprofileimg: profileimgReducer,
})

export default rootReducer;
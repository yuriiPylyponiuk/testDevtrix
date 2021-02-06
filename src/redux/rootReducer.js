import {combineReducers} from "redux";
import contactReducer from './contacts/contactReducer';
import mainReducer from './main/mainReducer'

const rootReducer = combineReducers({
    mainReducer,
    contactReducer

})

export default rootReducer
import {combineReducers} from "redux";
import contactReducer from './contacts/contactReducer';
import mainReducer from './main/mainReducer';
import photoReducer from './photo/photoReducer';
import finalReducer from './last/lastReducer'

const rootReducer = combineReducers({
    mainReducer,
    contactReducer,
    photoReducer,
    finalReducer
})

export default rootReducer
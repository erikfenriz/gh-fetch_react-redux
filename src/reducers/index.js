import {combineReducers} from "redux";
import usersReducer from './usersReducer';
import infoReducer from './infoReducer';

export default combineReducers({
        usersList: usersReducer,
        usersInfo: infoReducer,
    }
)
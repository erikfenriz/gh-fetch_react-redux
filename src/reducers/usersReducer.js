import {FETCH_USERS, FETCH_ERROR} from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        case FETCH_ERROR:
            return action.payload;
        default:
            return state;
    }
};
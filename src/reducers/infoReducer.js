import {FETCH_USERS_INFO} from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS_INFO:
            return [...state, action.payload];
        default:
            return state;
    }
};
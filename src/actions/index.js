import github from '../api/github';
import {FETCH_USERS, FETCH_USERS_INFO, FETCH_ERROR} from "./actionTypes";
import _ from 'lodash';

export const fetchUsersAndInfo = () => async (dispatch, getState) => {
    try {
        await dispatch(fetchUsers());
    } catch (error) {
        dispatch(requestError(error))
    }
    _.chain(getState().usersList)
        .uniq()
        .map('login')
        .forEach(name => dispatch(fetchInfo(name)))
        .value();
};

const fetchUsers = () => async dispatch => {
    const result = await github.get('search/users?q=location:odessa');
    dispatch({
        type: FETCH_USERS,
        payload: result.data.items.splice(0, 10)
    })
};

const fetchInfo = name => async dispatch => {
    const result = await github.get(`/users/${name}`);
    dispatch({type: FETCH_USERS_INFO, payload: result.data})
};

const requestError = (error) => dispatch => {
  dispatch({type: FETCH_ERROR, payload: error})
};
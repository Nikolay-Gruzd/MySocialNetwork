import React from 'react';
import {authAPI} from "../../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUsersData = (userId, login, email) => ({type: SET_USERS_DATA, data:{userId, login, email}});

export const getAuthUsersData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUsersData(id, login, email));
        }
    });
}

export default authReducer;
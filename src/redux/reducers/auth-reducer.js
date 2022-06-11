
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
                ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUsersData = (userId, login, email, isAuth) => ({type: SET_USERS_DATA, payload:{userId, login, email, isAuth}});

export const getAuthUsersData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUsersData(id, login, email, true));
        }
    });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUsersData())
        }
    });
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUsersData(null, null, null, false))
        }
    });
}

export default authReducer;
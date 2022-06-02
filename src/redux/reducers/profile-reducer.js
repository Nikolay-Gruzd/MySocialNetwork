import React from 'react';
import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hi. how are you?", likesCounts: 15},
        {id: 2, message: "I am fine, thanks.", likesCounts: 32},
        {id: 3, message: "Yo", likesCounts: 5}
    ],
    newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case ADD_POST:
            let newPost = {id: 4, message: state.newPostText, likesCounts: 3}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;
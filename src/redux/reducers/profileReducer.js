import React from 'react';

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Hi. how are you?", likesCounts: 15},
        {id: 2, message: "I am fine, thanks.", likesCounts: 32},
        {id: 3, message: "Yo", likesCounts: 5}
    ],
    newPostText: ""
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

        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
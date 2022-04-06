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
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCounts: 3
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default:
            return state;
    }

}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
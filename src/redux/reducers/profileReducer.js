import React from 'react';

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

function profileReducer(state, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCounts: 3
            }
            state.posts.push(newPost);
            state.newPostText = "";
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }

    return state;
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
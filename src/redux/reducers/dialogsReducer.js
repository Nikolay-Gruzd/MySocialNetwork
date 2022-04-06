import React from 'react';

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
    dialogs: [
        {id: 1, name: "Maks"},
        {id: 2, name: "Vano"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Vitalya"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Cool"},
        {id: 4, message: "Yo"}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let body = {
                id: 5,
                message: state.newMessageBody
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(body);
            stateCopy.newMessageBody = "";
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
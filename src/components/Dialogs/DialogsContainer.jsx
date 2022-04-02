import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs dialogsPage={state.dialogsPage}
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
    />
};

export default DialogsContainer;
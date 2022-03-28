import React from "react";
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducers/dialogsReducer";

const activeLink = ({isActive}) => isActive ? classes.active : classes.dialog;

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogsItem name={d.name} id={d.id} activeLink={activeLink}/> );
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id} /> );

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                    <textarea placeholder="Enter your message"
                              value={props.dialogsPage.newMessageBody}
                              onChange={onNewMessageChange}
                    />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
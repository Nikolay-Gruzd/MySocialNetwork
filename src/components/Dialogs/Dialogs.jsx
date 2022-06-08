import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import AddMassageForm from "./AddMessageForm/AddMessageForm";

const activeLink = ({isActive}) => isActive ? classes.active : classes.dialog;

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id} activeLink={activeLink}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    let addNewMessage = (values) => {
        console.log(values.newMessageBody)
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMassageForm addNewMessage={addNewMessage} />
            </div>
        </div>
    );
};

export default Dialogs;
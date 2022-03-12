import React from "react";
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const activeLink = ({isActive}) => isActive ? classes.active : classes.dialog;

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogsItem name={d.name} id={d.id} activeLink={activeLink}/> );
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id} /> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;
import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? classes.active : classes.dialog;

const DialogsItem = (props) => {
    let math = "/dialogs/"+ props.id
    return(
        <div>
            <NavLink to={math} className={activeLink} >{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name="Maks" id="1" />
                <DialogsItem name="Vano" id="2" />
                <DialogsItem name="Anna" id="3" />
                <DialogsItem name="Andrey" id="4" />
                <DialogsItem name="Vitalya" id="5" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Cool"/>
            </div>
        </div>
    );
};

export default Dialogs;
import React from 'react';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let math = "/dialogs/"+ props.id
    return(
        <div>
            <NavLink to={math} className={props.activeLink} >{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;
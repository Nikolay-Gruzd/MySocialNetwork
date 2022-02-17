import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? classes.active : classes.item;

const NavBar = (props) => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to='/profile' className={activeLink} >Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={activeLink} >Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={activeLink} >News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={activeLink} >Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={activeLink} >Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
import React from 'react'
import Logo from '../../Images/Logo.png'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={Logo} alt="Логотип" />
        </header>
    )
}

export default Header;
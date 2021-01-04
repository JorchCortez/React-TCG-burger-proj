import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className="DrawerToggle" onClick={props.menuToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Logo height="80%"/>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar;
import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../HOC/AuxComponent'

const SideDrawer = (props) => {

    let classes = props.open ? "SideDrawer Open" : "SideDrawer Closed"

    return(
        <Aux> 
            <Backdrop show={props.open} clicked={props.closed}  />
            <div className={classes}>
                <Logo height="11%"  />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;
import React from 'react'
import LogoImg from '../../Assets/Images/Logo.png'
import classes from './Logo.module.css'
const Logo = (props) =>(<div className={classes.Logo} style={{height: props.height}}><img alt="Logo" src={LogoImg} /></div>)

export default Logo
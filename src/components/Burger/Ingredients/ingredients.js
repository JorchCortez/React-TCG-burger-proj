import React from 'react'
import classes from './ingredients.module.css'
import PropTypes from 'prop-types'

const Ingredient = (props) =>{
    let ingredient = null; 
    switch(props.type){
        case('Top_Bread'):
            ingredient = <div className={classes.Top_Bread}></div>;
            break;
        case('Bottom_Bread'):
            ingredient = <div className={classes.Bottom_Bread}></div>;
            break; 
        case('salad'):
            ingredient = <div className={classes.salad}></div>;
            break;
        case('tomatoe'):
            ingredient = <div className={classes.tomatoe}></div>;
            break;
        case('meat'):
            ingredient = <div className={classes.meat}></div>;
            break;
        case('cheese'):
            ingredient = <div className={classes.cheese}></div>;
            break;
        case('cheddar'):
            ingredient = <div className={classes.cheddar}></div>;
            break;
        case('beacon'):
            ingredient = <div className={classes.beacon}></div>;
            break;
        case('pineaple'):
            ingredient = <div className={classes.pineaple}></div>;
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
}

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredient
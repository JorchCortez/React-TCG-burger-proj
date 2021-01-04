import React from 'react'
import classes from './Burger.module.css'
import Ingredients from './Ingredients/ingredients'

const Burger = (props) => {
    let endIngredients = Object.keys(props.ingredients).map( ingKey => {
        return[...Array(props.ingredients[ingKey])].map((_, i ) => {
            return<Ingredients key={ingKey + i} type={ingKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [])
    endIngredients = (endIngredients.length === 0) ? <p>Please start adding ingredients</p> : endIngredients;

    return (
        <div className={classes.Taco}>
            <Ingredients type="Top_Bread"/>
            {endIngredients}
            <Ingredients type="Bottom_Bread"/>
        </div>
    );
}

export default Burger
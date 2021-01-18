import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary'

const CheckoutSummary = (props) => {
return(
    <div className="">
        <h1>Hope you like it!</h1>
        <div style={{width: '100%', margin:'auto'}}>
            <Burger ingredients={props.ingredients} />
        </div>
        <Button 
            clicked
            btnType="Danger">Cancel</Button>
        <Button     
            clicked 
            btnType="Success">Continue</Button>
    </div>
);
}

export default CheckoutSummary
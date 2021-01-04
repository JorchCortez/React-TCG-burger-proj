import React from 'react'
import Aux from '../../../HOC/Aux'
import Button from '../../UI/Button/Button'
class OrderSummary extends React.Component{
    
    state ={
        ingredients: null
    }
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
     
    render(){
        
        const orderIngredients = Object.keys(this.props.Ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.Ingredients[igKey]}
                    </li>
        })

        return(
        <Aux>
            <h3>Your order</h3>
            <p>A magnificent burger with:</p>
            <ul>
                {orderIngredients}
            </ul>
            <p><strong>Total: {this.props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>
        )
    }
}

export default OrderSummary
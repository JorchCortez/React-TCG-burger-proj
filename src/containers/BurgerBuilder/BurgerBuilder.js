import React, { Component } from 'react'
import Aux from '../../HOC/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler'

const INGREDIENT_PRICES ={ 
    salad: 0.15,
    pineaple: 0.25, 
    tomatoe: 0.10,
    cheese: 0.5,
    cheddar: 0.75, 
    beacon: 0.5, 
    meat: 1
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: null
    }

    componentDidMount() {
        axios.get('https://react-tcg-fb-default-rtdb.firebaseio.com/Ingredients.json')
        .then(res => {
            console.log('[GOT `em!]', res.data)
            this.setState({ingredients: res.data})
        })
        .catch(error => {
            this.setState({error: true})
        })
    }
 

    PurchaseStateHandler = (ingredients) => {
        const sum = Object.keys(ingredients).map( igKey =>{
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)

        this.setState({purchasable: sum > 0});
    }

    AddIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice +  INGREDIENT_PRICES[type];
        
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.PurchaseStateHandler(updatedIngredients);
    }

    RemoveIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0) return
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.PurchaseStateHandler(updatedIngredients);

    }

    PurchaseHandler = () => {
        this.setState({purchasing: true})
    }

    CancelPurchaseHandler = () => {
        this.setState({purchasing: false})
    }

    ContinuePurchaseHandler = () => {
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name: 'potato monster',
                address:{
                    street: "my street",
                    zipcode: "21543",
                },
                email: 'ree@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(res => {
            this.setState({
                purchasing: false,
                loading:false
            })
        })
        .catch(err =>{
            this.setState({
                purchasing: false,
                loading:false
            })
        })
    }



render(){
    const disabledInfo = {
        ...this.state.ingredients
    }
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null 

    let burger = <Spinner/>
    if(this.state.ingredients){ 
        burger = ( 
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    IngredientsAdded={this.AddIngredientHandler} 
                    IngredientsRemoved={this.RemoveIngredientHandler} 
                    disabled={disabledInfo}
                    totalPrice = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    purchasing = {this.PurchaseHandler}
                />
            </Aux>
        )

        orderSummary= <OrderSummary 
            Ingredients={this.state.ingredients} 
            purchaseContinue={this.ContinuePurchaseHandler}
            purchaseCancel={this.CancelPurchaseHandler}
            price = {this.state.totalPrice.toFixed(2)} />
            
        if(this.state.loading){
            orderSummary = <Spinner />
        }
    }
    if(this.state.error){
        burger = <p>We couldn't load the ingredients, try again later</p>
    }

    return(
        <Aux>
            <Modal show={this.state.purchasing} closeModal={this.CancelPurchaseHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
}

}

export default WithErrorHandler(BurgerBuilder, axios);
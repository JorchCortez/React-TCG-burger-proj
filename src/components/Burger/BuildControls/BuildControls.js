import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Pineaple', type:'pineaple'},
    {label: 'Tomatoe', type:'tomatoe'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Cheddar', type:'cheddar'},
    {label: 'Beacon', type:'beacon'},
    {label: 'Meat', type:'meat'},
]

const BuildControls = (props) => (
    <div className="BuildControls">
        <p>Total Price: <strong>$ {props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.IngredientsAdded(ctrl.type)} 
                removed ={ () => props.IngredientsRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className="order_btn" onClick={props.purchasing} disabled={!props.purchasable}>Order Now</button>
    </div>


);

export default BuildControls;
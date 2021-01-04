import React from 'react'

const BuildControl = (props) => (
    <div className="BuildControl">
        <div className="label">{props.label}</div>
        <button onClick={props.added}>+</button> 
        <button 
        onClick={props.removed} 
        disabled={props.disabled}
        >-</button> 
    </div>
);

export default BuildControl;
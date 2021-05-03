import React from 'react';
import './btn.css'
export const Button = (props) => {
    return (
        <button 
            className={props.className}  
            onClick={props.onClick}
        >{props.name}</button>
    )
}
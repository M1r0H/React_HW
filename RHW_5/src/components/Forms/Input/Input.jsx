import React from 'react';
import './input.css'

export const Input = (props) => {
    return (
        <input 
            className={props.className} 
            type={props.type} 
            placeholder={props.placeholder} 
            onChange={props.onChange}
        />
    )
}
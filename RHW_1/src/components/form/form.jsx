import React, { Component } from 'react'
import './style.css';

class Form extends Component {
    spawnInputs() {
        return this.props.data.map(({ type, place }) => {
            return (
                <div className="input" key={place}>
                    <input type={type} placeholder={place} />
                </div>
            )
        })
    }
    render() {
        return this.spawnInputs()
    }
}

export default Form
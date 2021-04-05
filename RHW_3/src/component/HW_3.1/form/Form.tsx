import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './form.css'

interface IProps {
    isReg?: boolean
}

class Form extends Component<IProps, any> {
    render(): JSX.Element {
        const { isReg } = this.props
        return (
            <div className="myForm">
                <input className="input" type="text" placeholder="E-mail" />
                <input className="input" type="password" placeholder="Password" />
                {isReg && <input className="input" type="password" placeholder="Repeat password" />}
                <button className="myButton">{isReg ? 'Registration' : 'LogIn'}</button>
                {isReg ? (
                    <Link to="/">Login</Link>
                ) : (
                    <Link to="/registration">Registration</Link>
                )}
            </div>
        )
    }
}

export default Form
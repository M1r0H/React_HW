import React, { useState } from 'react';
import { Button } from './Button/Button.jsx';
import { Input } from './Input/Input.jsx'
import './Form.css'
import { useDispatch } from 'react-redux'
import { saveUser } from '../../store/action/action.js'

export const Form = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState(0)
    const dispatcher = useDispatch();
    const handelChangeLogin = (e) => {
        setLogin(e.target.value)
    };
    const handelChangePassword = (e) => {
        setPassword(e.target.value)
    };
    const saveData = () => {
            dispatcher(saveUser({
                login: login,
                password: password
            }))
    }
    return (
        <div className={props.className}>
            <Input
                className="input"
                type="text"
                placeholder="Login"
                onChange={handelChangeLogin}
            />
            <Input
                className="input"
                type="password"
                placeholder="Password"
                onChange={handelChangePassword}
            />
            <Input
                className="input"
                type="password"
                placeholder="Repeat password"
            />
            <Button name="Sing Up" className="myBtn" onClick={saveData} />
        </div>
    )
}
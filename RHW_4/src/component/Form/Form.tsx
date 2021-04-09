import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import './form.css'


interface IProps {
    isReg?: boolean,
    handelChangeName?: ChangeEventHandler<HTMLInputElement>,
    handelChangeEMail: ChangeEventHandler<HTMLInputElement>,
    handelChangePassword: ChangeEventHandler<HTMLInputElement>,
    handelChangeRepeatPass?: ChangeEventHandler<HTMLInputElement>,
    saveData?: MouseEventHandler<HTMLButtonElement>,
    checkData?: MouseEventHandler<HTMLButtonElement>
}

function Form({ isReg, handelChangeEMail, handelChangePassword, handelChangeRepeatPass, saveData, handelChangeName, checkData }: IProps): JSX.Element {
    return (
        <div className="myForm">
            {isReg && <input className="input" type="text" placeholder="Name" onChange={handelChangeName}/>}
            <input className="input" type="text" placeholder="E-mail" onChange={handelChangeEMail} />
            <input className="input" type="password" placeholder="Password" onChange={handelChangePassword} />
            {isReg && <input className="input" type="password" placeholder="Repeat password" onChange={handelChangeRepeatPass} />}
            {isReg && <button className="myButton" onClick={saveData}><Link to="/">Registration</Link></button>}
            {!isReg && <button className="myButton" onClick={checkData}>Login</button>}
            {isReg ? (
                <Link to="/">Login</Link>
            ) : (
                <Link to="/registration">Registration</Link>
            )}
        </div>
    )
}

export default Form
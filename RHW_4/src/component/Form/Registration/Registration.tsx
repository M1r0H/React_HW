import React, { useState } from 'react'
import Form from '../Form'


interface IData {
    name: string,
    eMail: string,
    password: number,
    repeatPassword: number
}
export const Registration = (): JSX.Element => {
    const [name, setName] = useState('')
    const [eMail, setEMail] = useState('')
    const [password, setPassword] = useState(0)
    const [repeatPass, setRepeatPass] = useState(0)
    const data: IData = {
        name: name,
        eMail: eMail,
        password: password,
        repeatPassword: repeatPass
    }
    const handelChangeName = (e: any): void => {
        setName(e.target.value)
    };
    const handelChangeEMail = (e: any): void => {
        setEMail(e.target.value)
    };
    const handelChangePassword = (e: any): void => {
        setPassword(e.target.value)
    };
    const handelChangeRepeatPass = (e: any): void => {
        setRepeatPass(e.target.value)
    };
    const saveData = (e: any): void => {
        if (password === repeatPass) {
            localStorage.setItem(eMail, JSON.stringify(data))
        } else {
            alert('Повторите пароль!')
        }
    }
    return (
        <div>
            <Form 
                handelChangeName={handelChangeName} 
                saveData={saveData} 
                handelChangeRepeatPass={handelChangeRepeatPass} 
                handelChangePassword={handelChangePassword} 
                handelChangeEMail={handelChangeEMail} 
                isReg 
            />

        </div>
    )
}

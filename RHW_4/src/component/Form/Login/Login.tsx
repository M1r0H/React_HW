import React, { useState } from 'react'
import Form from '../Form'
interface IDataUser {
    name?: string,
    eMail?: string,
    password?: number,
    repeatPassword?: number
}
function Login(): JSX.Element {
    const [eMail, setEMail] = useState('')
    const [password, setPassword] = useState(0)
    const dataFromUser = localStorage.getItem(eMail)
    let dataUser: IDataUser = {}
    if (dataFromUser != null) {
        dataUser = JSON.parse(dataFromUser)
    }
    const handelChangeEMail = (e: any): void => {
        setEMail(e.target.value)
    };
    const handelChangePassword = (e: any): void => {
        setPassword(e.target.value)
    };
    const checkData = () => {
        if (eMail === dataUser.eMail && password === dataUser.password) {
            alert ('Все получилось!')
        } else {
            alert ('Повторите ввод данных!')
        }
    }
    return (
        <div>
            <Form 
                checkData={checkData} 
                handelChangePassword={handelChangePassword} 
                handelChangeEMail={handelChangeEMail} 
            />
        </div>
    )
}

export default Login

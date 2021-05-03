import React from 'react';
import { useSelector } from 'react-redux'

export const Text = () => {
    const { login, password } = useSelector(({ dataReducer: { data: { login, password } } }) => ({
        login,
        password
    }));
    return (
        <div>
            <p>Login: {login}</p>
            <p>Password: {password}</p>
        </div>
    )
}
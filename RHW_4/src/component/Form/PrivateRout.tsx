import React from 'react';
import { Redirect, Route } from 'react-router-dom'

interface IProps {
    exact: boolean,
    path: string,
    component: (props: any) => JSX.Element,
    signed: boolean
}

export const PrivateRoute = (props: IProps) => {
    const { component: Component, signed, ...rest } = props
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    signed ? (
                        <Component {...props} {...rest}/>
                    ) : (
                        <Redirect to="/registration" />
                    )
                )
            }}
        />
    )
}
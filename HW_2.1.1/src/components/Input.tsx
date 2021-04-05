import React, { ChangeEventHandler, Component } from 'react'

interface IProps {
    metod: ChangeEventHandler<HTMLInputElement>,
}

class Input extends Component<IProps, any> {
    render(): JSX.Element {
        return (
            <div>
                <input type="range" onChange={this.props.metod}/>
            </div>
        )
    }
}

export default Input
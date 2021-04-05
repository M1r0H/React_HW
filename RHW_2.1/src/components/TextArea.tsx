import React, { Component } from 'react'

interface IProps {
    value: string,
}

class TextArea extends Component<IProps, any> {
    render(): JSX.Element {
        return (
            <input type="text" readOnly value={this.props.value} />
        )
    }
}

export default TextArea
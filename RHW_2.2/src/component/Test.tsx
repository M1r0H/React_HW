import React, { Component, MouseEventHandler } from 'react'

interface IProps {
    trigger: number,
    value: number,
    handlerClick: MouseEventHandler<HTMLButtonElement>
}

interface IState {
    value: number
}

class Test extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
          value: this.props.value
        }
      }
    static getDerivedStateFromProps(nextProps: IProps, prevState: IState){
        if (prevState.value !== nextProps.trigger) {
            return {
                value: nextProps.value
              }
        }
        return null
    }
    render(): JSX.Element {
        return (
            <div>
                <input type="text" value={this.state.value} readOnly />
                <button onClick={this.props.handlerClick}>Add+1</button>
            </div>
        )
    }
}

export default Test
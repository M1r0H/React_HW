import React, { Component } from 'react'
import data from '../constants/constants'

class Table extends Component {
    spawnTable = (): JSX.Element[] => {
        return data.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.lasName}</td>
                </tr>
            )
        })
    }
    render(): JSX.Element {
        return (
            // @ts-ignore
            <table border="1">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>LasName</th>
                    </tr>
                    {this.spawnTable()}
                </tbody>
            </table>
        )
    }
}

export default Table
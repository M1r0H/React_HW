import React, { useState } from 'react';

function Input(): JSX.Element {
    const [state, setState] = useState(0)
    const handelChange = (e: any): void => {
        setState(e.target.value)
    }
    return (
        <div>
            <input type="range" onChange={handelChange} />
            <input type="text" value={state} readOnly />
        </div>
    )
}

export default Input
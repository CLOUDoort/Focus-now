import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <button onClick={() => setValue(value+1)}>+1</button>
            <button onClick={() => setValue(value-1)}>-1</button>
            <p>{value}</p>
        </div>
    )
}

export default Counter
import React from 'react'
import counter from '../store/count'

function Counter() {
    const {number,incrementNumber,decrementNumber} = counter()
  return (
    <div>
        <div>{number}</div>
        <button onClick={() => incrementNumber()}>Add</button>
        <button onClick={() => decrementNumber()}>Reduce</button>
    </div>
  )
}

export default Counter
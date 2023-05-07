import React, { useState } from 'react'
import "./counter.css"
function Counter() {
  let [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1)

  }
  const subCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }

  }
  return (
    <div className='content'>
      <p>Counter App</p>

      <h1>{counter}</h1>
      <button onClick={addCounter} className='btnAdd'>+</button>
      <button onClick={subCounter} className='btnSub'>-</button>
    </div>
  )
}

export default Counter

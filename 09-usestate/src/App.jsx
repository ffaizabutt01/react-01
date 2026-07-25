import React, { useState } from 'react'

const App = () => {

  //a readonly  , setA write/change only
  const [a, setA] = useState(20)
  const [user, setUser] = useState("Osaragi")
  const [num, setNum] = useState(0)




  function changeval() {
    setA(21)
    setUser("Waguri")
  }

  function inc() {
    setNum(num + 1)
  }
  function dec() {
    setNum(num - 1)
  }

  return (
    //basics
    <div>
      <div>
        <h1> The user is {user} , and Age of {user} is {a}</h1>
        <button onClick={changeval}>Click to change the values</button>
      </div>
      <br></br>
      <div>
        <h1 className='h'>Counter:</h1>
        <h2>{num}</h2>
        <button onClick={inc} className='zero'>Increment</button>
        <button onClick={dec} className='zero'>Decrement</button>
      </div>
    </div>
  )
}

export default App

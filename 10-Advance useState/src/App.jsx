import React, { useState } from 'react'

const App = () => {

  //Two-Way-Binding

    const [title, setTitle]=useState('')

    const submitedHandler = (e) => {
      e.preventDefault()
      console.log("Form Submitted by",title);
      setTitle('')
    }
    return (
    <div>
      <form onSubmit={(e) => {
        submitedHandler(e)
      }} >
        <input type="text" placeholder='enter your input'
        value={title}
        onChange={(e) =>{
          setTitle(e.target.value)
        }}
         />
         <button>Submit</button>
      </form>

    </div>
  )
}

export default App
import React from 'react'

const App = () => {
  const greet = (name) => `Hello, ${name}!`

  const showMessage = () => {
    alert(greet('React Learner'))
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Functions Demo</h1>
      <p>{greet('Student')}</p>
      <button onClick={showMessage}>Show Greeting</button>
    </div>
  )
}

export default App

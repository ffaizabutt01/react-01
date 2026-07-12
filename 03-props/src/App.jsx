import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      //props
      <Card user='Card 1' img='https://images.unsplash.com/photo-1773332585771-5c9c5fa642d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' />
      <Card user='Card 2' img='https://images.unsplash.com/photo-1783628301708-c71042ce5622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8' />
      <Card user='Card 3' img='https://images.unsplash.com/photo-1777720871398-ee7a22a72f78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App

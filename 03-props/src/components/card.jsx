import React from 'react'

const card = (props) => {
  return (
    
       <div className="card">
        <img src={props.img} alt="" />
    <h1>{props.user}</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, incidunt maiores. Esse, odit. Magni minima quasi culpa aspernatur laborum amet.</p>
          <button>View Details</button>
      </div>
  )
}

export default card

import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  //Call API through Fetch (aysnc)
  /*
const getData = async ()=> {
  const data = await fetch ('https://jsonplaceholder.typicode.com/users')
  const resp = await data.json()
  console.log(resp);
  }
  */

  //Call API Through Axios
  //1-Import Axios , install thorugh command then use
 
 /* const getData = async () => {

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);
  }*/

    //how we can use this /change the values or use

    const [resp , setResp] = useState([])
 const getData = async () => {

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setResp(data)
  }
  return (
    <div>
<button onClick={getData}> Get Data </button>
<div>
  {resp.map(function(elem,idx){

    return <h3>Hello, {elem.name} ,at index {idx}</h3>
  })}
</div>
    </div>
  )
}
export default App

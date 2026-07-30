import React, { useEffect, useState } from 'react'


const App = () => {

const [num,setNum]= useState(0)
const [num2,setNum2]=useState(100)
  useEffect(function(){
  console.log("useEffect is running...")
  },[num])  /*[num] dependence mention krde mtlb (useEffct is running wala message ab tb he chly ga jab num ke value change hoge)*/
  
  return (
    <div>
      <h2>Num1 = {num} </h2>
      <h2>Num2 = {num2}</h2>

<button onClick={()=>{
  setNum(num+1)
}}>Click</button> {/* sirf is click pa use Effect chly ga kuka upr dependece  ma num use howa ha*/}

<button onClick={()=>{
  setNum2(num2+10)
}}>Click</button>

    </div>
  )
}

export default App

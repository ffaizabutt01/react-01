import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index,setIndex]=useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data)

  }

  useEffect(function () {
    getData()
  }, [index])

  let userPrintData = <h3 className='text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if (userData.length > 0) {
    userPrintData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-50 w-70 mt-3  overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h3 className='font-normal text-lg'>{elem.author}</h3>
        </a>
      </div>

    })
  }

  return (
    <div className=' overflow-auto h-screen bg-black  text-white'>
      <div className='flex flex-wrap gap-3 '>
        {userPrintData}
      </div>
      <div className='flex justify-center  items-center gap-3 mt-4 p-4'>

        <button 
        onClick={()=>{
          if(index>1)
          setIndex(index-1)
        setUserData([])
        }}
        className='bg-sky-950 text-sky-300  active:scale-95 rounded px-4 py-2 font-semibold'>Prev</button>
        <h4>Page {index}</h4>
        <button 
         onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        className='bg-sky-950 text-sky-300 active:scale-95 rounded px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App

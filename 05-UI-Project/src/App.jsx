import React from 'react'
import Section01 from './Components/Section01/Section01'
import Section02 from './Components/Section02/Section02'

const App = () => {

  const users = [
    { image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', intro: 'Prime customers, that have access to bank credit and are satisfied with the current product', tag: 'Satisfied' },
    { image: 'https://plus.unsplash.com/premium_photo-1661580608404-c6e7b4481c31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwdXNlfGVufDB8fDB8fHww', intro: 'Prime customers, that have access to bank credit and are not satisfied with the current product', tag: 'Underserved' },
    { image: 'https://media.istockphoto.com/id/2199471016/photo/close-up-hands-of-unrecognizable-man-holding-and-using-smartphone-standing-on-city-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=g94fyjhGO-2ix1weTtcwsBwOXow5sPqKh6-l2xsNdZM=', intro: 'Customer from near-prime and sub-prime segments with no access to bank credit', tag: 'Underbanked' },
     { image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D', intro: 'Customer from near-prime and sub-prime segments with no access to bank credit', tag: 'UnderObservation' }
  ]
  return (
    <div>
      <Section01 users={users} />
      <Section02 />
    </div>
  )
}

export default App

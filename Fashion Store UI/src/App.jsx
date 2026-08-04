import React from 'react'
import Section1 from './components/Section1/Section01'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import { Truck,Cuboid,Star,Shield} from 'lucide-react'


const writen =[
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzyjDMfRSm0HqzTgXNQCp0qEG02qd0Irjd511syzWfQ&s=10",
    title:"MEN",
    description:"Elevated Everyday essentials",
    shop:"SHOP MEN"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEqqIhRAkMieMMroV1E-CODmoXlbQg3EdcHTV_3G_2g&s=10",
    title:"WOMEN",
    description:"Effortless  Style for every you",
    shop:"SHOP WOMEN"
  },
  {
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqxOHU1hAGAnuq4_m5LuMFnwrdNqbGwsvwuQzWT9aOYg&s=10",
    title:"KID",
    description:"Comforts meets cool everyday.",
    shop:"SHOP KID"
  }
]

const user=[
  {
    Sign:<Truck size={30} />,
    title:'FAST DELIVERY',
    description:'Quick and safe delivery'
  },
    {
      Sign:<Cuboid size={30} />,
      title:'EASY RETURNS',
      description:'Within 15 days'
    },
    {
    Sign:<Star size={30} />,
    title:'QUALITY ASSUREDE',
    description:'Best fashion,best quality'
  },
    {
    Sign:<Shield size={30} />,
    title:'SECURE PAYMENT',
    description:'100% secure checkout'
  }
  
]

const App = () => {
  return (
    <div>
      <Section1/>
      <Section2 writen={writen}/>
      <Section3 user={user}/>
    </div>
  )
}

export default App

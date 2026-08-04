import React from 'react'
import { Search, User, Heart, ShoppingCart } from 'lucide-react'

const NavBar = () => {
  return (
    <div>
       <div className='flex justify-between items-center '>
                <ul className='mt-11 text-xs font-semibold text-black flex justify-between items-center gap-11 ml-12'>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>BEAUTY</li>
                </ul>
                <div className='text-7xl mt-10 font-semibold'>
                    GAZU
                </div>
                <ul className='mt-11 text-xs font-semibold text-black flex justify-between items-center gap-11 mr-12 '>
                    <li className='flex items-center gap-1'>
                        <Search size={16} />
                        <span >Search</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <User size={16} />
                        <span>Login</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <Heart size={16} />
                        <span>Wishlist</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <ShoppingCart size={16} />
                        <span>Cart</span>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default NavBar

import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
   <nav className='flex justify-between items-center mx-auto px-2 py-2 w-[92%]'>
    <div>
      {/* brand */}
      <span className='text-lime-500 text-2xl'>
        FITME
      </span>
    </div>
    <div className=''>
      {/* items */}
      <ul className='flex md:flex-row flex-col items-center gap-[4vw]'>
        <li className='text-xl hover:text-lime-500 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8'><Link>Home</Link></li>
        <li className='text-xl hover:text-lime-500 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8'><Link>About</Link></li>
        <li className='text-xl hover:text-lime-500 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8'><Link>Workout</Link></li>
        <li className='text-xl hover:text-lime-500 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8'><Link>Contact us</Link></li>
      </ul>
    </div>
    <div>
      {/* button */}
      <button className='bg-lime-700 text-gray-200 px-4 py-2 rounded-full hover:bg-lime-500 hover:text-white'>Sign-Up</button>
    </div>
   </nav> 
  )
}

export default Navbar
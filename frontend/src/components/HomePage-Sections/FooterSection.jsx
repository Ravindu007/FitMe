import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const FooterSection = () => {
  const [icons, setIcons] = useState([
    {icon:"/footerSection/fb.png", id:1},
    {icon:"/footerSection/tiktok.png", id:2},
    {icon:"/footerSection/insta.png", id:3}
  ])
  return (
    <div className='flex h-[300px] items-center'>
      <div className="left w-[75%] grid grid-cols-2">
        <div className="cl-1 flex flex-col">
          <Link>Home</Link>
          <Link>Tutorials</Link>
          <Link>Memberships</Link>
          <Link>Reviews</Link>
          <Link>Contact</Link>
        </div>
        <div className="cl-2 flex flex-col">
          <Link>Home</Link>
          <Link>Home</Link>
          <Link>Home</Link>
          <Link>Home</Link>
          <Link>Home</Link>
        </div>
      </div>
      <div className="right w-[25%] flex flex-col items-center justify-center min-h-full">
        <div className="button-div flex justify-center  w-full">
          <button className='border-1 border-primaryColor rounded-full py-2 px-8 hover:bg-primaryColor hover:text-secondaryColor duration-150'>Subscribe</button>
        </div>
        <div className="link-div flex flex-col items-center justify-center mt-14">
          <h1>Contact us</h1>
          <div className="links flex gap-10 py-4">
            {icons.map((icon)=>(
              <img src={icon.icon} height={45} width={45} alt="" className='text-white hover:scale-105 duration-150'/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
import React, { useState } from 'react'
import {motion as m} from 'framer-motion'


const Section1 = () => {

  const [counts, setCounts] = useState([
    {countName:"Members", countNumber:100, id:1},
    {countName:"Tutorials", countNumber:250, id:2},
    {countName:"Members", countNumber:50, id:3},
  ])

  return (
    <div className='flex relative h-[100vh]'>
      <m.div
        className="box"
        initial={{ opacity: 0, scale: 0.8}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
      <div className="left absolute top-0 left-0 py-12 h-[100vh]">
        {/* text */}
        <div className="text">
          <h1 className='text-[88px]'>LET'S START DAILY <br /> WORKOUT <br /> WITH <span className='text-primaryColor'>FITME</span></h1>
        </div>
        {/* button */}
        <div className="button">
          <button className='border-1 border-primaryColor rounded-full w-[300px] h-[77px] flex justify-center items-center hover:bg-primaryColor hover:text-black'>
            <p className='text-[32px]'>Sign up</p>
            <span><img src="/icons/arrow.svg" alt="" width={78} height={78} className='text-primaryColor'/></span>
          </button>
        </div>
        {/* counts */}
        <div className="count flex gap-8 text-[32px] mt-4">
          {counts.map((count)=>(
            <div className="item italic" key={count.id}>
              <p>{count.countName}</p>
              <p className='text-primaryColor'>{count.countNumber} + </p>
            </div>
          ))}
        </div>
      </div>
      </m.div>
      
      <div className="right absolute right-0 top-0 md:block sm:hidden">
        <div className="img-section1 flex relative  w-[750px] h-[100vh]">
          <img src="./Elipse.png" alt=""  className='w-auto h-[100vh] absolute right-0'/>
          <img src="./body1.png" alt="" className='z-50 absolute h-[600px]  right-2' />
        </div>
      </div>
    </div>
  )
}

export default Section1
import React, { useState } from 'react'

const Section2 = () => {

  const [cards, setCards] = useState([
    {text:"CREATE WORKOUT", imgSrc:"/section2_Cards/img1.png", id:1},
    {text:"FITNESS CONTROL", imgSrc:"/section2_Cards/img2.png", id:2},
    {text:"FITME BLOG", imgSrc:"/section2_Cards/img3.png", id:3},
  ])
  return (
    <div className='flex flex-col items-center'>
      <div className="header text-[64px]">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="list grid sm:grid-cols-1 md:grid-cols-3 gap-6 relative py-8">
        {cards.map((card)=>(
          <div className="card w-[410px] h-[500px] hover:shadow-md  hover:shadow-primaryColor hover:bg-primaryColor text-primaryColor hover:text-white" key={card.id}>
            <p className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[64px]' style={{"WebkitTextStroke": "1px black"}}>{card.text}</p>
            <img src={card.imgSrc} alt="" className='object-cover overflow-hidden' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section2
import React, { useState } from 'react'

const Section3 = () => {
  const [cards, setCards] = useState([
    {cardName:"ABS Workouts", cardImage:"/section3_Cards/i1.png", id:1},
    {cardName:"BICEPS", cardImage:"/section3_Cards/i2.png", id:2},
    {cardName:"BACK", cardImage:"/section3_Cards/i3.png", id:3},
    {cardName:"SHOULDERS", cardImage:"/section3_Cards/i1.png", id:4},
    {cardName:"LEGS", cardImage:"/section3_Cards/i2.png", id:5},
  ]) 


  return (
    <div className='flex flex-col'>
      <div className="text flex justify-center">
        <h1 className='text-[64px]'>WORKOUTS</h1>
      </div>
      <div className="cards relative max-h-[666px] overflow-y-scroll">
        {cards.map((card)=>(
          <div className="card h-[200px] m-[33px]" key={card.id}>
            <p className='absolute left-5 top-10 text-[64px] text-primaryColor' style={{"WebkitTextStroke": "1px black"}}>{card.cardName}</p>
            <img className='absolute right-0' src={card.cardImage} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section3
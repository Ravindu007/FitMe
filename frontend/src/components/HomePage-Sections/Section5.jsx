import React, { useState } from 'react'

const Section5 = () => {
  const [cards, setCards] = useState([
    {text:"This is the best workout site that I have ever found. All the essential things are under one roof", name:"Nathan James", ratings:4, img:""},
    {text:"This is the best workout site that I have ever found. All the essential things are under one roof", name:"Nathan James", ratings:4, img:""},
    {text:"This is the best workout site that I have ever found. All the essential things are under one roof", name:"Nathan James", ratings:4, img:""}
  ])
  return (
    <div className='py-10'>
      <div className="text flex justify-center">
        <h1 className='text-[64px]'>WHAT THEY SAY</h1>
      </div>
      <div className="cards grid sm:grid-cols-1 md:grid-cols-3 gap-5 py-10">
        {cards.map((card)=>(
          <div className="card h-[395px] flex flex-col bg-gradient-to-t from-[#2E3840] to-[#015DA7]  shadow-2xl relative text-white rounded-[30px]">
            <div className="text py-5 px-5">
              <p>“This is the best workout site that I have ever found. All the essential things are under one roof”</p>
            </div>
            <div className="name flex flex-row w-full justify-center gap-10 absolute bottom-20">
              <div className="img">
                <img src="/section5_Cards/avatar1.png" alt="" />
              </div>
              <div className="name-tab flex-col">
                <p>{card.name}</p>
                <div className="ratings flex gap-1 rounded-full bg-gradient-to-b from-[#015DA7] from-5% px-3 py-1 shadow-md">
                  <img src="/section5_Cards/start.png" alt="" />
                  <img src="/section5_Cards/start.png" alt="" />
                  <img src="/section5_Cards/start.png" alt="" />
                  <img src="/section5_Cards/start.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section5
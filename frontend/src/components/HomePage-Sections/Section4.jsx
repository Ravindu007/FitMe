import React, { useState } from 'react'

const Section4 = () => {

  const [cards, setCards] = useState([
    {
      fee:1.50,
      duration:"Monthly",
      texts:[
        {txt1: "3 Experties tutorials", txt2:"E book guide ", txt3:"Online class access"}
      ],
      id:1
    },
    {
      fee:2.50,
      duration:"Quartly",
      texts:[
        {txt1: "3 Experties tutorials", txt2:"E book guide ", txt3:"Online class access"}
      ],
      id:2
    },
    {
      fee:3.50,
      duration:"Yearly",
      texts:[
        {txt1: "3 Experties tutorials", txt2:"E book guide ", txt3:"Online class access"}
      ],
      id:3
    },
  ])
  return (
    <div className='flex flex-col py-10 px-24'>
      <div className="text flex justify-center py-5">
        <h1 className='text-[64px]'>MEMBERSHIPS</h1>
      </div>
      <div className="cards grid sm:grid-cols-1 md:grid-cols-3 gap-2">
          {cards.map((card)=>(
          <div className="card  h-[495px]  bg-[#2E3840] justify-center items-center text-white border-white hover:bg-gradient-to-b from-primaryColor hover:scale-110 hover:z-50 hover:duration-200 rounded-[30px]" key={card.id}>
            <h1 className='text-[64px]'>$ {card.fee}</h1>
            <div className="duration flex justify-center items-center">
              <span className='text-[34px] text-primaryColor'>/</span>
              <h2 className='text-[25px]'>{card.duration}</h2>
            </div>
            {card.texts.map((txt)=>(
              <div className="text flex flex-col py-10">
                <li>{txt.txt1}</li>
                <li>{txt.txt2}</li>                
                <li>{txt.txt3}</li>
              </div>
            ))}
            <div className="button-div">
              <button className='bg-white text-black py-2 px-4 rounded-full hover:bg-primaryColor hover:text-white'>Choose Plan</button>
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Section4
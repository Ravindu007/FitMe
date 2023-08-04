import React from 'react'
import {motion as m} from "framer-motion"

import './Home.scss'
import Section1 from '../components/HomePage-Sections/Section1'
import Section2 from '../components/HomePage-Sections/Section2'
import Section3 from '../components/HomePage-Sections/Section3'
import Section4 from '../components/HomePage-Sections/Section4'
import Section5 from '../components/HomePage-Sections/Section5'
import FooterSection from '../components/HomePage-Sections/FooterSection'

const Home = () => {
  return (
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <FooterSection/>
    </div>
  )
}

export default Home
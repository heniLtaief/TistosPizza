import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {HeroContainer, HeroContent,HeroBtn,HeroH1,HeroP,HeroItems} from "./HeroElements"

const Hero = () => {
    return (
        <HeroContainer>
           <Navbar/>
           <Sidebar/>
           <HeroContent>
               <HeroItems>
                   <HeroH1>The Greatest Pizza Ever</HeroH1>
                   <HeroP>Ready In 90 Seconds</HeroP>
                   <HeroBtn>Order</HeroBtn>
               </HeroItems>
           </HeroContent> 
        </HeroContainer>
    )
}

export default Hero

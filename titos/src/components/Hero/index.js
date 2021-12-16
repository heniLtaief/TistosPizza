import React,{useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent,HeroBtn,HeroH1,HeroP,HeroItems} from "./HeroElements";


const Hero = () => {
    const [isOpen,setIsOpen]= useState(false)

     const toggle = () => {
    setIsOpen(!isOpen);
  };
 
    return (
        <HeroContainer>
           <Navbar toggle={toggle}/>
           <Sidebar toggle={toggle} isOpen={isOpen}/>
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

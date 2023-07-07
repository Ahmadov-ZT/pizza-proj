import React, {useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItem,
  HeroH1,
  HeroP,
  Herobtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItem>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready In 5 Minunts</HeroP>
          <Herobtn>Place Order</Herobtn>
        </HeroItem>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

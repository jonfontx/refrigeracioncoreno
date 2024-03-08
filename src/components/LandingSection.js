import React from "react";
import { Avatar, Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myAvatar from "../images/avatar.jpeg";
import backimg from "../images/backimg.png";
import videowebm from "../images/fridgehome.webm"
import videoMP4 from "../images/fridgehome.mp4"
import { useEffect } from "react";


const greeting = "Refrigeración Coreno";
const bio1 = "Servicio Técnico";
const bio2 = "Especializado en neveras y congeladoras";

const LandingSection = () => {
  useEffect(() => {
    const videoTag = document.querySelector(".videoTag");
    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      videoTag.style.transform = `translate3d(0, ${scrollTop * 0.5}px, 0)`;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

return (
<FullScreenSection
className="landing"
   justifyContent="center"
   alignItems="center"
   textAlign="center"
   isDarkBackground
   backgroundColor="#2A4365"
 >
<video className='videoTag' autoPlay="autoPlay" loop="loop" muted="muted" playsInline="playsInline" style={{position:"absolute", zIndex:0}}>
<source src={videowebm} type="video/webm" />
<img src={backimg} alt="Fallback Image" />
<source src={videoMP4} type="video/mp4" />
</video>
   <VStack spacing= {16} style={{zIndex:1}}>
     <VStack spacing={4} align="center" justify="center">
       <Avatar
         src={myAvatar}
         size="2xl"
         name="Refrigeración Coreno"
         mt={{base:"0"}}
         mb={{base:"0"}}
       />
       <Heading as="h4" size="md" noOfLines={1}>
         {greeting}
       </Heading>
     </VStack>
     <VStack spacing={6} align="center" justify="center" >
       <Heading as="h1" size="lg" noOfLines={1} id="bio">
         {bio1}
       </Heading>
       <Heading as="h1" size="sm" noOfLines={1} id="bio">
         {bio2}
       </Heading>
     </VStack>
   </VStack>
 </FullScreenSection>
);
};

export default LandingSection;
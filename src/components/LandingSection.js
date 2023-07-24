import React from "react";
import { Avatar, Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myAvatar from "../images/avatar.JPG";
import video from '../images/codingvideo.webm';
import backimg from "../images/backimg.png";
import videoMp4 from "../images/videocoding.mp4"
import { useEffect } from "react";


const greeting = "Jonatan Fontebasso";
const bio1 = "Front-end developer";
const bio2 = "specialized in React";

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
<source src={video} type='video/webm' />
<img src={backimg} alt="Fallback Image" />
<source src={videoMp4} type='video/mp4' />
</video>
   <VStack spacing= {16} style={{zIndex:1}}>
     <VStack spacing={4}>
       <Avatar
         src={myAvatar}
         size="2xl"
         name="Jonatan Fontebasso"
         mt={{base:"20"}}
       />
       <Heading as="h4" size="md" noOfLines={1}>
         {greeting}
       </Heading>
     </VStack>
     <VStack spacing={6} mt={{base:"10"}}>
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
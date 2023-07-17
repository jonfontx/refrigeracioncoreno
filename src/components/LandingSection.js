import React from "react";
import { Avatar, Heading, VStack, background } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myAvatar from "../images/avatar.JPG"
import video from '../images/codingvideo.webm';



const greeting = "Jonatan Fontebasso";
const bio1 = "Front-end developer";
const bio2 = "specialized in React";

const LandingSection = () => (
 <FullScreenSection
   justifyContent="center"
   alignItems="center"
   isDarkBackground
   backgroundColor="#2A4365"
 >
<video className='videoTag' autoPlay loop muted style={{position:"fixed"}}>
<source src={video} type='video/webm' />
</video>
   <VStack spacing={16} style={{zIndex:1}} >
     <VStack spacing={4} alignItems="center">
       <Avatar
         src={myAvatar}
         size="2xl"
         name="Jonatan Fontebasso"
       />
       <Heading as="h4" size="md" noOfLines={1}>
         {greeting}
       </Heading>
     </VStack>
     <VStack spacing={6}>
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

export default LandingSection;
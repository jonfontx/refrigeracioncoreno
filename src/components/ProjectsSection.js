import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 

const projects = [
 {
   title: "Reserve-a-table Web App",
   description:
     "Restaurant website with booking system built using React JavaScript. Designed to be responsive and accessible, ensuring that it works seamlessly across different devices and screen sizes. Includes real-time availability updates and email confirmations to ensure a smooth and reliable reservation process.",
   getImageSrc: () => require("../images/development.jpeg"),
 },
 {
   title: "UI design with Figma",
   description:
     "wireframe design of a website created using the Figma platform. It is a blueprint of the website's layout, structure, and content, and is intended to provide a visual representation of the website's design and functionality. The design incorporates a clean and modern aesthetic, with a color scheme that is consistent throughout the site.",
   getImageSrc: () => require("../images/figma.jpeg"),
 },
 /*
 {
   title: "Photo Gallery", 
   description: 
     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
   getImageSrc: () => require("../images/photo3.jpg"), 
 },

 {
   title: "Event planner", 
   description: 
     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
   getImageSrc: () => require("../images/photo4.jpg"), 
 },
*/
];

const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;

import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
 {
   title: "Front-end web app",
   description:
     "Demo Restaurant website with reserve-a-table app built using React JavaScript, HTML and CSS.", //Includes real-time availability updates and email confirmations to ensure a smooth and reliable reservation process. Designed to be responsive and accessible, ensuring that it works seamlessly across different devices and screen sizes.//
   getImageSrc: () => require("../images/littlelemon.png"),
   url:"https://reactresto.netlify.app/"
 },

 {
   title: "Wordpress e-commerce",
   description:
     "Fully functional online store built for a company using WordPress and WooCommerce.", //This project serves as a testament to my practical skills in web design and highlights my ability to deliver high-quality ecommerce solutions tailored to meet specific business requirements.//
   getImageSrc: () => require("../images/dulcesyantojos.png"),
   url:"https://dulcesyantojos.es/"
 },

 {
  title: "UI design with Figma",
  description:
    "Wireframe design of the demo website created using the Figma platform.", //It is a blueprint of the website's layout, structure, and content, and is intended to provide a visual representation of the website's design and functionality. The design incorporates a clean and modern aesthetic, with a color scheme that is consistent throughout the site.//
  getImageSrc: () => require("../images/figmawireframe.png"),
  url:"https://www.figma.com/proto/1ZS9JySXpteZ0BiZSpETAY/Restaurant-Wireframe-Portfolio?node-id=1-57&scaling=min-zoom&page-id=0%3A1&mode=design&t=AIp6dyo7iaoVKFpJ-1"
},

/*
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
     <Box id="projects"
       display="grid"
       gridTemplateColumns="repeat(2,minmax(0,1fr))"
       gridGap={8}
     >
       {projects.map((project) => (
         <Card
           key={project.title}
           title={project.title}
           description={project.description}
           url={project.url}
           imageSrc={project.getImageSrc()}
         />
       ))}
     </Box>
   </FullScreenSection>
 );
};

export default ProjectsSection;

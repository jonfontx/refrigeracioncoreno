import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
 {
   title: "Reparación y Mantenimiento",
   description:
     "Neveras y congeladoras familiares y comerciales. Todas las marcas",
     getMediaSrc: () => require("../images/tecnico1.webm"),
     mediaType: "video",
 },

 {
   title: "Velocidad, Eficacia y Garantía",
   description:
     "En el menor tiempo, al menor costo. Trabajos garantizados por 3 meses. 30 años de experiencia nos avalan",
   getImageSrc: () => require("../images/calidad.jpeg"),
 },

 {
  title: "Ubicación",
  description:
    "Operamos en Málaga Capital y Costa del Sol, España.  No dude en consultar",
  getImageSrc: () => require("../images/ubicacion.jpeg"),
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
     <Heading as="h1" id="projects-section" style={{zIndex:1}}>
       Nuestros Servicios
     </Heading>
     <Box id="projects"
       display="grid"
       gridTemplateColumns="repeat(2,minmax(0,1fr))"
       gridGap={8}
       style={{zIndex:1}}
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

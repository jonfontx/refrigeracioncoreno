import React, { useEffect, useRef } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { 
 faGithub, 
 faLinkedin, 
 faMedium,
 faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"; 
import { Box, HStack } from "@chakra-ui/react"; 
 
const socials = [
 {
   icon: faEnvelope, 
   url: "mailto: jlfontebasso@icloud.com",
 },
 {
   icon: faGithub,
   url: "https://github.com/jonfontx",
 },
 {
   icon: faLinkedin,
   url: "https://www.linkedin.com/in/jonatan-fontebasso",
 },
/*
const icon = "faMedium";
const url = "https://medium.com/@sureskills";
*/
 /*
   icon: faStackOverflow,
   url: "https://stackoverflow.com/users/sureskills";
*/
];


const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        headerElement.style.position = "static";
      } else {
        headerElement.style.position = "fixed";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 const handleClick = (anchor) => () => { 
   const id = `${anchor}-section`; 
   const element = document.getElementById(id); 
   if (element) {
     element.scrollIntoView({
       behavior: "smooth",
       block: "start",
     });
   } 
 };
 return (
   <Box
     position="fixed"
     top={0}
     left={0}
     right={0}
     transform="translateY(0)"
     transition="transform 0.3s ease-in-out"
     zIndex="9999"
     backgroundColor="#18181b"
     ref={headerRef}
   >
     <Box color="white" maxWidth="1280px" margin="0 auto"> 
       <HStack 
         px={16} 
         py={4} 
         justifyContent="space-between"
         alignItems="center"
       > 
         <nav id="socials"> 
           <HStack spacing={8}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a> 
             ))} 
           </HStack> 
         </nav> 
         <nav> 
           <HStack spacing={8}> 
             <a href="#projects" onClick={handleClick("projects")}> 
               Projects 
             </a> 
             <a href="#contactme" onClick={handleClick("contactme")}> 
               Contact Me
             </a> 
           </HStack> 
         </nav> 
       </HStack> 
     </Box> 
   </Box> 
 ); 
}; 

export default Header; 
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";



 
const socials = [
 {
   icon: faEnvelope,
   url: "mailto: boretto1910@gmail.com",
 },
 {
   icon: faFacebook,
   url: "https://www.facebook.com/profile.php?id=61556445633982",
 },
 {
   icon: faPhone,
   url: "tel:+34607957941",
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

  /*useEffect(() => { 
    let prevScrollPos = window.scrollY; 

    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(0)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 

    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []);*/

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
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
      zIndex={2}
    >
     <Box color="white" maxWidth="1280px" margin="0 auto"> 
       <HStack 
         px={{base:2,lg:16}}
         py={4} 
         justifyContent="space-between"
         alignItems="center"
       > 
         <nav id="socials"> 
           <HStack spacing={{base:4, lg:8}}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="xl" key={url} /> 
               </a> 
             ))} 
           </HStack> 
         </nav>
         <nav>
           <HStack spacing={{base:4, lg:8}} fontSize={{base:13, lg:16}}>
            <Link
            href="#projects-section"
            color="white"
            transition="color 0.3s ease"
            _hover={{color:"green.500"}}
            >
              Nuestros Servicios
            </Link>
            <Link
            href="#credentialsSection"
            color="white"
            transition="color 0.3s ease"
            _hover={{color:"green.500"}}
            >
              Credenciales
            </Link>
            <Link
            href="#contactme"
            color="white"
            transition="color 0.3s ease"
            _hover={{color:"green.500"}}
            >
              Contacto
            </Link>
           </HStack>
         </nav> 
       </HStack> 
     </Box> 
   </Box> 
 ); 
}; 

export default Header; 
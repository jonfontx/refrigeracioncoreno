import React from "react"; 
import {Box, Flex} from "@chakra-ui/react"; 
 
const Footer = () => { 
 return ( 
   <Box backgroundColor="#18181b"> 
     <footer> 
       <Flex 
         margin="0 auto" 
         px={12} 
         color="white" 
         justifyContent="center" 
         alignItems="center" 
         maxWidth="1024px" 
         height={16} 
       > 
         <p>Todos los derechos reservados • © 2024 • Hecho por jonfonte WebDev</p> 
       </Flex> 
     </footer> 
   </Box> 
 ); 
}; 
 
export default Footer;
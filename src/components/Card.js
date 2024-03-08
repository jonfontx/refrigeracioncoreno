import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import React from "react";


const Card = ({ title, description, imageSrc}) => { 
   return ( 
     <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl" 
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} style={{height:400}}/> 
       <VStack spacing={4} p={4} alignItems="flex-start"> 
         <HStack justifyContent="space-between" alignItems="center"> 
           <Heading as="h3" size="md"> 
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg"> 
           {description} 
         </Text>
         <HStack spacing={2} alignItems="center">
         </HStack> 
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 
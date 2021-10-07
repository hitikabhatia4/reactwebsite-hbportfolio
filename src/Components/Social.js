import Icon from "@chakra-ui/icon";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import React  from "react";
import {FaHtml5,FaBootstrap,FaCss3,FaFigma,FaJava,FaPython,FaReact,FaJavascript} from 'react-icons/fa';
function Social() {
    return (
       <>
      <Text fontWeight="semibold" fontSize="4xl" as="u" >Skills</Text>
      <HStack spacing={10} marginTop="32">
         <Stack>
         <Icon as={FaHtml5}  h="20" w="20"></Icon>
         <Text textAlign="center" fontSize="20">Html</Text>
         </Stack>
         <Stack>
         <Icon as={FaBootstrap} h="20" w="20"></Icon>
         <Text textAlign="center" fontSize="20">Bootstrap</Text>
         </Stack>
         <Stack>
         <Icon as={FaCss3} h="20" w="20"></Icon>
         <Text  textAlign="center" fontSize="20">Css</Text>
         </Stack>
         <Stack>
         <Icon as={FaFigma} h="20" w="20"></Icon>
         <Text  textAlign="center" fontSize="20">Figma</Text>
         </Stack>
         <Stack>
         <Icon as={FaJava} h="20" w="20"></Icon>
         <Text  textAlign="center" fontSize="20">Java</Text>
         </Stack>
         <Stack>
         <Icon as={FaPython} h="20" w="20"></Icon>
         <Text  textAlign="center" fontSize="20">Python</Text>
         </Stack>
         <Stack>
         <Icon as={FaReact} h="20" w="20"></Icon>
         <Text  textAlign="center" fontSize="20">React</Text>
         </Stack>
      </HStack>
     </>
    );
  }
  
  export default Social;
  
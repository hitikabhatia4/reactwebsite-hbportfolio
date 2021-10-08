import Icon from "@chakra-ui/icon";
import { Flex, HStack, Stack, Text , VStack} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React  from "react";
import {FaHtml5,FaBootstrap,FaCss3,FaFigma,FaJava,FaPython,FaReact,FaJavascript} from 'react-icons/fa';
function Social() {
   const [isNotSmallerScreen] =useMediaQuery("(min-width:600px)");
   const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
    return (
       <>
      <Text fontWeight="semibold" fontSize="4xl" as="u"  >Skills</Text>
      <Flex padding={10} direction={isNotSmallerScreen ? "row" : "column"} >
      
      <Stack pr="10" ml="10">
      <Icon as={FaHtml5}  h="20" w="20"></Icon>
      <Text textAlign="center" fontSize="20">Html </Text>
      </Stack>
      <Stack pr="10" ml="10">
      <Icon as={FaBootstrap}  h="20" w="20"></Icon>
      <Text textAlign="center" fontSize="20">Bootstrap</Text>
      </Stack>
      <Stack pr="10" ml="10">
      <Icon as={FaCss3}  h="20" w="20"></Icon>
      <Text textAlign="center" fontSize="20">Css</Text>
      </Stack>
      <Stack pr="10" ml="10">
      <Icon as={FaFigma}  h="20" w="20"></Icon>
      <Text textAlign="center" fontSize="20">Figma</Text>
      </Stack>
      <Stack pr="10" ml="10">
      <Icon as={FaJava}  h="20" w="20"></Icon>
      <Text textAlign="center" fontSize="20">Java</Text>
      </Stack>
      <Stack pr="10" ml="10">
      <Icon as={FaPython}  h="20" w="20"></Icon>
      <Text textAlign="center" fontSize="20">Python</Text>
      </Stack>
      <Stack pr="10" ml="10">
      <Icon as={FaReact}  h="20" w="20"></Icon>
      <Text textAlign="center" fontSize="20">React</Text>
      </Stack>
      
      </Flex>
      
      
     </>
    );
  }
  
  export default Social;
  
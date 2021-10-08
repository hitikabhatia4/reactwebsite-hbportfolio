import React  from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import {DiCodeigniter,DiAndroid,DiWebplatform,DiPython} from 'react-icons/di';

function Profile() {
  const [isNotSmallerScreen] =useMediaQuery("(min-width:600px)");

    return (
      <Flex  w="100%" maxWidth={{base: "100vh", md:"130vh" , lg: "130vh" , xl:"130vh"}}>
       
          <Box alignSelf="center" px="32" py="16" >
          <Text fontWeight="bold" fontSize="4xl" alignSelf="center"  textAlign="center" ml="-20" mt="10">Projects</Text>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
              <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" mr="20"  _hover={{bg:"green.400"}}>
                  <Icon color="white" p="4" as={DiAndroid} w="24" h="24"></Icon>
                  <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                    Android Projects
                  </Text>
                  
              </Flex>
              <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" mr="20" _hover={{bg:"purple.400"}}>
                  <Icon color="white" p="4" as={DiPython} w="24" h="24"></Icon>
                  <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                    Python Projects
                  </Text>
                  
              </Flex>
              <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg:"pink.400"}}>
                  <Icon color="white" p="4" as={DiWebplatform} w="24" h="24"></Icon>
                  <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                    Web Projects
                  </Text>
                  
              </Flex>
            </Flex>
          </Box>
      </Flex>
    );
  }
  
  export default Profile;
  
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import React  from "react";
import { Stack, Circle, Flex,Box, Text} from "@chakra-ui/layout";

function Header() {
    const{colorMode}= useColorMode();
    const isDark=colorMode === "dark";

    const [isNotSmallerScreen] =useMediaQuery("(min-width:600px)");

    return (
      <Stack>
          <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32": "0"} alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                <Text fontSize="5xl" fontWeight="semibold">Hi, Iam</Text>
                <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip='text'>Hitika Bhatia</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>Computer Science Student, Webdeveloper</Text>
                <Button mt={10}   colorScheme="blue" onClick={()=>window.open("")}>Hire Me</Button>
            </Box>
              <Image alignSelf="center" mt={isNotSmallerScreen ? "0": "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full' backgroundColor="transparent" boxShadow="lg" boxsize="300px" src=""></Image>
          </Flex>
      </Stack>
    );
  }
  
  export default Header;
  
import { Flex, VStack ,Heading} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Link, Spacer } from "@chakra-ui/layout";
import {IconButton} from "@chakra-ui/button";
import {FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'
import Header from "./Components/Header";
import Social from "./Components/Social";
import Profile from "./Components/Profile";

function App() {

  const{colorMode,toggleColorMode}= useColorMode();
  const isDark=colorMode === "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="blue">
          ImtheHB
        </Heading>
      
        <Spacer></Spacer>
        <Link href="https://www.linkedin.com/in/hitika-bhatia-8b9b53192/"><IconButton icon={<FaLinkedin/>} isRound="true" ></IconButton></Link>
        <Link href="#"> <IconButton  ml={2} icon={<FaInstagram/>} isRound="true" ></IconButton></Link>
        <Link href="https://github.com/hitikabhatia4"><IconButton  ml={2} icon={<FaGithub/>} isRound="true" ></IconButton></Link>
        <IconButton  ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;

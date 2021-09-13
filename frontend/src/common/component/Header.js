import React from 'react';
import {useColorMode} from "@chakra-ui/color-mode";
import { Flex , Link, IconButton} from '@chakra-ui/react';
import { FaSun, FaMoon} from 'react-icons/fa';

const Header = () => {
    const { colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";
    return (
        
        <Flex w="100%" p={2} align="center">
            <IconButton alignSelf="flex-start" ml={4} icon={ isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode} aria-label="dark"></IconButton>
            <Flex alignSelf="center">
                <Link p={5} href={`${process.env.PUBLIC_URL}/main`}>메인</Link>
                <Link p={5} href={`${process.env.PUBLIC_URL}/menu1`}>메뉴1</Link>
                <Link p={5} href={`${process.env.PUBLIC_URL}/menu2`}>메뉴2</Link> 
            </Flex>
        </Flex>
    )
}

export default Header;
import React, {useState, useEffect,useRef} from 'react';
import { Circle, Flex, Heading, Link, Stack, Text, VStack} from '@chakra-ui/layout';
import { Button, Divider, Box, SlideFade, ScaleFade, Icon, IconButton } from '@chakra-ui/react';
import {useMediaQuery} from '@chakra-ui/media-query';
import {useColorMode} from "@chakra-ui/color-mode";
import * as MainService from '../service/MainService';
import BackgroundImg from "../../image/background.jpg";
import { RiKakaoTalkFill } from "react-icons/ri"
import { MdLocalCafe } from "react-icons/md"
import { FaSun, FaMoon} from 'react-icons/fa';

function Home() {
  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";

  const [isSmallScreen] = useMediaQuery('(min-width:1000px)');
  const [isPhoneScreen] = useMediaQuery('(min-width:1300px)');
  return (
    <>
      <Flex w="100%" p={2} align="center">
        
        <IconButton alignSelf="flex-end" mr={4} icon={ isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode} aria-label="dark"></IconButton>
      </Flex>
      <Circle ml={"10%"} position="absolute" bg={isDark?"blue.100":"blue.300"} opacity={isDark?"0.1":"0.3"} w="300px" h="300px" alignSelf="center" zIndex={900}/>
      <Flex
          w="100%" h="100%"
          direction={isSmallScreen ? "row" : "column"}
          p={isSmallScreen ? "32" : "0"}
          alignSelf="center" zIndex={999}
      >
        <SlideFade offsetY="200px" in={true}>
        <Box ml={isSmallScreen ? "25%" : "0"} mt={16} align="flex-start"  w={isSmallScreen ?"600px":"100%"}>
            <Heading ml={isSmallScreen ? 3 : 10} fontSize={isSmallScreen ? "5xl":"4xl"} fontWeight="semibold" fonts="heading">
                안녕하세요
            </Heading>
            <Text fontSize={isSmallScreen ? "7xl":"5xl"} align={isSmallScreen ? "right":"center"} fontWeight="bold" bgGradient="linear(to-r, blue.500, blue.400, gray.300)" bgClip="text">
                인천만석비치타운
            </Text>
            <Text p={isSmallScreen ? "5":"5"} fontSize={isSmallScreen ? "3xl":"2xl"} fontWeight="semibold" orientation="vertical" align={isSmallScreen ? "right":"center"}>
                입주민 홍보 페이지 입니다.
            </Text>
        </Box>
        </SlideFade>
        
        <SlideFade offsetY="200px" in={true}>
        <Flex  direction={isPhoneScreen ? "column" : isSmallScreen ? "row": "column" } w={isPhoneScreen ? "100%" : "90%"} mt={"150"} ml={isPhoneScreen ? "85%" : "5%"}>
          <Link  mb={5} mr={isPhoneScreen ? "0" : isSmallScreen? "5" : "0"} w={"100%"} href="https://open.kakao.com/o/gUJemfod" isExternal >
            <Button  w={"100%"} bgColor="#fef01b" color="black" _hover={{ bg: "#ebedf0" }} leftIcon={<RiKakaoTalkFill />}>
              카카오톡 오픈 채팅방
            </Button>
          </Link>
          <Link w={"100%"}  href="https://cafe.naver.com/manbimo" isExternal>
            <Button w={"100%"} bgColor="#2db400" color="black" _hover={{ bg: "#ebedf0" }} leftIcon={<MdLocalCafe />}>
              네이버 '만비모' 카페
            </Button>
          </Link>
        </Flex>
        </SlideFade>
      </Flex>

      <Box
        w={1920}
        h={1080}
        position="absolute"
        bgImage={BackgroundImg}
        bgPosition="center"
        bgSize="cover"
        bgAttachment="fixed"
        zIndex={'auto'}
        opacity={0.2}
      />
    </>
  ) 
}
export default Home; 
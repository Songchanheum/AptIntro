import React, {useState, useEffect,useRef} from 'react';
import { Circle, Flex, Link, Stack, Text, VStack} from '@chakra-ui/layout';
import { Button, Divider, Box, SlideFade, ScaleFade, Icon } from '@chakra-ui/react';
import {useMediaQuery} from '@chakra-ui/media-query';
import {useColorMode} from "@chakra-ui/color-mode";
import * as MainService from '../service/MainService';
import BackgroundImg from "../../image/background.jpg";
import { RiKakaoTalkFill } from "react-icons/ri"
import { MdLocalCafe } from "react-icons/md"

function Home() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isSmallScreen] = useMediaQuery('(min-width:1000px)');
  const [isPhoneScreen] = useMediaQuery('(min-width:1300px)');
  return (
    <>
      <Circle ml={"10%"} position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="center" zIndex={999}/>
      <Flex
          position="absolute" w="1000px" h="300px"
          direction={isSmallScreen ? "row" : "column"}
          spacing="200px" p={isSmallScreen ? "32" : "0"}
          alignSelf="center" zIndex={999}
      >
        <SlideFade  offsetY="200px" in={true}>
        <Box ml={isSmallScreen ? "25%" : "0"} position="absolute" mt={16} align="flex-start" >
            <Text ml={3} fontSize={isSmallScreen ? "5xl":"4xl"} fontWeight="semibold" >
                안녕하세요
            </Text>
            <Text fontSize={isSmallScreen ? "7xl":"6xl"} fontWeight="bold" bgGradient="linear(to-r, blue.500, blue.400, gray.300)" bgClip="text">
                인천만석비치타운
            </Text>
            <Text p={isSmallScreen ? "5":"5"} fontSize={isSmallScreen ? "3xl":"2xl"} fontWeight="semibold" orientation="vertical" align="right">
                입주민 홍보 페이지 입니다.
            </Text>
        </Box>
        </SlideFade>
        
        <SlideFade  offsetY="200px" in={true}>
        <Flex position="absolute" direction={isPhoneScreen ? "column" : isSmallScreen ? "row": "column" } w={isPhoneScreen ? "30%" : isSmallScreen ? "100%": "40%"} mt={isPhoneScreen ? "150" : "400"} ml={isPhoneScreen ? "85%" : "5%"} >
          <Button mb={5} mr={isPhoneScreen ? "0" : "5"} w={"100%"} bgColor="#fef01b" color="black" _hover={{ bg: "#ebedf0" }} leftIcon={<RiKakaoTalkFill />}>
            <Link href="#">
            카카오톡 오픈 채팅방
            </Link>
          </Button>
          <Button w={"100%"} bgColor="#2db400" color="black" _hover={{ bg: "#ebedf0" }} leftIcon={<MdLocalCafe />}>
            <Link href="https://cafe.naver.com/manbimo" isExternal>
            네이버 '만비모' 카페
            </Link>
          </Button>
        </Flex>
        </SlideFade>
      </Flex>

      <Box
        w='1920'
        h='1080'
        backgroundImage={BackgroundImg}
        backgroundPosition="center"
        bgSize="cover"
        bgAttachment="fixed"
        zIndex={'auto'}
        opacity={0.2}
      />
    </>
  ) 
}
export default Home; 
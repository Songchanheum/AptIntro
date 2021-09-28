import React, {useState, useEffect,useRef} from 'react';
import { Circle, Flex, Heading, HStack,VStack, Link, Stack, Text} from '@chakra-ui/layout';
import { Button, Divider, Box, SlideFade, ScaleFade, Icon, IconButton, Fade, useDisclosure, Select, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import {useMediaQuery} from '@chakra-ui/media-query';
import {useColorMode} from "@chakra-ui/color-mode";
import BackgroundImg from "../../image/background.png";
import { RiKakaoTalkFill } from "react-icons/ri"
import { MdLocalCafe } from "react-icons/md"
import { FaSun, FaMoon} from 'react-icons/fa';

function Home() {
  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onToggle } = useDisclosure();
  const [isSmallScreen] = useMediaQuery('(min-width:1000px)');
  const [isPhoneScreen] = useMediaQuery('(min-width:1300px)');
  const [isSmaller] = useMediaQuery('(min-width:390px)');
  return (
    <Box
    bgImage={BackgroundImg}
    bgPosition="center"
    bgSize="cover"
    bgAttachment="fixed"
    zIndex={'auto'}>
      <Flex w="100%" p={2} align="center">
        <IconButton alignSelf="flex-end" mr={4} icon={ isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode} aria-label="dark"></IconButton>
      </Flex>
      <Circle ml={isSmallScreen ? "10%" : "2%"} position="absolute" bg={isDark?"blue.100":"blue.300"} opacity={isDark?"0.1":"0.3"} w="300px" h="300px" alignSelf="center" zIndex={900}/>
      <Flex
          w="100%" h="100%"
          direction={isPhoneScreen ? "row" : "column" }
          p={isSmallScreen ? "32" : "0"}
          alignSelf="center" zIndex={999}
      >
        <SlideFade offsetY="200px" in={true}>
        <Box ml={isSmallScreen ? "25%" : "0"} mt={16} align="flex-start"  w={isSmallScreen ?"600px":"100%"}>
            <Heading ml={isSmallScreen ? 3 : 10} fontSize={isSmallScreen ? "5xl":isSmaller?"5xl":"3xl"} fontWeight="semibold" fonts="heading">
                안녕하세요
            </Heading>
            <Text fontSize={isSmallScreen ? "7xl": isSmaller?"5xl":"4xl"} align={isSmallScreen ? "right":"center"} fontWeight="bold" bgGradient="linear(to-r, blue.500, blue.400, gray.300)" bgClip="text" noOfLines={1}>
                인천만석비치타운
            </Text>
            <Text p={isSmallScreen ? "5":isSmaller?"5":"0"} fontSize={isSmallScreen ? "3xl":"2xl"} fontWeight="semibold" orientation="vertical" align={isSmallScreen ? "right":"center"}>
                입주민 홍보 페이지 입니다.
            </Text>
        </Box>
        </SlideFade>
        
        <SlideFade offsetY="200px" in={true}>
        <Flex  direction={isPhoneScreen ? "column" : isSmallScreen ? "row": "column" } w={isPhoneScreen ? "100%" : "90%"} mt={isPhoneScreen ? "150" : "100"} ml={isPhoneScreen ? "85%" : "5%"}>
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
        <Flex w={isPhoneScreen ? "60%" : isSmallScreen ? "80%": "100%" } mt="100" direction="column" alignSelf="center" ml={isPhoneScreen ? "13%" : "0%"}>
          <Text fontSize={isSmallScreen ? "3xl":"2xl"} fontWeight="semibold" alignSelf={"center"} mb={10}>
            소개페이지 입장
          </Text>
          <Flex w={"100%"} ml={5}>
            <Button w={"45%"} onClick={onToggle}>입주민 입니다.</Button>
            <Link href={`${process.env.PUBLIC_URL}/intro`} w={"45%"} ml={5} >
              <Button w={"100%"}>방문객 입니다.</Button>
            </Link>
          </Flex>
          <Fade in={isOpen}>
            <Flex w={"100%"} direction={"column"}>
              <HStack pt="10" pl="10" pr="10" pb="2">
                <Select variant="outline" placeholder="동 선택" >
                  <option value="1">101동</option>
                  <option value="2">102동</option>
                  <option value="3">103동</option>
                  <option value="4">104동</option>
                  <option value="5">105동</option>
                  <option value="6">106동</option>
                  <option value="7">107동</option>
                  <option value="8">108동</option>
                  <option value="9">109동</option>
                  <option value="10">110동</option>
                  <option value="11">111동</option>
                  <option value="12">112동</option>
                  <option value="13">113동</option>
                  <option value="14">114동</option>
                  <option value="15">115동</option>
                </Select>
                <InputGroup size="sm">
                <Input placeholder="호수 입력" />
                <InputRightElement children="호" />
                </InputGroup>
              </HStack>
              <Link  pl="10" pr="10" align={"center"} href={`${process.env.PUBLIC_URL}/intro?`}>
                <Button w={"100%"}> 입장</Button>
              </Link>
            </Flex>
          </Fade>
        </Flex>
      </Flex>
      
    </Box>
  ) 
}
export default Home; 
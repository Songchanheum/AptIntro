import React, {useState, useEffect,useRef} from 'react';
import { Flex, VStack} from '@chakra-ui/layout';
import { Button, Divider, Box } from '@chakra-ui/react';
import * as MainService from '../service/MainService';

function Home() {
    const [state, setState] = useState('테스트 입니다');

  useEffect(()=>{
    MainService.test()
    .then(response => {
        console.log(response);
        setState(response.data);
    }) 
  },[])
  return (
    <>
    <VStack>
      <Divider w="85%" center/>
      <Box backgroundColor={'gray.400'}>{state}</Box>
    </VStack>
  </>
  ) 
}

export default Home; 

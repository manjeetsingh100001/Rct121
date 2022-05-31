import React from 'react';
import {
  ChakraProvider, theme,} from '@chakra-ui/react';

import Navbar from './components/navbar';
import BannerDiv from './components/bannerDiv';


function App() {
  return (
    <ChakraProvider theme={theme}>
     
      <Navbar/>
      <BannerDiv/>
      
    </ChakraProvider>
  );
}

export default App;

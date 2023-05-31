import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home'
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Rou from './Router/Router';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider>
   
    <Rou/>
    
  </ChakraProvider>
  </BrowserRouter>
)
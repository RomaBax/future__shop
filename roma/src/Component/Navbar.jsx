import * as React from 'react';
import { Input, Stack, useDisclosure, RadioGroup, Button, Drawer, DrawerOverlay, DrawerBody, DrawerContent } from '@chakra-ui/react'
import '../Home.css'
import Carousel from './Carausel';
import Logo from '.././img/Logo.jpeg'
import { AiFillHeart, AiOutlineShoppingCart, AiOutlineGift, AiOutlineBars, AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { useEffect } from 'react';
import Sign from './SignIn'
import SignIn from './SignUp';
import { useState } from 'react';

export default function BasicTextFields() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  const [fixed, setFixed] = useState('car_div')
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 200) {
        navbar.classList.add('navbar-fixed');
        setFixed("car_div topAdd")
      } else {
        navbar.classList.remove('navbar-fixed');
        setFixed("car_div")
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <>
      <div className='navbar'>



        <div className='logoDiv'>
          <img className='logo' src={Logo} alt="" />

        </div>

        <div className='burgerMenu'>


          <RadioGroup defaultValue={placement} onChange={setPlacement}>
            <Stack direction='row' mb='4'>
            </Stack>
          </RadioGroup>
          <Button colorScheme='gray' variant='solid' className='burger_menu' onClick={onOpen}>
            <AiOutlineBars />
          </Button>
          <p className='contact'>Contact:
            <span>+998 (93) 891 88-11</span> </p>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <img className='burg-menu_logo' src={Logo} alt="" />
              <Button colorScheme='gray' variant='solid' className='burger_menu-but' onClick={onClose}>
                <AiOutlineCloseCircle />
              </Button>
              <DrawerBody className='menuBurger'>
                <Button colorScheme='gray' variant='solid' h='65px'
                  w='100%' >
                  Setting
                </Button>
                <Button colorScheme='gray' variant='solid' h='65px'
                  w='100%' >
                  Setting
                </Button>
                <Button colorScheme='gray' variant='solid' h='65px'
                  w='100%' >
                  Setting
                </Button>
                <Button colorScheme='gray' variant='solid' h='65px'
                  w='100%' >
                  Setting
                </Button>


              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>



        <div className='searchInput'>
          <Stack spacing={3}>
            <Input borderRightRadius='none' className='search' variant='filled' w='540px' placeholder='Search' size='lg' />
          </Stack>
          <Button borderLeftRadius='none' h='48px' colorScheme='telegram' className='search_icon'>
            <AiOutlineSearch />
          </Button>
        </div>







        <div className='loginBtn'>
          <Button colorScheme='white' variant='solid' className='like'>
            <AiFillHeart color='red' />
          </Button>

          <Button colorScheme='white' variant='solid' className='shop'>
            <AiOutlineShoppingCart color='gold' />
          </Button>

          <Button colorScheme='white' variant='solid' className='bonus'>
            <AiOutlineGift color='red' />
          </Button>

          <Sign />

          <SignIn />

        </div>




      </div>
      <Carousel fixed={fixed} />
    </>
  )
}

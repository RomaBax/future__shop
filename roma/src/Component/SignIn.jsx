import React from 'react'
import'../Home.css'
import { Input,Stack,useDisclosure,RadioGroup,Button,Drawer,DrawerOverlay,DrawerBody,DrawerContent,Icon, Card, CardBody, Image, Heading, Divider, CardFooter, ButtonGroup, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal, InputGroup, InputRightElement,  } from '@chakra-ui/react'






function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
      <>
        <Button className='sign_in' onClick={onOpen}>Sign in</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Registration</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Input className=''  w='400px' placeholder= 'Email' size='lg'/>
            <InputGroup size='md'>
      <Input
        mt='15px'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement pt='30px' width='4.5rem'>
        <Button  h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button  colorScheme='gray' style={{boxShadow:'2px 2px 5px 4px rgba(128, 128, 128, 0.385)'}} mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='outline' colorScheme='green'style={{boxShadow:'2px 2px 5px 4px rgba(128, 128, 128, 0.385)'}} >Sign in</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default BasicUsage
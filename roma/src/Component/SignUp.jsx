import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    InputGroup,
    InputRightElement
  } from '@chakra-ui/react'

 

  function SignIn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
      <>
        <Button className='sign_up' colorScheme='red' onClick={onOpen}>Sign Up</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Registration</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            
            <Input  placeholder='Name' />
            <Input className=''  w='400px' placeholder= 'Email' size='md' mt='20px '/>
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
              <Button colorScheme='gray' boxShadow=' 2px 2px 5px 3px rgba(209, 207, 207, 0.68)'  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='outline' colorScheme='green' boxShadow=' 2px 2px 5px 3px rgba(209, 207, 207, 0.68)'>Register</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default SignIn
import React from 'react';
import {
    Flex,
    Button,
    Input,
    FormControl,
    FormLabel
} from "@chakra-ui/react"

export const LoginForm: React.FC = () => {
    return (
        <form style={{width: '100%'}}>
            <FormControl>
                <FormLabel color='#9E6EB5'>Email address</FormLabel>
                <Input 
                    type='email' 
                    placeholder='Enter email address'
                    borderColor='#9E6EB5'
                    focusBorderColor='#9E6EB5'
                    borderRadius={14}/>
            </FormControl>
            <FormControl mt={3}>
                <FormLabel color='#9E6EB5'>Password</FormLabel>
                <Input 
                    type='password' 
                    placeholder='Enter password'
                    borderColor='#9E6EB5'
                    focusBorderColor='#9E6EB5'
                    borderRadius={14}/>
            </FormControl>
            <Flex justifyContent='space-between' mt={6}>
                <Button 
                    width='45%' 
                    borderRadius={14}
                    bgColor='#0F4C81'
                    color='#FFFFFF'
                    _hover={{ bgColor: '#9E6EB5',
                                transform: 'scale(1.02)'}}
                    _active={{ bgColor: '#9E6EB5',
                                transform: 'scale(1.02)'}}>Log In</Button>
                <Button 
                    width='45%' 
                    bgColor='#FFFFFF'
                    border='1px'
                    borderRadius={14}
                    borderColor='#9E6EB5'
                    color='#9E6EB5'
                    _hover={{ bgColor: '#FFFFFF',
                                transform: 'scale(1.02)'}}
                    _active={{ bgColor: '#FFFFFF',
                                transform: 'scale(1.02)'}}>Sign Up</Button>
            </Flex>
        </form>
    )
}
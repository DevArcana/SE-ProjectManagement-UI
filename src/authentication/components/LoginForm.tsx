import React from 'react';
import {
    Flex,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import { login } from '../api/authAPI';

interface Inputs {
    login: string,
    password: string
};

export const LoginForm: React.FC = () => {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        console.log(data);
        console.log(login(data.login, data.password));
    }

    return (
        <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!(errors.login)} isRequired>
                <FormLabel color='#9E6EB5'>Email address</FormLabel>
                <Input
                    name='login'
                    type='text' 
                    placeholder='Enter email address'
                    borderColor='#9E6EB5'
                    focusBorderColor='#9E6EB5'
                    borderRadius={14}
                    ref={register({ required: true })}/>
                <FormErrorMessage>This field is required!</FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={!!(errors.password)} isRequired>
                <FormLabel color='#9E6EB5'>Password</FormLabel>
                <Input 
                    name='password'
                    type='password' 
                    placeholder='Enter password'
                    borderColor='#9E6EB5'
                    focusBorderColor='#9E6EB5'
                    borderRadius={14}
                    ref={register({ required: true })}/>
                <FormErrorMessage>This field is required!</FormErrorMessage>
            </FormControl>
            <Flex justifyContent='space-between' mt={6}>
                <Button
                    type='submit'
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
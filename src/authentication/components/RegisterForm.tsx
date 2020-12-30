import React, { useState } from 'react';
import {
    Flex,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Checkbox
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import { register as appRegister } from '../api/authAPI';

interface Inputs {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    checked: boolean
};

export const RegisterForm: React.FC = () => {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const [ registerError, setRegisterError ] = useState<string | null>(null);
    const onSubmit = (data: Inputs) => {
        if (data.password !== data.confirmPassword) {
            setRegisterError('Passwords are not the same!');
        }
        else appRegister(data.username, data.email, data.password)
            .then(success => {
                success ? setRegisterError(null)
                        : setRegisterError('User already exists!');
            })
    }

    return (
        <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.username} isRequired>
                <FormLabel color='#9E6EB5'>Username</FormLabel>
                <Input 
                    name='username'
                    type='text' 
                    placeholder='Enter username'
                    borderColor='#9E6EB5'
                    focusBorderColor='#9E6EB5'
                    borderRadius={14}
                    ref={register({ required: true })}
                    />
                <FormErrorMessage>This field is required!</FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={!!errors.email} isRequired>
                <FormLabel color='#9E6EB5'>Email address</FormLabel>
                <Input 
                    name='email'
                    type='email' 
                    placeholder='Enter email address'
                    borderColor='#9E6EB5'
                    focusBorderColor='#9E6EB5'
                    borderRadius={14}
                    ref={register({ required: true })}/>
                <FormErrorMessage>This field is required!</FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={!!errors.password} isRequired>
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
            <FormControl mt={3} isInvalid={!!errors.confirmPassword} isRequired>
                <FormLabel color='#9E6EB5'>Confirm password</FormLabel>
                <Input 
                    name='confirmPassword'
                    type='password' 
                    placeholder='Enter password again'
                    borderColor='#9E6EB5'
                    focusBorderColor='#9E6EB5'
                    borderRadius={14}
                    ref={register({ required: true })}/>
                <FormErrorMessage>This field is required!</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!registerError}>
                <FormErrorMessage mt={3}>{registerError}</FormErrorMessage>
            </FormControl>
            <FormControl my={6} isInvalid={!!errors.checked} isRequired>
                <Checkbox 
                    name='checked'
                    color='#707070'
                    ref={register({ required: true })}>I accept the policy and terms</Checkbox>
                <FormErrorMessage>This field is required!</FormErrorMessage>
            </FormControl>
            <Flex justifyContent='space-between'>
                <Button
                    type='submit'
                    width='45%'
                    borderRadius={14}
                    bgColor='#0F4C81'
                    color='#FFFFFF'
                    _hover={{ bgColor: '#9E6EB5',
                            transform: 'scale(1.02)'}}
                    _active={{ bgColor: '#9E6EB5',
                            transform: 'scale(1.02)'}}>Sign Up</Button>
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
                            transform: 'scale(1.02)'}}>Log In</Button>
            </Flex>
        </form>
    )
}
import React, { useState } from 'react';
import {
    Flex,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Checkbox,
    Text
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import { register as appRegister } from '../api/authAPI';
import { useHistory } from 'react-router-dom'

interface Inputs {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    checked: boolean
};

export const RegisterForm: React.FC = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const [ registered, setRegistered ] = useState<boolean>(false);
    const [ registerError, setRegisterError ] = useState<string | null>(null);
    const onSubmit = (data: Inputs) => {
        setRegistered(false);
        if (data.password !== data.confirmPassword) {
            setRegisterError('Passwords are not the same!');
        }
        else {
            setRegisterError(null);
            appRegister(data.username, data.email, data.password)
            .then(success => {
                if (success) {
                    setRegisterError(null);
                    setRegistered(true);
                }
                else setRegisterError('User already exists!');
            })
        }
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
                    ref={register({ 
                            required: 'This field is required!',
                            validate: username => !/[^a-zA-Z0-9]/.test(username)
                                    || 'Username must include only letters and digits!'
                        })
                    }
                    />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
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
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
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
                    ref={register({ 
                            required: 'This field is required!',
                            minLength: {
                                value: 6,
                                message: 'Password must have at least 6 characters!'
                            },
                            validate: {
                                digit: password => /[0-9]/.test(password)
                                    || 'Password must include at least one digit!',
                                lowercase: password => /[a-z]/.test(password)
                                    || 'Password must include at least one lowercase letter!',
                                uppercase: password => /[A-Z]/.test(password)
                                    || 'Password must include at least one uppercase letter!',
                                nonAlphaNumeric: password => /[^a-zA-Z0-9]/.test(password)
                                    || 'Password must include at least one non-alphanumeric character!'
                            }})
                        }/>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
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
                    ref={register({ required: 'This field is required!' })}/>
                <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!registerError}>
                <FormErrorMessage mt={3}>{registerError}</FormErrorMessage>
            </FormControl>
            <FormControl my={6} isInvalid={!!errors.checked} isRequired>
                <Checkbox 
                    name='checked'
                    color='#707070'
                    ref={register({ required: 'This field is required!' })}>I accept the policy and terms</Checkbox>
                <FormErrorMessage>{errors.checked?.message}</FormErrorMessage>
            </FormControl>
            {registered && <Text color='#19A974' mb={3}>User registered successfully!</Text>}
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
                        onClick={() => history.push('/login')}
                        _hover={{ bgColor: '#FFFFFF',
                                transform: 'scale(1.02)'}}
                        _active={{ bgColor: '#FFFFFF',
                                transform: 'scale(1.02)'}}>Log In</Button>
            </Flex>
        </form>
    )
}
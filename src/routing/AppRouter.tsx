import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from '../authentication/context/AuthProvider';
import { LoginView } from './../authentication/views/LoginView';
import { RegisterView } from './../authentication/views/RegisterView';
import { Routes } from './routes';

export const AppRouter: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    {!isAuthenticated && <Redirect to='/login' />}
                </Route>
                <Route path={Routes.LOGIN}>
                    {!isAuthenticated ? <LoginView /> : <Redirect to='/' />}
                </Route>
                <Route path={Routes.REGISTER}>
                    {!isAuthenticated ? <RegisterView /> : <Redirect to='/' />}
                </Route>
            </Switch>
        </Router>
    );
}

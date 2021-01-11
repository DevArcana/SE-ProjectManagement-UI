import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useAuth } from "../authentication/context/AuthProvider";
import { LoginView } from "./../authentication/views/LoginView";
import { RegisterView } from "./../authentication/views/RegisterView";
import { MainView } from "./../main/views/MainView";
import { Routes } from "./routes";
import { RestrictedRoute } from "./RestrictedRoute";
import {ProjectsView} from "../projects/views/ProjectsView";

export const AppRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Switch>
        <Route path={Routes.LOGIN}>
          {!isAuthenticated ? <LoginView /> : <Redirect to={Routes.HOME} />}
        </Route>
        <Route path={Routes.REGISTER}>
          {!isAuthenticated ? <RegisterView /> : <Redirect to={Routes.HOME} />}
        </Route>
        <RestrictedRoute path={Routes.PROJECTS}>
          <ProjectsView />
        </RestrictedRoute>
        <RestrictedRoute path={Routes.HOME}>
          <MainView />
        </RestrictedRoute>
      </Switch>
    </Router>
  );
};

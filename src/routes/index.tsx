import React from "react";
import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes";
import { NavigationContainer } from '@react-navigation/native';

export function Routes() {
  const { user } = useAuth()
  return(
    <NavigationContainer>
      {
        user.id 
        ? <AppRoutes />
        : <SignIn />
      }
    </NavigationContainer>
  );
}
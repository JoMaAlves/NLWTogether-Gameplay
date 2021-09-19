import React, { 
  createContext,
  useContext,
  useState,
  ReactNode
} from "react";

import * as AuthSession from 'expo-auth-session';

import {
  REDIRECT_URI, 
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE,
} from '../configs'
import { api } from "../services/api";

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  signIn: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user,setState] = useState<User>({} as User);
  const [loading,setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      console.log(authUrl)

      const response = await AuthSession.startAsync({ authUrl })
      console.log(response)

    } catch (error) {
      throw new Error('Nao foi possivel autenticar');
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn
    }}>
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}
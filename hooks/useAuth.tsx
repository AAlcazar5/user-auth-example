import { useQuery, gql, ApolloError } from "@apollo/client";
import React, { createContext, useContext, ReactNode } from "react";

export interface User {
  id: string;
  databaseId: number;
  firstName: string;
  lastName: string;
  email: string;
  capabilities: string[];
}

interface AuthData {
  loggedIn: boolean;
  user?: User,
  loading: boolean;
  error?: ApolloError;
}

const DEFAULT_STATE: AuthData = {
  loggedIn: false,
  user: undefined,
  loading: false,
  error: undefined,
};

const AuthContext = createContext(DEFAULT_STATE);

export const GET_USER = gql`
  query getUser {
    viewer {
      id
      databaseId
      firstName
      lastName
      email
      capabilities
    }
  }
`;

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data, loading, error } = useQuery(GET_USER);
  console.log(data)
  console.log(error)
  const user = data?.viewer;
  console.log(user)
  const loggedIn = Boolean(user);
  console.log(loggedIn)

  const value = {
    loggedIn,
    user,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export default useAuth;

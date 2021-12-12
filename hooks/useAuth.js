import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import * as Google from 'expo-google-app-auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const signInWithGoogle = async () => {
        await Google.logInAsync()
    }

    return (
        <AuthContext.Provider value={{ user: null }}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext);
}
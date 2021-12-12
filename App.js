import React from 'react';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer>
      {/* HOC: High Order component */}
      <AuthProvider>
        {/* Passes down the auth stuff to the children... */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
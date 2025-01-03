import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';  // Direkt dosyadan import
import ProfilePage from '../screens/ProfilePage';  // Direkt dosyadan import
import RaporSorgulaScreen from '../screens/RaporSorgulaScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack =createStackNavigator();
const UserStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Ana Sayfa',
              headerStyle: {
                backgroundColor: 'tomato',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfilePage}
            options={{
              title: 'Profil',
              headerStyle: {
                backgroundColor: 'tomato',
              },
              headerTintColor: '#fff',
            }}
          />  
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{
              title: 'Login',
              headerStyle: {
                backgroundColor: 'tomato',
              },
              headerTintColor: '#fff',
            }}
          />  
          
          <Stack.Screen 
            name="RaporSorgula" 
            component={RaporSorgulaScreen}
            options={{
              title: 'Rapor Sorgula',
              headerStyle: {
                backgroundColor: 'tomato',
              },
              headerTintColor: '#fff',
            }}
          /> 
          
        </Stack.Navigator>
      );
}
export default UserStack

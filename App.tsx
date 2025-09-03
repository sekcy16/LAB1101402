import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Login from './app/Login';
import ProfileDetail from './app/ProductDetail'; // 👈 import หน้านี้ด้วย
import TabNavigator from './app/TabNavigator';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Main">
              {(props) => <TabNavigator {...props} onLogout={handleLogout} />}
            </Stack.Screen>
            <Stack.Screen 
              name="ProfileDetail" 
              component={ProfileDetail} 
            /> 
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { Stack } from 'expo-router';
import { createContext, useContext, useState } from 'react';
import Login from './Login';

// Context สำหรับ Auth
const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {!isLoggedIn ? (
        <Login onLogin={login} />
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetail" options={{ headerShown: false }} />
        </Stack>
      )}
    </AuthContext.Provider>
  );
}

import React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import Routes from './routes';

import NotificationService from './src/utils/notificationService';

function App() {
  const scheme = useColorScheme();

  const notificationService = new NotificationService();

  notificationService.scheduleNotification();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Routes />
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text } from 'react-native';

// Screens
import Home from './src/screens/main/main';
import Settings from './src/screens/settings/settings';

const PlaceholderScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Placeholder Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const OnboardingStack = () => (
  <Stack.Navigator initialRouteName={'Placeholder'} headerMode="none">
    <Stack.Screen name="Placeholder" component={PlaceholderScreen} />
  </Stack.Navigator>
);

const MainTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const App = () => (
  <Stack.Navigator
    initialRouteName={'MainTab'}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);

export default App;

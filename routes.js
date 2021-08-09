import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';
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
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        // eslint-disable-next-line
        tabBarIcon: ({ focused, color, size }) => (
          focused
            ? <Icon
                name="home"
                type='material-community'
                color={color}
                size={size}
              />
            : <Icon
                name="home-outline"
                type='material-community'
                color={color}
                size={size}
              />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        // eslint-disable-next-line
        tabBarIcon: ({ focused, color, size }) => (
          focused
            ? <Icon
                name="cog"
                type="material-community"
                color={color}
                size={size}
              />
            : <Icon
                name="cog-outline"
                type="material-community"
                color={color}
                size={size}
              />
        ),
      }} 
    />
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

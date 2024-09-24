import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/components/screens/Home';
import Info from './src/components/screens/Info';
import Students from './src/components/screens/Students';
import Header from './src/components/common/Header';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={'#34368E'} />

        <Tab.Navigator
          initialRouteName={'HOME'}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'HOME') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'STUDENTS') {
                iconName = focused ? 'users' : 'users';
              } else if (route.name === 'INFO') {
                iconName = focused ? 'info-circle' : 'info-circle';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={28} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: '#34368E',
            tabBarInactiveTintColor: 'white',
            tabBarActiveBackgroundColor: 'white',
            tabBarInactiveBackgroundColor: '#34368E',
          })}>
          <Tab.Screen name="STUDENTS" component={Students} />
          <Tab.Screen name="HOME" component={Home} />
          <Tab.Screen name="INFO" component={Info} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

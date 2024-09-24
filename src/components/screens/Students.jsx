import {View, TextInput, FlatList} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import StudentList from '../layouts/students/StudentList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../layouts/students/Details';

const Students = () => {
  const stack = createNativeStackNavigator();
  return (
    <>
      <Header />
      <stack.Navigator
        initialRouteName={'LIST'}
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="LIST" component={StudentList} />
        <stack.Screen name="DETAILS" component={Details} />
      </stack.Navigator>
    </>
  );
};

export default Students;

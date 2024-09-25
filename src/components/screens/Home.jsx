import {View} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import Title from '../common/Title';
import NewsFeed from '../layouts/Home/NewsFeed';
import NewsDetails from '../layouts/Home/NewsDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = () => {
  const stack = createNativeStackNavigator();
  return (
    <>
      <Header />
      <stack.Navigator
        initialRouteName={'FEED'}
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="FEED" component={NewsFeed} />
        <stack.Screen name="FEED_DETAILS" component={NewsDetails} />
      </stack.Navigator>
    </>
  );
};

export default Home;

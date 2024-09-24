import {Text, View} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import Title from '../common/Title';

const Home = () => {
  return (
    <View className="h-screen bg-white">
      <Header />
      <View className="p-[11px]">
        <Title title="Welcome NUBian" />
      </View>
    </View>
  );
};

export default Home;

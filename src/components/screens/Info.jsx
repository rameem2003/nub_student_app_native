import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../common/Header';

const Info = () => {
  return (
    <View className="h-screen bg-white">
      <Header />
      <View className="pt-10 mb-[100px]">
        <ScrollView>
          <Image
            className="mx-auto"
            source={require('../../assets/images.jpeg')}
          />

          <Text className=" font-semibold text-[24px] text-black text-center mt-[54px]">
            ECSE SUMMER 2024
          </Text>
          <Text className=" font-bold text-[24px] text-black text-center mt-[10px]">
            Northern University Bangladesh
          </Text>
          <Text className=" font-semibold text-[20px] text-red-500 text-center mt-[10px]">
            Alpha Version
          </Text>

          <View className="mt-[54px]">
            <Text className=" font-medium text-[20px] text-black text-center mt-[10px]">
              Developer
            </Text>
            <Text className=" font-bold text-[24px] text-black text-center mt-[10px]">
              Mahmood Hassar Rameem
            </Text>
            <Text className=" font-semibold text-[20px] text-black text-center mt-[10px]">
              BSc in CSE (ECSE Program) NUB
            </Text>
            <Text className=" font-semibold text-[20px] text-black text-center mt-[10px]">
              ROL Studio. All Rights Resurved
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Info;

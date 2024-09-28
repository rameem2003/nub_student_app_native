import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../common/Header';

const Info = () => {
  return (
    <View className="h-screen bg-white">
      <Header />
      <View className="pt-2 flex mb-[150px]">
        <ScrollView showsVerticalScrollIndicator={false}>
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

          <View className="mt-[80px]">
            <Text className=" font-medium text-[20px] text-black text-center mt-[10px]">
              Developer
            </Text>
            <Text className=" font-bold text-[24px] text-black text-center mt-[10px]">
              Mahmood Hassar Rameem
            </Text>
            <Text className=" font-semibold text-[20px] text-black text-center mt-[10px]">
              BSc in CSE (ECSE Program) NUB
            </Text>

            <View className="w-[80%] mx-auto">
              <Image
                resizeMode="contain"
                width={'100%'}
                className="mx-auto w-full h-auto"
                source={require('../../assets/rol-studio.png')}
              />
            </View>

            <Text className=" font-semibold text-[20px] text-black text-center mt-[10px]">
              &copy; {new Date().getFullYear()} ROL Studio
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Info;

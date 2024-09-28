import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const FeedCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FEED_DETAILS')}
      className=" rounded-[28px] overflow-hidden w-full h-[244px] relative">
      <Image
        resizeMode="stretch"
        className="w-full h-full"
        source={require('../../assets/thumb.jpg')}
      />

      <View className="py-2 px-[14px] absolute bottom-0 left-0 w-full bg-gray-300">
        <Text className=" font-semibold text-[20px] text-black">
          Northen University Bangladesh
        </Text>
        <Text className=" font-semibold text-base text-black">
          22/09/2024 3.20 pm
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeedCard;

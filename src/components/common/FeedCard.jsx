import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const FeedCard = ({data}) => {
  const {item} = data;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FEED_DETAILS', {item})}
      className=" rounded-[28px] overflow-hidden w-full h-[244px] relative">
      <Image
        resizeMode="stretch"
        className="w-full h-full"
        source={require('../../assets/thumb.jpg')}
      />

      <View className="py-2 px-[14px] absolute bottom-0 left-0 w-full bg-gray-300">
        <Text className=" font-semibold text-[20px] text-black">
          {item.newsTitle}
        </Text>
        <Text className=" font-semibold text-base text-black">{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeedCard;

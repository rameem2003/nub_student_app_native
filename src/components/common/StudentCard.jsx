import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const StudentCard = ({data}) => {
  const navigate = useNavigation();
  const {item} = data;

  return (
    <TouchableOpacity
      onPress={() => navigate.navigate('DETAILS', {item})}
      className=" flex items-center flex-row justify-between  bg-[#34368E] rounded-[20px] p-3">
      <Image
        className="w-[50px] h-[50px] rounded-[5px]"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <View>
        <Text className="font-semibold text-[20px] text-white">
          {item.name}
        </Text>
        <Text className="font-medium text-[18px] text-white">
          ID: {item.id}
        </Text>
      </View>
      <View className=" rounded-full border-[5px] border-white w-[35px] h-[35px] flex items-center justify-center">
        <Text className="text-[18px] font-bold text-white">{item.class}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StudentCard;
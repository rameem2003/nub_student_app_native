import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Title from '../../common/Title';

const NewsDetails = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View className="w-full h-screen bg-white p-[11px]">
      <Title title={item.newsTitle} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full h-[250px] ">
          <Image
            resizeMode="contain"
            className="w-full h-full"
            source={require('../../../assets/thumb.jpg')}
          />
        </View>

        <Text className=" font-semibold text-base text-black">
          {item.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default NewsDetails;

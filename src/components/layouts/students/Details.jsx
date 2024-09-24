import {View, Text} from 'react-native';
import React from 'react';
import Title from '../../common/Title';

const Details = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View className="h-screen bg-white">
      <Text>{item.name}</Text>
      <Title title={item.name} />
    </View>
  );
};

export default Details;

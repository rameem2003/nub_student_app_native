import {View, Text} from 'react-native';
import React from 'react';

const Title = ({title}) => {
  return (
    <View>
      <Text className=" text-[32px] text-black font-bold">{title}</Text>
    </View>
  );
};

export default Title;

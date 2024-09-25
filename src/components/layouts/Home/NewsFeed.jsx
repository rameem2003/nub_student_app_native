import {View, Text, FlatList} from 'react-native';
import React from 'react';
import FeedCard from '../../common/FeedCard';
import Title from '../../common/Title';

const NewsFeed = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View className="w-ful h-screen bg-white p-[11px] pb-[90px]">
      <Title title="Welcome NUBian" />
      <FlatList
        showsVerticalScrollIndicator={false}
        className=" mt-7"
        data={arr}
        renderItem={data => <FeedCard data={data} />}
        // keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View className="h-5" />}
      />
    </View>
  );
};

export default NewsFeed;

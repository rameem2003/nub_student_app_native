import {View, Text, FlatList} from 'react-native';
import React from 'react';
import FeedCard from '../../common/FeedCard';
import Title from '../../common/Title';

const NewsFeed = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View className="w-ful h-screen bg-white px-[11px] flex flex-1 pb-5">
      <Title title="Welcome NUBian" />
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        className=" mt-7 "
        data={arr}
        renderItem={data => <FeedCard data={data} />}
        // keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View className="h-5" />}
      />
    </View>
  );
};

export default NewsFeed;

import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeedCard from '../../common/FeedCard';
import Title from '../../common/Title';
import {onValue, ref} from 'firebase/database';
import {db} from '../../../config/firebase.config';
import AnimatedLoader from 'react-native-animated-loader';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [visible, setVisible] = useState(true);
  const [refresh, setRefreshing] = useState(false);

  const fecthdata = () => {
    const starCountRef = ref(db, 'newsList/');
    onValue(starCountRef, snapshot => {
      let arr = [];
      snapshot.forEach(user => {
        arr.push({...user.val(), key: user.key});
      });
      setNews(arr.sort((a, b) => b.date - a.date));
    });

    setVisible(false);
  };

  useEffect(() => {
    fecthdata();
  }, []);

  const handleRefresh = () => {
    setNews([]);
    setVisible(true);
    setRefreshing(true);
    fecthdata();
    setVisible(false);
    setRefreshing(false);
  };

  return (
    <View className="w-ful h-screen bg-white px-[11px] flex flex-1 pb-5">
      <Title title="Welcome NUBian" />

      {news.length == 0 && (
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../assets/animation.json')} // Your Lottie animation JSON file
          animationStyle={{width: 200, height: 200}}
          speed={1}
        />
      )}

      <FlatList
        refreshing={refresh}
        onRefresh={handleRefresh}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        className=" mt-7 "
        data={news}
        renderItem={data => <FeedCard data={data} />}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => <View className="h-5" />}
      />
    </View>
  );
};

export default NewsFeed;

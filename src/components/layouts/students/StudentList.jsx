import {View, FlatList, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../../common/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudentCard from '../../common/StudentCard';
import axios from 'axios';
import AnimatedLoader from 'react-native-animated-loader';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [visible, setVisible] = useState(true);
  const [refresh, setRefreshing] = useState(false);

  const fetchData = async () => {
    setVisible(true);
    try {
      let res = await axios.get(
        'https://istt-students-api.vercel.app/api/v1/students',
      );

      setStudents(res.data);
      setVisible(false);
    } catch (error) {
      setVisible(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setStudents([]);
    setVisible(true);
    setRefreshing(true);
    fetchData();
    setVisible(false);
    setRefreshing(false);
  };

  return (
    <View className="px-[11px] h-screen bg-white flex flex-1 pb-5">
      <Title title="All Students" />

      <View className=" shadow-xl flex items-center justify-between flex-row mt-[11px] px-5 rounded-full border-[3px] border-[#34368E]">
        <TextInput
          placeholderTextColor={'#34368E'}
          placeholder="Search here by ID...................."
          className=" w-[80%] text-base  placeholder:font-bold text-primary "
        />

        <Icon
          className="absolute top-0 left-0 inline"
          name={'search'}
          size={28}
          color={'#34368E'}
        />
      </View>

      {visible ? (
        <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../assets/animation.json')} // Your Lottie animation JSON file
          animationStyle={{width: 200, height: 200}}
          speed={1}
        />
      ) : (
        <FlatList
          refreshing={refresh}
          onRefresh={handleRefresh}
          showsVerticalScrollIndicator={false}
          className=" mt-7"
          data={students}
          renderItem={data => <StudentCard data={data} />}
          keyExtractor={item => item.diplomaBoardRoll}
          ItemSeparatorComponent={() => <View className="h-5" />}
        />
      )}
    </View>
  );
};

export default StudentList;

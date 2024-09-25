import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  // console.log(item);

  return (
    <View className="h-screen bg-white">
      <View className="w-full h-[250px] bg-primary rounded-b-[50px]">
        <Image
          className="w-[120px] h-[120px] object-cover mx-auto"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Text className="font-semibold text-2xl text-white mt-5 text-center">
          {item.name}
        </Text>
        <Text className="font-semibold text-xl text-white mt-5 text-center">
          Student id: {item.id}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full  p-3 mb-[250px]">
          <View className=" flex items-center justify-between flex-row gap-5 w-full mb-5">
            <View className="w-1/2 border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">
                Programe
              </Text>
              <Text className=" text-base font-medium text-black">
                ECSE Summer 2024
              </Text>
            </View>
            <View className="w-1/2 border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">
                Department
              </Text>
              <Text className=" text-base font-medium text-black">CSE</Text>
            </View>
          </View>

          <View className=" flex items-center justify-between flex-row gap-5 w-full mb-5">
            <View className="w-1/2 border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">
                Section
              </Text>
              <Text className=" text-base font-medium text-black">1B</Text>
            </View>
            <View className="w-1/2 border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">Blood</Text>
              <Text className=" text-base font-medium text-black">
                {item.bloodGroup}
              </Text>
            </View>
          </View>

          <View className=" flex items-center justify-between flex-row gap-5 w-full mb-5">
            <View className="w-1/2 border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">
                Date of Birth
              </Text>
              <Text className=" text-base font-medium text-black">
                04 NOV 2003
              </Text>
            </View>

            <View className="w-1/2 border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">Phone</Text>
              <Text className=" text-base font-medium text-black">
                {item.phone}
              </Text>
            </View>
          </View>

          <View className=" flex items-center justify-between flex-row gap-5 w-full mb-5">
            <View className="w-full border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">Email</Text>
              <Text className=" text-base font-medium text-black">
                {item.email}
              </Text>
            </View>
          </View>

          <View className=" flex items-center justify-between flex-row gap-5 w-full mb-5">
            <View className="w-full border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">
                Father's Name
              </Text>
              <Text className=" text-base font-medium text-black">
                Father's Name
              </Text>
            </View>
          </View>

          <View className=" flex items-center justify-between flex-row gap-5 w-full mb-5">
            <View className="w-full border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">
                Mother's Name
              </Text>
              <Text className=" text-base font-medium text-black">
                Mother's Name
              </Text>
            </View>
          </View>
          <View className=" flex items-center justify-between flex-row gap-5 w-full mb-5">
            <View className="w-full border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">
                Current Address
              </Text>
              <Text className=" text-base font-medium text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                expedita tempora aliquid!
              </Text>
            </View>
          </View>
          <View className=" flex items-center justify-between flex-row gap-5 w-full mb-5">
            <View className="w-full border-b-[2px] border-gray-300 pb-2">
              <Text className=" text-sm font-medium text-gray-500">
                Alternative Phone Number
              </Text>
              <Text className=" text-base font-medium text-black">
                {item.phone}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

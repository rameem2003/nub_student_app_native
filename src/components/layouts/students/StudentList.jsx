import {View, FlatList, TextInput} from 'react-native';
import React from 'react';
import Title from '../../common/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudentCard from '../../common/StudentCard';

const StudentList = () => {
  const students = [
    {
      id: '1234567890',
      name: 'John Doe',
      class: 'A',
      phone: '9876543210',
      email: 'john.doe@example.com',
      bloodGroup: 'O+',
      address: '123 Main St, New York, NY',
    },
    {
      id: '0987654321',
      name: 'Jane Smith',
      class: 'B',
      phone: '9123456789',
      email: 'jane.smith@example.com',
      bloodGroup: 'A+',
      address: '456 Elm St, San Francisco, CA',
    },
    {
      id: '1122334455',
      name: 'Alex Johnson',
      class: 'C',
      phone: '9234567891',
      email: 'alex.johnson@example.com',
      bloodGroup: 'B+',
      address: '789 Pine St, Austin, TX',
    },
    {
      id: '2233445566',
      name: 'Emily Davis',
      class: 'D',
      phone: '9345678902',
      email: 'emily.davis@example.com',
      bloodGroup: 'AB+',
      address: '101 Maple St, Chicago, IL',
    },
    {
      id: '3344556677',
      name: 'Michael Brown',
      class: 'B',
      phone: '9456789013',
      email: 'michael.brown@example.com',
      bloodGroup: 'O-',
      address: '202 Oak St, Miami, FL',
    },
    {
      id: '4455667788',
      name: 'Sophia Wilson',
      class: 'A',
      phone: '9567890124',
      email: 'sophia.wilson@example.com',
      bloodGroup: 'A-',
      address: '303 Cedar St, Dallas, TX',
    },
    {
      id: '5566778899',
      name: 'David Lee',
      class: 'B',
      phone: '9678901235',
      email: 'david.lee@example.com',
      bloodGroup: 'B-',
      address: '404 Birch St, Seattle, WA',
    },
    {
      id: '6677889900',
      name: 'Olivia Martinez',
      class: 'C',
      phone: '9789012346',
      email: 'olivia.martinez@example.com',
      bloodGroup: 'O+',
      address: '505 Willow St, Boston, MA',
    },
    {
      id: '7788990011',
      name: 'William Harris',
      class: 'C',
      phone: '9890123457',
      email: 'william.harris@example.com',
      bloodGroup: 'A+',
      address: '606 Cherry St, Denver, CO',
    },
    {
      id: '8899001122',
      name: 'Isabella Clark',
      class: 'D',
      phone: '9901234568',
      email: 'isabella.clark@example.com',
      bloodGroup: 'B+',
      address: '707 Ash St, Atlanta, GA',
    },
    {
      id: '9900112233',
      name: 'James Lewis',
      class: 'A',
      phone: '9012345679',
      email: 'james.lewis@example.com',
      bloodGroup: 'AB-',
      address: '808 Walnut St, Houston, TX',
    },
    {
      id: '1011223344',
      name: 'Mia Walker',
      class: 'B',
      phone: '9123456781',
      email: 'mia.walker@example.com',
      bloodGroup: 'O-',
      address: '909 Sycamore St, Phoenix, AZ',
    },
    {
      id: '1112334455',
      name: 'Benjamin King',
      class: 'D',
      phone: '9234567892',
      email: 'benjamin.king@example.com',
      bloodGroup: 'A+',
      address: '1010 Redwood St, Portland, OR',
    },
    {
      id: '1223445566',
      name: 'Ava Wright',
      class: 'C',
      phone: '9345678903',
      email: 'ava.wright@example.com',
      bloodGroup: 'B-',
      address: '1111 Fir St, San Diego, CA',
    },
    {
      id: '1334556677',
      name: 'Liam Green',
      class: 'D',
      phone: '9456789014',
      email: 'liam.green@example.com',
      bloodGroup: 'O+',
      address: '1212 Spruce St, Las Vegas, NV',
    },
    {
      id: '1445667788',
      name: 'Charlotte Hall',
      class: 'A',
      phone: '9567890125',
      email: 'charlotte.hall@example.com',
      bloodGroup: 'AB+',
      address: '1313 Cypress St, Nashville, TN',
    },
    {
      id: '1556778899',
      name: 'Ethan Young',
      class: 'B',
      phone: '9678901236',
      email: 'ethan.young@example.com',
      bloodGroup: 'A-',
      address: '1414 Magnolia St, Orlando, FL',
    },
    {
      id: '1667889900',
      name: 'Amelia Allen',
      class: 'A',
      phone: '9789012347',
      email: 'amelia.allen@example.com',
      bloodGroup: 'B+',
      address: '1515 Poplar St, Sacramento, CA',
    },
    {
      id: '1778990011',
      name: 'Lucas Scott',
      class: 'C',
      phone: '9890123458',
      email: 'lucas.scott@example.com',
      bloodGroup: 'O+',
      address: '1616 Palm St, Charlotte, NC',
    },
    {
      id: '1889001122',
      name: 'Harper Adams',
      class: 'D',
      phone: '9901234569',
      email: 'harper.adams@example.com',
      bloodGroup: 'A+',
      address: '1717 Hickory St, Tampa, FL',
    },
  ];

  return (
    <View className="p-[11px] pb-[100px] h-screen bg-white">
      <Title title="All Students" />

      <View className=" shadow-xl flex items-center justify-between flex-row mt-[11px] px-5 rounded-full border-[3px] border-[#34368E]">
        <TextInput
          placeholderTextColor={'#34368E'}
          placeholder="Search here by ID...................."
          className=" w-[80%] text-base  placeholder:font-bold "
        />

        <Icon
          className="absolute top-0 left-0 inline"
          name={'search'}
          size={28}
          color={'#34368E'}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        className=" mt-7"
        data={students}
        renderItem={data => <StudentCard data={data} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View className="h-5" />}
      />
    </View>
  );
};

export default StudentList;

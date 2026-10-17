import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopHeader from '../../components/TopHeader';
import ScreenWrapper from '../../components/ScreenWrapper';

const PrivacyPolicy = () => {
  const [Fetch, setfetch] = useState([]);
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    setfetch(data);
  };
  return (
    <ScreenWrapper>
      <ScrollView
        style={{ backgroundColor: '#F2F5FC' }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <TopHeader screen={'Privacy Policy'} />
          {Fetch.map(It => (
            <Text
              key={It.id}
              style={{
                margin: 20,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#666D80',
              }}
            >
              Title: {It.title}
              {It.body}
            </Text>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default PrivacyPolicy;

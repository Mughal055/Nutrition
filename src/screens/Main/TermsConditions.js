import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopHeader from '../../components/TopHeader';

const TermsConditions = () => {
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
    <View>
      <TopHeader screen={'Terms & Conditions'} />
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
  );
};

export default TermsConditions;

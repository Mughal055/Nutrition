import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Notify = ({ src, text, mints }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        padding: 18,
        borderWidth: 2,
        borderColor: '#e9e1e1',
      }}
    >
      <Image source={src} style={{ height: 55, width: 55, borderRadius: 50 }} />
      {/*  */}
      <View style={{ justifyContent: 'center', margin: 5 }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: '#2C3968',
            textAlign: 'left',
            textTransform: 'capitalize',
          }}
        >
          {text}
        </Text>

        <Text style={{ fontSize: 10, color: '#B1B5C7' }}>{mints}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Notify;

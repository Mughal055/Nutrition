import { View, Text, Image, TouchableOpacity } from 'react-native'; // TouchableOpacity add kiya
import React from 'react';

const Recipie = ({ src, kcal, title, sign, onpress }) => {
  return (
    <TouchableOpacity
      onPress={onpress} // Poore card par click kaam karega
      activeOpacity={0.7}
      style={{
        padding: 13,
        marginVertical: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 8,
        elevation: 3,
        flex: 1,
      }}
    >
      <Image source={src} style={{ height: 61, width: 61, borderRadius: 13 }} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <View style={{ marginHorizontal: 13, justifyContent: 'center' }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              color: '#2C3968',
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 13,
              color: '#2C3968',
              opacity: 0.7,
            }}
          >
            {kcal}
          </Text>
        </View>

        <View
          style={{
            borderColor: '#000',
            borderWidth: 2,
            alignSelf: 'center',
            width: 21,
            height: 21,
            borderRadius: 8,
            justifyContent: 'center',
          }}
        >
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {sign}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Recipie;

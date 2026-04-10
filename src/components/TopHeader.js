import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopHeader = ({ screen }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      }}
    >
      <Ionicons
        name="arrow-back-outline"
        onPress={() => navigation.goBack()}
        size={24}
        color="#000"
        style={{ marginTop: 22 }}
      />
      <Text style={styles.subHeading}>{screen}</Text>
      <View style={{ width: 25 }}></View>
    </View>
  );
};

export default TopHeader;
const styles = StyleSheet.create({
  subHeading: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    marginTop: 22,
  },
});

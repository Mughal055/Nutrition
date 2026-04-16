import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FoodTrack = ({ imageSource, source, titlle, style }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '50%',
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>{titlle}</Text>
        <View style={{ flex: 1, marginBottom: '100%' }}>
          <Image
            source={source}
            style={{ width: 300, height: 300, paddingBottom: 0 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default FoodTrack;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 12,
  },
  image: {
    alignSelf: 'center',
    position: 'absolute',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    fontSize: 21,
  },
});

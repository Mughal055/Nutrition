import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

const Item = ({ showProgress = true }) => {
  const data = [
    {
      icon: 'fast-food',
      color: 'blue',
      value: '0.12g',
      label: 'Fat',
      progress: 0.3,
    },
    {
      icon: 'nutrition',
      color: 'orange',
      value: '12.63g',
      label: 'Carbs',
      progress: 0.6,
    },
    {
      icon: 'fitness',
      color: 'purple',
      value: '0.12g',
      label: 'Protein',
      progress: 0.9,
    },
  ];

  return (
    <View style={styles.row}>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <Icon name={item.icon} size={20} color={item.color} />

          <Text style={styles.value}>{item.value}</Text>

          {showProgress && (
            <Progress.Bar
              progress={item.progress}
              width={60}
              height={3}
              unfilledColor="#D9D9D9"
              color="#691BFB"
              borderColor="transparent"
            />
          )}

          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container: {
    padding: 10,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    elevation: 5,
    width: 100,
  },

  value: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    margin: 3,
    color: '#292D32',
  },

  label: {
    marginTop: 2,
    fontSize: 14,
    color: 'gray',
  },
});

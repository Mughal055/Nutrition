import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Menu = ({ title, kcal, gram, number }) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <View style={styles.item}>
            <View style={[styles.dot, { backgroundColor: '#FFA726' }]} />
            <Text style={styles.text}>{kcal} kcal</Text>
          </View>

          <View style={styles.item}>
            <View style={[styles.dot, { backgroundColor: '#00E676' }]} />
            <Text style={styles.text}>{gram}g</Text>
          </View>

          <View style={styles.item}>
            <View style={[styles.dot, { backgroundColor: '#7C4DFF' }]} />
            <Text style={styles.text}>{number} in number</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.iconBox}>
        <Ionicons name="documents-outline" size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    padding: 10,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
  },

  left: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    color: '#2B2B2B',
    fontFamily: 'Poppins-Medium',
  },

  row: {
    flexDirection: 'row',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },

  text: {
    fontSize: 10,
    color: '#7A7A9D',
    fontFamily: 'Poppins-Regular',
  },

  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#DCD6F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

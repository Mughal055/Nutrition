import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Item from '../../../components/Item';
import Menu from '../../../components/Menu';
import Buttoon from '../../../components/Button';
import { Button } from 'react-native';
const Detail2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#691BFB' }}>
      {/* Back Button */}
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name="arrow-back-outline"
          onPress={() => navigation.goBack()}
          size={24}
          color="#fff"
          style={{ marginTop: 22, marginLeft: 22 }}
        />
        <Text style={[styles.subHeading, { marginTop: 22, marginLeft: 80 }]}>
          Raspberry{' '}
        </Text>
      </View>
      {/* Header */}
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 20,
        }}
      >
        <View>
          <Text style={styles.heading}>Breakfast</Text>
          <Text style={styles.subHeading}>26 March, 2025</Text>
        </View>

        <View>
          <Text style={styles.heading}>224 Kcal</Text>
          <Text style={[styles.subHeading, { alignSelf: 'flex-end' }]}>
            100g
          </Text>
        </View>
      </View>

      {/* Bottom Card */}
      <View style={styles.card}>
        <View style={{ margin: 20 }}>
          <Item showProgress={false} />
        </View>
        {/* Detail */}
        <View style={{ margin: 20 }}>
          <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18 }}>
            Details
          </Text>
          <Text
            style={{
              color: '#969EB1',
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              textTransform: 'capitalize',
            }}
          >
            raspberry almond nicoise salad have very little calories, but lots
            of vitamins, minerals, and phytonutrients to support a healthy body.
            Salmon cake nicoise salad itself contains minimal fat, but these
            greens are often dressed with toppings that offer fat.raspberry
            almond nicoise salad have very little calories.raspberry almond
            nicoise salad have very little calories, but lots of vitamins,
            minerals, and phytonutrients to support a healthy body. Salmon cake
            nicoise salad itself contains minimal fat, but these greens are
            often dressed with toppings that offer fat.raspberry almond nicoise
            salad have very little calories.
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.Btn}>Delete</Text>
          <Text style={[styles.Btn, { backgroundColor: '#691BFB' }]}>
            Add More
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Detail2;
const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },

  subHeading: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    elevation: 4,
  },
  Btn: {
    backgroundColor: '#F0284A',
    margin: 5,
    paddingVertical: 10,
    width: '45%',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    borderRadius: 10,
    textAlign: 'center',
  },
});

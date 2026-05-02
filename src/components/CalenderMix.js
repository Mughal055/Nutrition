import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Recipie from './Recipie';
import { useNavigation } from '@react-navigation/native';
import Utils from './Utils';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item from './Item';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CalenderMix = () => {
  const navigation = useNavigation();

  const [FoodList, setFoodList] = useState([]);
  const Totals = Utils(FoodList);
  useFocusEffect(
    useCallback(() => {
      loadFood();
    }, []),
  );
  //for temporary save
  const loadFood = async () => {
    const storedData = await AsyncStorage.getItem('@my_food');
    if (storedData) setFoodList(JSON.parse(storedData));
  };
  return (
    <View>
      <View
        style={{
          margin: 10,
          borderWidth: 2,
          borderRadius: 8,
          borderColor: '#F9F9F9',
          padding: 10,
        }}
      >
        <Recipie
          src={require('../assets/Img/Breakfast.png')}
          title="Breakfast"
          kcal="540 kcal 100 g"
          sign="remove"
          onpress={() => navigation.navigate('Detail1')}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={c.grey}>Coffe with milk 100 g</Text>
          <Text style={{ color: '#E0E6F3' }}>
            .....................................
          </Text>
          <Text style={c.prple}>56 Kcal</Text>
        </View>
        {/*  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={c.grey}>Sandwich 100 g</Text>
          <Text style={{ color: '#E0E6F3' }}>
            ......................................
          </Text>
          <Text style={c.prple}>250 Kcal</Text>
        </View>
        {/*  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={c.grey}>Walnuts 20 g</Text>
          <Text style={{ color: '#E0E6F3' }}>
            ........................................
          </Text>
          <Text style={c.prple}>100 Kcal</Text>
        </View>
        {/*  */}

        <Item
          showProgress={true}
          fval={Totals.fat}
          cval={Totals.carbs}
          pval={Totals.protein}
        />
      </View>

      {/* 2nd recepie */}
      <View
        style={{
          margin: 10,
          borderWidth: 2,
          borderRadius: 8,
          borderColor: '#F9F9F9',
          padding: 10,
        }}
      >
        <Recipie
          src={require('../assets/Img/Lunch.png')}
          title="Lunch"
          kcal="48 kcal 100 g"
          sign="add"
        />
        {/* 3rd receipe */}
        <Recipie
          src={require('../assets/Img/Dinner.png')}
          title="Dinner"
          kcal="48 kcal 100 g"
          sign="add"
        />
      </View>
    </View>
  );
};

export default CalenderMix;
const c = StyleSheet.create({
  grey: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#B1B5C7',
  },
  prple: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#691BFB',
  },
});

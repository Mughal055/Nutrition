import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from '../../components/Item';
import Recipie from '../../components/Recipie';
import { useNavigation } from '@react-navigation/native';

const Diary = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#F2F5FC' }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      {/* <View style={{ flex: 1, backgroundColor: 'red' }}> */}
      <View style={b.header}>
        <Image
          source={require('../../assets/Img/background.png')}
          resizeMode="center"
        />

        <Text style={b.headerTitle}>My Diary</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Image
            source={require('../../assets/Img/home2.png')}
            resizeMode="center"
          />
        </TouchableOpacity>
      </View>

      {/* Date + Title */}
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <Text style={b.date}>2 May, Monday</Text>

        <Text style={b.title}>Hello Shambhavi,</Text>
        <Text style={b.paragraph}>Find, track and eat heathy food.</Text>
      </View>

      {/* Card */}
      <View style={b.card}>
        <View style={{ flex: 1 }}>
          <Text style={b.cardText}>10 Top-Rated Salmon Recipes Inspired</Text>

          <Text style={b.cardSub}>by the Mediterranean..</Text>

          <TouchableOpacity style={b.btn}>
            <Text style={b.btnText}>Read more</Text>
          </TouchableOpacity>
        </View>

        <Image source={require('../../assets/Img/homeee.png')} style={b.Img} />
      </View>

      {/* dots */}
      <View style={b.dot}>
        <View style={b.dot1}></View>
        <View style={b.dot2}></View>
        <View style={b.dot3}></View>
      </View>
      {/* </View> */}

      {/* Calories Section */}
      <View style={b.calorieContainer}>
        <View style={b.row}>
          <View style={b.side}>
            <Icon name="restaurant" size={30} color={'#691BFB'} />
            <Text style={b.number}>536</Text>
            <Text style={b.label}>eaten</Text>
          </View>

          {/* Circle */}
          <View style={b.circleContainer}>
            <View style={b.circleBackground} />
            <View style={b.purpleArc} />
            <View style={b.orangeArc} />

            <View style={b.centerText}>
              <Text style={b.kcal}>1645</Text>
              <Text style={b.sub}>Kcal available</Text>

              <View style={b.dot}>
                <View style={[b.dot3, { backgroundColor: '#6C2BD9' }]}></View>
                <View style={b.dot2}></View>
              </View>
            </View>
          </View>

          <View style={b.side}>
            <Icon name="flame" size={30} color={'#FFA935'} />
            <Text style={b.number}>690</Text>
            <Text style={b.label}>burn</Text>
          </View>
        </View>

        <Text style={b.goal}>2181</Text>
        <Text style={b.label}>kcal Goal</Text>

        {/* arrows */}
        <View style={b.arrowBtn}>
          <Icon name="chevron-back" size={20} color={'#fff'} />
          <Icon name="chevron-forward" size={20} color={'#fff'} />
        </View>
      </View>
      {/* Item */}
      <View style={{ margin: 20 }}>
        <Item />
      </View>
      {/* Meals Today */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              color: '#292D32',
              fontFamily: 'Poppins-Regular',
              fontSize: 22,
            }}
          >
            Meals Today
          </Text>
          <Text
            style={{
              color: '#691BFB',
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}
          >
            View all
          </Text>
        </View>
        <Recipie
          src={require('../../assets/Img/Breakfast.png')}
          title="Breakfast"
          kcal="540 kcal 100 g"
          sign="—"
          onpress={() => navigation.navigate('Detail1')}
        />
        <Item showProgress={false} />
        {/* 2nd recepie */}
        <Recipie
          src={require('../../assets/Img/Lunch.png')}
          title="Lunch"
          kcal="48 kcal 100 g"
          sign="+"
        />
        {/* 3rd receipe */}
        <Recipie
          src={require('../../assets/Img/Dinner.png')}
          title="Dinner"
          kcal="48 kcal 100 g"
          sign="+"
        />
      </View>
    </ScrollView>
  );
};

export default Diary;

const SIZE = 160;

const b = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 10,
  },
  headerTitle: {
    fontSize: 19,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },

  date: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#B1B5C7',
  },

  title: {
    // marginTop: 15,
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: '#691BFB',
  },

  paragraph: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#7B7B7B',
    // marginVertical: 10,
  },

  card: {
    backgroundColor: 'rgba(189, 252, 250, 0.5)',
    borderRadius: 30,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#292D32',
  },

  cardSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 5,
  },

  btn: {
    backgroundColor: '#292D32',
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 13,
    marginTop: 10,
    width: 110,
  },

  btnText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },

  Img: {
    height: 120,
    width: 120,
    borderRadius: 25,
    marginLeft: 10,
  },

  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },

  dot1: {
    backgroundColor: '#691BFB',
    width: 20,
    height: 9,
    marginHorizontal: 4,
    borderRadius: 5,
  },

  dot2: {
    backgroundColor: '#9780c291',
    width: 8,
    height: 8,
    marginHorizontal: 2,
    borderRadius: 5,
  },

  dot3: {
    backgroundColor: '#9780c291',
    width: 8,
    height: 8,
    marginHorizontal: 2,
    borderRadius: 5,
  },

  calorieContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },

  side: {
    alignItems: 'center',
  },

  number: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },

  label: {
    color: '#9DA8C3',
    fontFamily: 'Poppins-Regular',
  },

  circleContainer: {
    width: SIZE,
    height: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleBackground: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 10,
    borderColor: '#E5E5E5',
  },

  purpleArc: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 10,
    borderColor: '#6C2BD9',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '-40deg' }],
  },

  orangeArc: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 10,
    borderColor: '#FFB22C',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '20deg' }],
  },

  centerText: {
    alignItems: 'center',
  },

  kcal: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: '#6C2BD9',
  },

  sub: {
    fontSize: 12,
    color: '#9DA8C3',
    fontFamily: 'Poppins-Regular',
  },

  goal: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
  },

  arrowBtn: {
    flexDirection: 'row',
    backgroundColor: '#691BFB',
    borderRadius: 50,
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 40,
  },
});

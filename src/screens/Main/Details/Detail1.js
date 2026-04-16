import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Item from '../../../components/Item';
import Menu from '../../../components/Menu';
import Buttoon from '../../../components/Button';
import Detail2 from './Detail2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detail1 = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(1);
  const [Title, setTitle] = useState('');
  const [Kcal, setKcal] = useState('');
  const [Gram, setGram] = useState('');
  const [Num, setNum] = useState('');
  const [FoodList, setFoodList] = useState([]);

  //functions
  //its control done button
  const handleAddFood = async () => {
    if (!Title) return;

    const newFood = {
      id: Date.now(), // we use it for unique numbers , lkn firebase apni id generate kry ga..
      title: Title,
      kcal: Kcal,
      gram: Gram,
      number: Num,
    };
    //for temporary save
    await AsyncStorage.setItem('@my_food', JSON.stringify(FoodList));

    const storedData = await AsyncStorage.getItem('@my_food');
    if (storedData) setFoodList(JSON.parse(storedData));

    setFoodList([...FoodList, newFood]); // ya pahly wali or new food listkocombine kr raha
    setKcal('');
    setGram('');
    setNum('');
    setTitle('');

    setVisible(false);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#691BFB' }}>
      {/* Back Button */}
      <Icon
        name="arrow-back-outline"
        onPress={() => navigation.goBack()}
        size={24}
        color="#fff"
        style={{ marginTop: 22, marginLeft: 22 }}
      />

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
          <Text style={styles.heading}>540 Kcal</Text>
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

        {/* Menu List */}
        <View style={{ margin: 20 }}>
          {FoodList.map(item => (
            <Menu
              key={item.id}
              title={item.title}
              kcal={item.kcal}
              gram={item.gram}
              number={item.number}
            />
          ))}
          {/* <Menu title="Coffee with milk" kcal="219" gram="24" number="1" /> */}
          {/*<Menu title="Sandwich" kcal="300" gram="24" number="1" /> */}
          {/* <Menu title="Raspberry" kcal="224" gram="24" number="1" />
          <Menu title="Cucumber" kcal="126" gram="24" number="1" />
          <Menu title="Tomato" kcal="321" gram="24" number="1" /> */}
        </View>

        {/* Add Food Button */}
        <Buttoon
          title="Add Food"
          icon="add-circle-outline"
          onPress={() => setVisible(true)}
        />
      </View>

      {/* Modal */}
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setVisible(false)}
            >
              <Icon name="close" size={25} color="#000" />
            </TouchableOpacity>

            <Text style={styles.title}>Add Food</Text>

            <TextInput
              placeholder="Name Of Food"
              style={styles.input}
              value={Title}
              onChangeText={value => setTitle(value)}
            />

            {/* <View style={styles.row}> */}
            <View style={{}}>
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={styles.Inn}>Fat:</Text>
                <TextInput
                  placeholder="0"
                  style={styles.dropdown}
                  value={Kcal}
                  onChangeText={value => setKcal(value)}
                />
                <Text>g</Text>
              </View>
              {/*  */}
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={styles.Inn}>Carbs:</Text>
                <TextInput
                  placeholder="0"
                  style={styles.dropdown}
                  value={Gram}
                  onChangeText={value => setGram(value)}
                />
                <Text>g</Text>
              </View>
              {/*  */}
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={styles.Inn}>Protein:</Text>
                <TextInput
                  placeholder="0"
                  style={styles.dropdown}
                  value={Num}
                  onChangeText={value => setNum(value)}
                />
                <Text>g</Text>
              </View>
            </View>

            {/*  */}
            {/* <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => count > 1 && setCount(count - 1)}
              >
                <Text style={styles.btn}>−</Text>
              </TouchableOpacity> */}

            {/* <Text style={styles.number}>{count}</Text> */}

            {/* <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text style={styles.btn}>+</Text>
              </TouchableOpacity>
            </View> */}
            {/* </View> */}

            <TouchableOpacity
              style={styles.done}
              onPress={() => handleAddFood()}
            >
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Detail1;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
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

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },

  close: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 35,
    height: 35,
    borderRadius: 20,
    //backgroundColor: '#6A2CF3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-SemiBold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 3,
    width: '20%',
    marginHorizontal: 10,
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  btn: {
    fontSize: 22,
    paddingHorizontal: 10,
  },

  number: {
    fontSize: 16,
  },

  done: {
    backgroundColor: '#6A2CF3',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  doneText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  Inn: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
});

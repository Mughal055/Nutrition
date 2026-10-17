import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Item from '../../../components/Item';
import Menu from '../../../components/Menu';
import Buttoon from '../../../components/Button';
import Detail2 from './Detail2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Utils from '../../../components/Utils';
import ScreenWrapper from '../../../components/ScreenWrapper';

const Detail1 = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  // INPUT STATES
  const [Title, setTitle] = useState('');
  const [Kcal, setKcal] = useState('');
  const [Gram, setGram] = useState('');
  const [Num, setNum] = useState('');

  // FOOD LIST
  const [FoodList, setFoodList] = useState([]);

  // EDIT STATES
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const Totals = Utils(FoodList);

  useEffect(() => {
    loadFood();
  }, []);

  // LOAD DATA
  const loadFood = async () => {
    const storedData = await AsyncStorage.getItem('@my_food');

    if (storedData) {
      setFoodList(JSON.parse(storedData));
    }
  };

  // ADD + UPDATE FOOD
  const handleAddFood = async () => {
    if (!Title) return;

    let updatedList = [];

    if (isEdit) {
      // UPDATE ITEM
      updatedList = FoodList.map(item =>
        item.id === editId
          ? {
              ...item,
              title: Title,
              kcal: Kcal,
              gram: Gram,
              number: Num,
            }
          : item,
      );
    } else {
      // ADD ITEM
      const newFood = {
        id: Date.now(),
        title: Title,
        kcal: Kcal,
        gram: Gram,
        number: Num,
      };

      updatedList = [...FoodList, newFood];
    }

    setFoodList(updatedList);

    await AsyncStorage.setItem('@my_food', JSON.stringify(updatedList));

    // RESET
    setTitle('');
    setKcal('');
    setGram('');
    setNum('');

    setVisible(false);
    setIsEdit(false);
    setEditId(null);
  };

  // DELETE
  const handleDelete = async id => {
    const updated = FoodList.filter(item => item.id !== id);

    setFoodList(updated);

    await AsyncStorage.setItem('@my_food', JSON.stringify(updated));
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: '100%', backgroundColor: '#fff' }}
    >
      <ScreenWrapper style={{ flex: 1, backgroundColor: '#691BFB' }}>
        {/* BACK BUTTON */}
        <Icon
          name="arrow-back-outline"
          onPress={() => navigation.goBack()}
          size={24}
          color="#fff"
          style={{ marginTop: 22, marginLeft: 22 }}
        />

        {/* HEADER */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            margin: 20,
          }}
        >
          <View>
            <Text
              style={styles.heading}
              onPress={() => navigation.navigate(Detail2)}
            >
              Breakfast
            </Text>

            <Text style={styles.subHeading}>26 March, 2025</Text>
          </View>

          <View>
            <Text style={styles.heading}>540 Kcal</Text>

            <Text style={[styles.subHeading, { alignSelf: 'flex-end' }]}>
              100g
            </Text>
          </View>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          {/* TOTALS */}
          <View style={{ margin: 20 }}>
            <Item
              showProgress={false}
              fval={Totals.fat}
              cval={Totals.carbs}
              pval={Totals.protein}
            />
          </View>

          {/* FOOD LIST */}
          <View style={{ margin: 20 }}>
            {FoodList.map(item => (
              <Menu
                key={item.id}
                title={item.title}
                kcal={item.kcal}
                gram={item.gram}
                number={item.number}
                onDelete={() => handleDelete(item.id)}
                onEdit={() => {
                  setTitle(item.title);
                  setKcal(item.kcal);
                  setGram(item.gram);
                  setNum(item.number);

                  setEditId(item.id);
                  setIsEdit(true);

                  setVisible(true);
                }}
              />
            ))}
          </View>

          {/* ADD FOOD BUTTON */}
          <View style={{ marginHorizontal: 20 }}>
            <Buttoon
              title="Add Food"
              icon="add-circle-outline"
              onPress={() => {
                setVisible(true);

                setIsEdit(false);
                setEditId(null);

                setTitle('');
                setKcal('');
                setGram('');
                setNum('');
              }}
            />
          </View>
        </View>

        {/* MODAL */}
        <Modal visible={visible} transparent animationType="fade">
          <View style={styles.overlay}>
            <View style={styles.box}>
              {/* CLOSE */}
              <TouchableOpacity
                style={styles.close}
                onPress={() => setVisible(false)}
              >
                <Icon name="close" size={25} color="#000" />
              </TouchableOpacity>

              {/* TITLE */}
              <Text style={styles.title}>
                {isEdit ? 'Edit Food' : 'Add Food'}
              </Text>

              {/* FOOD NAME */}
              <TextInput
                placeholder="Name Of Food"
                style={styles.input}
                value={Title}
                onChangeText={setTitle}
              />

              {/* FAT */}
              <View style={styles.rowInput}>
                <Text style={styles.Inn}>Fat:</Text>

                <TextInput
                  placeholder="0"
                  style={styles.dropdown}
                  value={Kcal}
                  onChangeText={setKcal}
                  keyboardType="numeric"
                />
              </View>

              {/* CARBS */}
              <View style={styles.rowInput}>
                <Text style={styles.Inn}>Carbs:</Text>

                <TextInput
                  placeholder="0"
                  style={styles.dropdown}
                  value={Gram}
                  onChangeText={setGram}
                  keyboardType="numeric"
                />
              </View>

              {/* PROTEIN */}
              <View style={styles.rowInput}>
                <Text style={styles.Inn}>Protein:</Text>

                <TextInput
                  placeholder="0"
                  style={styles.dropdown}
                  value={Num}
                  onChangeText={setNum}
                  keyboardType="numeric"
                />
              </View>

              {/* BUTTON */}
              <View style={{ marginHorizontal: 10 }}>
                <TouchableOpacity style={styles.done} onPress={handleAddFood}>
                  <Text style={styles.doneText}>
                    {isEdit ? 'Update' : 'Done'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScreenWrapper>
    </ScrollView>
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

  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    width: '70%',
    marginHorizontal: 10,
  },

  done: {
    backgroundColor: '#6A2CF3',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
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
    width: 60,
  },
});

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import TopHeader from '../../../components/TopHeader';

const SetGoal = () => {
  const [calories, setCalories] = useState(2180);
  return (
    <View>
      <TopHeader />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 30,
            color: '#292D32',
          }}
        >
          Set Goal
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: '#B1B5C7',
            textAlign: 'center',
            justifyContent: 'center',
            textTransform: 'capitalize',
          }}
        >
          set the goal you want to achieve here
        </Text>
      </View>
      {/*  */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 15,
            color: '#292D32',
            marginTop: 30,
          }}
        >
          Duration
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Daily"
        placeholderTextColor={'#505050'}
      />
      {/*  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 30, // agar kaam na kare to margin use kar lena
        }}
      >
        {/* Minus Button */}
        <TouchableOpacity
          onPress={() => setCalories(calories - 10)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: '#E5E5E5',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>

        {/* Kcal Box */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#6C4EFF',
            }}
          >
            {calories} kcal
          </Text>
        </View>

        {/* Plus Button */}
        <TouchableOpacity
          onPress={() => setCalories(calories + 10)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: '#E5E5E5',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#000',
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
      </View>
      {/*  */}
      <View
        style={{
          marginHorizontal: 30,
          marginTop: 80,
        }}
      >
        <TouchableOpacity style={styles.done}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetGoal;
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F7F8F9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d8dd',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#8A8A8A',
    marginHorizontal: 20,
  },
  done: {
    backgroundColor: '#6A2CF3',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },

  doneText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

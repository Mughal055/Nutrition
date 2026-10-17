import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Count = ({ value, onChangeText }) => {
  const [count, setCount] = useState(1);
  return (
    <View
      style={{ flexDirection: 'row', marginBottom: 10, position: 'relative' }}
    >
      <Text
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 5,
          padding: 5,
          width: '90%',
          marginHorizontal: 10,
        }}
        value={value}
        onChangeText={onChangeText}
      >
        {count}
      </Text>
      <View style={{ flexDirection: 'column' }}>
        <TouchableOpacity onPress={() => setCount(count + 5)}>
          <Ionicons name="caret-up" style={{ right: 30 }} size={15} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => count > 1 && setCount(count - 5)}>
          <Ionicons name="caret-down" style={{ right: 30 }} size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Count;

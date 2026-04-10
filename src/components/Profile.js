import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileItem = ({ icon, title, onpress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#F3F4F6',
        borderRadius: 14,
        padding: 10,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 4,
      }}
      onPress={onpress}
    >
      {/* Left Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name={icon} size={22} color="#1E232C" />

        <Text
          style={{
            marginLeft: 12,
            fontSize: 17,
            fontFamily: 'Poppins-Regular',
            color: '#1E232C',
          }}
        >
          {title}
        </Text>
      </View>

      {/* Right Arrow */}
      <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

export default ProfileItem;

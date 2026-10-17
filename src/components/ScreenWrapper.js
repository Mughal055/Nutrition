import React from 'react';
import { View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, style }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={[
          {
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
          style,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

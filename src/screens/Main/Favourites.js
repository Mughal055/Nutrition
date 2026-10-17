import { View, StyleSheet } from 'react-native';
import React from 'react';
import CalenderMix from '../../components/CalenderMix';
import TopHeader from '../../components/TopHeader';
import ScreenWrapper from '../../components/ScreenWrapper';

const Favourites = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <TopHeader screen={'Favourites'} />
      <CalenderMix />
    </ScreenWrapper>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

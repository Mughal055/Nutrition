import { View, Text } from 'react-native';
import React from 'react';
import TopHeader from '../../components/TopHeader';
import Notify from '../../components/Notify';
import ScreenWrapper from '../../components/ScreenWrapper';

const Notification = () => {
  return (
    <ScreenWrapper style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <TopHeader screen={'Notification'} />
      <Notify
        src={require('../../assets/Img/Lunch.png')}
        text="you have gained 20g proteins 80g                                                                                    fats and 22g carbs from today                                                           breakfast"
        mints="1 mins ago"
      />
      {/*  */}
      <Notify
        src={require('../../assets/Img/Dinner.png')}
        text="your total calories of the day                                                                 is 2345 kcal"
        mints="45 mins ago"
      />
      {/*  */}
      <Notify
        src={require('../../assets/Img/img2.png')}
        text="you are missing your goal you have                                                               to consume more calories to reach                                                                  your goal"
        mints="1 hours ago"
      />
      <Notify
        src={require('../../assets/Img/img1.png')}
        text="you have gained 20g proteins 80g                                                                                    fats and 22g carbs from today                                                           breakfast"
        mints="15 mins ago"
      />
      <Notify
        src={require('../../assets/Img/img3.png')}
        text="avocado is good in vitamins and                                                                                minerals for health"
        mints="2 hours ago"
      />
    </ScreenWrapper>
  );
};

export default Notification;

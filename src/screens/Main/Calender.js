import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CalendarProvider, ExpandableCalendar } from 'react-native-calendars';
import TopHeader from '../../components/TopHeader';
import CalenderMix from '../../components/CalenderMix';

const Calender = () => {
  const [selected, setSelected] = useState('2026-03-30');

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#F2F5FC' }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Header */}
        <TopHeader screen={'Calendar'} />

        {/* Calendar */}
        <CalendarProvider date={selected}>
          <ExpandableCalendar
            initialPosition="closed"
            onDayPress={day => setSelected(day.dateString)}
            markedDates={{
              [selected]: {
                selected: true,
                selectedColor: '#6C3EF4',
              },
            }}
            theme={{
              selectedDayBackgroundColor: '#691BFB',
              todayTextColor: '#691BFB',
              arrowColor: '#000',
              todayButtonFontFamily: 'Poppins-Regular',
            }}
            style={styles.calendar}
          />
        </CalendarProvider>

        {/* Selected Date */}
        <Text style={styles.dateText}>Selected Date: {selected}</Text>

        {/* Calories Section */}
        <View style={styles.kcalContainer}>
          <Text style={styles.kcalText}>540 Kcal </Text>
          <Text style={styles.kcalLabel}>total</Text>
        </View>

        {/* List / Component */}
        <View style={styles.mixContainer}>
          <CalenderMix />
        </View>
      </View>
    </ScrollView>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  calendar: {
    marginTop: 10,
  },

  dateText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#555',
    fontFamily: 'Poppins-Regular',
  },

  kcalContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  kcalText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#691BFB',
  },

  kcalLabel: {
    // marginLeft: 5,
    fontSize: 8,
    color: '#363942',
    paddingBottom: 10,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-end',
  },

  mixContainer: {
    flex: 1,
  },
});

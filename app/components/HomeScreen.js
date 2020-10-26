import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Scenes from './Scenes';
import Rooms from './Rooms';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Scenes />
      <Rooms />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;

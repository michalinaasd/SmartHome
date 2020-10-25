import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Header';
import Scenes from './Scenes';
import Rooms from './Rooms';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Scenes />
      <Rooms />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d6',
  },
});

export default HomeScreen;

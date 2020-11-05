import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Scenes from './Scenes';
import Rooms from './Rooms';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Scenes />
      <Rooms navigation={navigation} />
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

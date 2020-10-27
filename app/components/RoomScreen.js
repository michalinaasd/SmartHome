import React from 'react';
import {StyleSheet, View} from 'react-native';
import RoomControlPanel from './RoomControlPanel';
import RoomScreenHeader from './RoomScreenHeader';

const RoomScreen = () => {
  return (
    <View style={styles.container}>
      <RoomScreenHeader />
      <RoomControlPanel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RoomScreen;

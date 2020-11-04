import React from 'react';
import {StyleSheet, View} from 'react-native';
import RoomScreenControlPanel from './RoomScreenControlPanel';
import RoomScreenHeader from './RoomScreenHeader';

const RoomScreen = () => {
  return (
    <View style={styles.container}>
      <RoomScreenHeader name="kitchen" />
      <RoomScreenControlPanel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RoomScreen;

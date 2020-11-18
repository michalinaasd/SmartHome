import React from 'react';
import {StyleSheet, View} from 'react-native';
import RoomScreenControlPanel from './RoomScreenControlPanel';
import RoomScreenHeader from './RoomScreenHeader';

const RoomScreen = ({name}) => {
  return (
    <View style={styles.container}>
      <RoomScreenHeader name={name} />
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

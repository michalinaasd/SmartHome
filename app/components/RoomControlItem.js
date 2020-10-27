import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const RoomControlItem = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcon name="home" color="white" size={50} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 90,
    height: 150,
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    marginHorizontal: 5,
    textAlign: 'center',
  },
});

export default RoomControlItem;

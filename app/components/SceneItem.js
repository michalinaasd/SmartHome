import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SceneItem = ({icon, name}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} color="white" size={60} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: '#a4c0a1',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginRight: 5,
    elevation: 10,
  },
  name: {
    fontSize: 20,
  },
});

export default SceneItem;

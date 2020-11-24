import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SceneItem = ({icon, name, onPress, selected}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, selected && styles.selected]}>
        <MaterialCommunityIcons name={icon} color="white" size={45} />
        {name && <Text style={styles.name}>{name}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: '#009387',
    borderRadius: 20,
    justifyContent: 'center',
    margin: 5,
    alignItems: 'center',
    elevation: 5,
  },
  name: {
    fontSize: 15,
    color: 'white',
  },
  selected: {
    borderWidth: 10,
    borderColor: 'white',
  },
});

export default SceneItem;

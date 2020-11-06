import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SceneItem = ({icon, name}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log(name + ' Pressed');
      }}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={icon}
          color="white"
          size={name ? 45 : 100}
        />
        {name && <Text style={styles.name}>{name}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 100,
    backgroundColor: '#009387',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginRight: 5,
    elevation: 5,
  },
  name: {
    fontSize: 15,
    color: 'white',
  },
});

export default SceneItem;

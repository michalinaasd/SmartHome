import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const AppButton = ({onPress, title}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default AppButton;

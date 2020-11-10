import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from '../AppButton';
import CreateSceneDevicesList from './CreateSceneDevicesList';
import SectionTitle from '../SectionTitle';

const CreateSceneDevices = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Select devices" />
      <CreateSceneDevicesList />
      <AppButton
        title="Done"
        onPress={() => {
          console.log('Scene Created');
          navigation.navigate('home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
});

export default CreateSceneDevices;

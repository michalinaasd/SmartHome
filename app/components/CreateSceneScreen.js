import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import SectionTitle from './SectionTitle';
import SceneItem from './SceneItem';
import {scenesIcons} from './constants';
import AppButton from './AppButton';

const CreateSceneScreen = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Select Icon" />
      <View style={styles.icons}>
        {scenesIcons.map((value) => {
          return <SceneItem key={value} icon={value} />;
        })}
      </View>
      <AppButton
        onPress={() => {
          console.log('button pressed');
        }}
        title="Select Icon"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});

export default CreateSceneScreen;

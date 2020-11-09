import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import SectionTitle from './SectionTitle';
import SceneItem from './SceneItem';
import {scenesIcons} from './constants';
import AppButton from './AppButton';

const CreateSceneIcon = ({navigation}) => {
  const [selectedIcon, setSelectedIcon] = useState('');
  return (
    <View style={styles.container}>
      <SectionTitle title="Select Icon" />
      <View style={styles.icons}>
        {scenesIcons.map((value) => {
          return (
            <SceneItem
              key={value}
              icon={value}
              selected={value === selectedIcon}
              onPress={() => {
                setSelectedIcon(value);
              }}
            />
          );
        })}
      </View>
      <AppButton
        onPress={() => {
          selectedIcon &&
            navigation.navigate('create-scene-name', {
              selectedIcon: selectedIcon,
            });
        }}
        title="Next"
        disabled={!selectedIcon}
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
    paddingBottom: 20,
  },
});

export default CreateSceneIcon;

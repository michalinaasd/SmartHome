import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AppButton from '../AppButton';
import SceneItem from '../SceneItem';
import SectionTitle from '../SectionTitle';

const CreateSceneName = ({route, navigation}) => {
  const {selectedIcon} = route.params;
  const [inputValue, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <SectionTitle title="Create name" />
      <View style={{flex: 1, alignItems: 'center'}}>
        <SceneItem icon={selectedIcon} />
        <TextInput
          style={{
            height: 40,
            width: '90%',
            borderBottomWidth: 1,
          }}
          placeholder="Name"
          value={inputValue}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <AppButton
        title="Next"
        onPress={() => {
          navigation.navigate('create-scene-devices');
        }}
        disabled={!inputValue}
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

export default CreateSceneName;

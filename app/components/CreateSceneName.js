import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AppButton from './AppButton';
import SceneItem from './SceneItem';
import SectionTitle from './SectionTitle';

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
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          value={inputValue}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <AppButton
        title="Next"
        onPress={() => {
          console.log(inputValue);
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
    paddingVertical: 50,
  },
});

export default CreateSceneName;

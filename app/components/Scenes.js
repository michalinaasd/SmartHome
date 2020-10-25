import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SceneItem from './SceneItem';

const Scenes = () => {
  //caly komponent powinien dać się swipować horyzontalnie, wyświetlać 3 itemy jednocześnie
  //ostatnim itemem będzie komponent do dodawania nowych scenes
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scenes</Text>
      <View style={styles.scenes}>
        <SceneItem icon="baguette" name="morning" />
        <SceneItem icon="bat" name="night" />
        <SceneItem icon="bike" name="outside" />
        <SceneItem icon="bike" name="outside" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '23%',
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  scenes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 5,
  },
});

export default Scenes;

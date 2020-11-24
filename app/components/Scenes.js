import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SceneItem from './SceneItem';

const Scenes = ({navigation}) => {
  //caly komponent powinien dać się swipować horyzontalnie, wyświetlać 3 itemy jednocześnie
  //ostatnim itemem będzie komponent do dodawania nowych scenes
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scenes</Text>
      <ScrollView
        style={styles.scenes}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <SceneItem icon="baguette" name="morning" />
        <SceneItem icon="bat" name="night" />
        <SceneItem icon="bike" name="outside" />
        <SceneItem
          icon="plus"
          name="add"
          onPress={() => navigation.navigate('create-scene')}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  scenes: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 5,
  },
});

export default Scenes;

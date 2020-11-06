import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SectionTitle from './SectionTitle';
import SceneItem from './SceneItem';

const CreateSceneScreen = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Select Icon" />
      <View style={styles.icons}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" color="white" size={100} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="home" size={100} />
        </View>
        <SceneItem icon="home" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
  },
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  icon: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    margin: 10,
    elevation: 5,
  },
});

export default CreateSceneScreen;

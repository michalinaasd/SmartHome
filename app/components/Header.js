import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
          }}
        >
          Welcome home
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
          }}
        >
          John!
        </Text>
        <Text style={{fontSize: 18}}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={styles.logo}>
        <MaterialCommunityIcons name="home" color="white" size={80} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#009387',
    borderRadius: 50,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;

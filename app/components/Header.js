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
        <MaterialCommunityIcons name="home" color="white" size={100} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '23%',
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
    backgroundColor: '#a4c0a1',
    borderRadius: 50,
    elevation: 10,
  },
});

export default Header;

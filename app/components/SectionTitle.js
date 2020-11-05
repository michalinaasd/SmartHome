import React from 'react';
import {Text, StyleSheet} from 'react-native';

const SectionTitle = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 5,
  },
});

export default SectionTitle;

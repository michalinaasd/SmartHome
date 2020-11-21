import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RoomItem from './RoomItem';
import {rooms} from './constants';
import {useQuery, gql} from '@apollo/client';

const GET_ROOMS = gql`
  query GET_ROOMS {
    building(id: 1) {
      id
    }
  }
`;
const Rooms = ({navigation}) => {
  const {loading, data, error} = useQuery(GET_ROOMS);

  if (loading) {
    console.log('loading');
  }
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rooms</Text>
      <View style={styles.rooms}>
        {rooms.map((name) => (
          <RoomItem
            key={name}
            name={name}
            onPress={() => navigation.navigate({name})}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '65%',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  rooms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 5,
  },
});

export default Rooms;

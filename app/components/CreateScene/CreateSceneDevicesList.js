import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';
import CreateSceneDeviceListItem from './CreateSceneDeviceListItem';
import SectionTitle from '../SectionTitle';
import {rooms} from '../constants';

const CreateSceneDevicesList = () => {
  return (
    <ScrollView style={{marginVertical: 10}}>
      {rooms.map((value) => (
        <Fragment key={value}>
          <SectionTitle
            title={value.charAt(0).toUpperCase() + value.slice(1)}
          />
          <CreateSceneDeviceListItem />
          <CreateSceneDeviceListItem />
        </Fragment>
      ))}
    </ScrollView>
  );
};

export default CreateSceneDevicesList;

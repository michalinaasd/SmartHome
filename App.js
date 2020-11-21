import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomMenu from './app/components/BottomMenu';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const Drawer = createDrawerNavigator();

const client = new ApolloClient({
  uri: 'localhost:8000/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={BottomMenu} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

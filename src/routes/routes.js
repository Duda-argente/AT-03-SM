import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import { Home } from './../pages/Home';

const Drawer = createDrawerNavigator();

export function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen name="Home" component={ Home }/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
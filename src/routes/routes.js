import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import { Home } from './../pages/Home';
import { Calculo } from '../pages/Calculo';

const Drawer = createDrawerNavigator();

export function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen name="Home" component={ Home }/>
          <Drawer.Screen name="Calculo" component={ Calculo }/>
  
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
import 'react-native-gesture-handler';
//import { createStackNavigator } from 'react-navigation-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import React from 'react';
//import Example from './DirectionExample';
//import PocZoom from './pocImage/PocZoom';
import Home from './home/Home';
import FileReaderPoc from './fileReaderPoc/FileReaderPoc';
import ImageViewer from './fileReaderPoc/ImageViewer';
import PocMap from './PocMap/PocMap';
import PocZoom from './PocZoom/PocZoom';

const Stack = createStackNavigator();

export default class EntryPoint extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#233F6D" barStyle="light-content" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="FileReaderPoc" component={FileReaderPoc} />
          <Stack.Screen name="ImageViewer" component={ImageViewer} />
          <Stack.Screen name="Photo Viewer Zoom : POC" component={PocZoom} />
          <Stack.Screen
            name="PocMap"
            component={PocMap}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

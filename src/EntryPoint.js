import 'react-native-gesture-handler';
//import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native'
import React from 'react';
//import Example from './DirectionExample';
//import PocZoom from './pocImage/PocZoom';
import Home from './home/Home';
import FileReaderPoc from './fileReaderPoc/FileReaderPoc';
import ImageViewer from './fileReaderPoc/ImageViewer';

const Stack = createStackNavigator();

export default class EntryPoint extends React.Component {


    render(){
        return (
            
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="FileReaderPoc" component={FileReaderPoc} />
                        <Stack.Screen name="ImageViewer" component={ImageViewer} />
                        
            
                    </Stack.Navigator>
                </NavigationContainer>
          
            
        )
        
    }
}



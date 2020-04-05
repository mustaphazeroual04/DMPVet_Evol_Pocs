import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
const screenWidth = Dimensions.get('screen').width;
let width = (screenWidth * 75) / 100;
let height = (screenWidth * 18) / 100;
export default class Home extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#233F6D',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.props.navigation.navigate('Photo Viewer Zoom : POC');
          }}>
          {/* <Text style={{color: '#233F6D', fontSize: 20}}>
            Images Viewer Zoom Poc
          </Text> */}
          <Animatable.Text
            style={{color: '#233F6D', fontSize: 20}}
            animation="slideInRight">
            Images Viewer Zoom Poc
          </Animatable.Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.props.navigation.navigate('FileReaderPoc');
          }}>
          {/* <Text style={{color: '#233F6D', fontSize: 20}}>Files Reader Poc</Text> */}
          <Animatable.Text
            style={{color: '#233F6D', fontSize: 20}}
            animation="slideInLeft">
            Files Reader Poc
          </Animatable.Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.props.navigation.navigate('PocMap');
          }}>
          {/* <Text style={{color: '#233F6D', fontSize: 20}}>
            Map/Directions Poc
          </Text> */}
          <Animatable.Text
            style={{color: '#233F6D', fontSize: 20}}
            animation="slideInRight">
            Map/Directions Poc
          </Animatable.Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width,
    height,
    backgroundColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

import React, { Component } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    flex:1,
    //width:"100",
    resizeMode: 'contain'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"rgba(255, 255, 255, 0.8)"
  }
});

export default class ImageViewer extends Component {

  constructor(){
    super();
    this.state={
      loading:true
    }
  }

  render() {
      
    let imageUrl = this.props.route.params.urlImage;
    return (
      <View style={{backgroundColor:"darkcyan", flex:1}} >
        <Image
          style={styles.stretch}
          source={{ uri: imageUrl}}
          onLoadEnd={()=> {
            this.setState({loading:false});
          } }
        />
        {this.state.loading &&
                        <View style={styles.loading}>
                            <ActivityIndicator size='large' />
                        </View>
                }
      </View>
    );
  }
}

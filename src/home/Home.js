import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';

const screenWidth = Dimensions.get("screen").width;

export default class Home extends React.Component {

    render(){
        let width = screenWidth*75/100;
        let height = screenWidth*18/100;
        return (
            <View style={{flex:1, backgroundColor:"orange", justifyContent:"center", alignItems:"center", alignContent:"space-between"}} >
                <TouchableOpacity 
                    style={{width, height, backgroundColor:"darkcyan", marginBottom:20, alignItems:"center", justifyContent:"center"}}
                    onPress={ () => {
                        this.props.navigation.navigate("PocZoom");
                    } }
                >
                    <Text style={{ color:"white", fontSize:20,  }} >
                        PocZoom demo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{width, height, backgroundColor:"darkcyan", alignItems:"center", justifyContent:"center"}}
                    onPress={ () => {
                        this.props.navigation.navigate("FileReaderPoc");
                    } }
                >
                    <Text style={{ color:"white", fontSize:20,  }} >
                    FileReader Poc Demo
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


}
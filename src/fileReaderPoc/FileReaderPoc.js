import React from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet, ActivityIndicator } from 'react-native';
import { extractFileNameAndExtention } from './utils';

//var SendIntentAndroid = require("react-native-send-intent");
var RNFS = require('react-native-fs');
//const FileOpener = require('react-native-file-opener');
//import DocumentPicker from 'react-native-document-picker';
import FilePickerManager from 'react-native-file-picker';
import FileViewer from 'react-native-file-viewer';

let typeMimeOf = {
    "doc":"application/msword",
    "docx":"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "xls":"application/vnd.ms-excel",
    "jpeg":"image/jpeg",
    "jpg":"image/jpeg",
    "png":"image/png",
    "pdf":"application/pdf",
    "ppt":"application/vnd.ms-powerpoint",
    "pptx":"application/vnd.openxmlformats-officedocument.presentationml.presentation",
    

}

export default class FileReaderPoc extends React.Component {


    constructor(props){
        super(props);
        this.state={
            loading:false,
        }
        /*FileOpener.open(
            "/storage/emulated/0/Download/Fiche_Technique_PERSIAN_ADULT_Juin_2013.pdf",
            "application/pdf"
            ).then((msg) => {
                console.log('success!!',msg);
            },(err) => {
                console.log('error!!',err);
                alert("aucune application correspondant n'est trouvé");
        });*/
 
        /*FilePickerManager.showFilePicker(null, (response) => {
            console.log('Response = ', response);

          
           
                FileOpener.open(
                    response.path,
                    response.type
                    ).then((msg) => {
                        console.log('success!!',msg);
                    },(err) => {
                        console.log('error!!',err);
                        alert("aucune application correspondant n'est trouvé");
                    });
         
        });*/
    }

     openFile(url){
        const {fileName, fileExtention} = extractFileNameAndExtention(url);
        const localFile = `${RNFS.ExternalDirectoryPath}/${fileName}.${fileExtention}`;
        const options = {
            fromUrl: url,
            toFile: localFile
          };

          
          
         /* SendIntentAndroid.openFileChooser(
            {
              subject: "File subject", //optional,
              fileUrl: url,
              type: typeMimeOf[fileExtention],
            },
            ""
            );*/
            if(typeMimeOf[fileExtention].startsWith("image")){
                this.props.navigation.navigate("ImageViewer",{
                    urlImage:url
                });
            }else{
                this.setState({loading:true});
                RNFS.downloadFile(options).promise
                .then((resp) => {
                  console.log("RNFS load  file : ",resp);
                  console.log(" localFile : ",localFile);
                  this.setState({loading:false});
                  /*FileOpener.open(
                    localFile,
                    typeMimeOf[fileExtention]
                    ).then((msg) => {
                        console.log('success!!',msg)
                    },(err) => {
                        console.log('error!!',err);
                        alert("aucune application correspondant n'est trouvé");
                    });*/
                    let fVoptions = {
                        showAppsSuggestions : true,
                        showOpenWithDialog: true
                      }

                    FileViewer.open(localFile, fVoptions)
              .then(() => {
                console.log("file opened succussfully ");
                // success
              })
              .catch(_err => {
                console.log("file error opening : ",_err);
                // error
              });
        
                  /*SendIntentAndroid.openFileChooser(
                    {
                      //subject: "File subject", //optional,
                      fileUrl: localFile,
                      type: typeMimeOf[fileExtention],
                    },
                    ""
                    );*/
                  //FileViewer.open(localFile)
                })
                .then(() => {
                  // success
                })
                .catch(error => {
                  // error
                });
            }
       

    }

    render(){
        return (
            <View style={{flex:1, backgroundColor:"darkcyan", justifyContent:"space-evenly", }} >
                 
                 <TouchableOpacity
                            onPress={ async () => {
                                
                                if(Platform.OS == "ios"){
                                    this.props.navigation.navigate("docViewer",{
                                        urlLink:"http://www.africau.edu/images/default/sample.pdf"
                                    })
                                }else{
                                    FilePickerManager.showFilePicker(null, (response) => {
                                        console.log('Response = ', response);

                                      
                                        if (response.didCancel) {
                                          console.log('User cancelled file picker');
                                        }
                                        else if (response.error) {
                                          console.log('FilePickerManager Error: ', response.error);
                                        }
                                        else {
                                            /*FileOpener.open(
                                                response.path,
                                                response.type
                                                ).then((msg) => {
                                                    console.log('success!!',msg)
                                                },(err) => {
                                                    console.log('error!!',err);
                                                    alert("aucune application correspondant n'est trouvé");
                                                });*/
                                                let fVoptions = {
                                                    showAppsSuggestions : true,
                                                    showOpenWithDialog: true
                                                  }
                            
                                                FileViewer.open(response.path, fVoptions)
                                          .then(() => {
                                            console.log("file opened succussfully ");
                                            // success
                                          })
                                          .catch(_err => {
                                            console.log("file error opening : ",_err);
                                            // error
                                          });
                                        }
                                      });


                                     
                                   // this.openFile("http://www.africau.edu/images/default/sample.pdf");
                                }
                                
                                /**/
                            } }
                            style={{
                                height:40,
                                alignItems:"center",
                                justifyContent:"center",
                                backgroundColor:"#778899"
                            }}
                >
                    <Text>
                        Local file Picker
                    </Text>
                </TouchableOpacity>
               

                 
                <TouchableOpacity
                            onPress={ () => {
                                if(Platform.OS == "ios"){
                                    this.props.navigation.navigate("docViewer",{
                                        urlLink:"http://www.africau.edu/images/default/sample.pdf"
                                    })
                                }else{
                                    this.openFile("http://www.africau.edu/images/default/sample.pdf");
                                }
                                
                                /**/
                            } }
                            style={{
                                height:40,
                                alignItems:"center",
                                justifyContent:"center",
                                backgroundColor:"#c91d25"
                            }}
                >
                    <Text>
                        Remote Pdf 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                            onPress={ () => {
                                if(Platform.OS == "ios"){
                                    this.props.navigation.navigate("docViewer",{
                                        urlLink:"https://www.kafeo.com/factures/Modele-facture-Kafeo.doc"
                                    })
                                }else{
                                    this.openFile("https://www.kafeo.com/factures/Modele-facture-Kafeo.doc"); 
                                }
                                
                                /**/
                            } }
                            style={{
                                height:40,
                                alignItems:"center",
                                justifyContent:"center",
                                backgroundColor:"#2a5599"
                            }}
                >
                    <Text>
                        Remote Doc 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                            onPress={ () => {
                                if(Platform.OS == "ios"){
                                    this.props.navigation.navigate("docViewer",{
                                        urlLink:"https://www.kafeo.com/factures/Modele-facture-excel.xls"
                                    })
                                }else{
                                    this.openFile("https://www.kafeo.com/factures/Modele-facture-excel.xls"); 
                                }
                                
                                /**/
                            } }
                            style={{
                                height:40,
                                alignItems:"center",
                                justifyContent:"center",
                                backgroundColor:"#63c24c"
                            }}
                >
                    <Text>
                        Remote Excel 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                            onPress={ () => {
                                if(Platform.OS == "ios"){
                                    this.props.navigation.navigate("docViewer",{
                                        urlLink:"https://cdn.pixabay.com/photo/2019/09/03/04/35/macaw-4448598_1280.jpg"
                                    })
                                }else{
                                    this.openFile("https://cdn.pixabay.com/photo/2019/09/03/04/35/macaw-4448598_1280.jpg"); 
                                }
                                
                                /**/
                            } }
                            style={{
                                height:40,
                                alignItems:"center",
                                justifyContent:"center",
                                backgroundColor:"#FFCC00"
                            }}
                >
                    <Text>
                        Remote Image
                    </Text>
                </TouchableOpacity>

                {this.state.loading &&
                        <View style={styles.loading}>
                            <ActivityIndicator size='large' />
                        </View>
                }

            </View>
        )
    }


}

const styles = StyleSheet.create({
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
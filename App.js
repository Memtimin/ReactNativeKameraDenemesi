import React, {PureComponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RNCamera} from 'react-native-camera';
export default class App extends PureComponent {  constructor(props) {
  super(props);}
render() {
  return (
    <>
    <View style={styles.sectionTitle}>
    <Text>Kamera Denemesi</Text>
    </View>
    <RNCamera
      ref={ref => {
        this.camera = ref;
      } }
      captureAudio={false}
      style={{ flex: 1 }}
      type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }} /></>
    );
  }}

//export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 32,
    fontSize: 7,
    fontWeight: '400',
    flex:0,
    alignItems:"center",
    top:"50px",
    Height:'30%',
    fontStyle:'italic'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


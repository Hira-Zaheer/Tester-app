import { StyleSheet, Text, View, Image , ImageBackground } from 'react-native'
import React from 'react'
const img = require('./assets/adaptive-icon.png')

const App = () => {
  return (
    <View style={styles.container}>
    {/* <Image style={{width:300,height:300}} source={require('./assets/adaptive-icon.png')}/>
    <Image source={{uri: 'https://picsum.photos/200'}} style={{width:300,height:300}}/> */}
    <ImageBackground source={img} style={{flex:1}}>
   <Text>Whira</Text>
    </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'plum',
    padding:20,
  }
})
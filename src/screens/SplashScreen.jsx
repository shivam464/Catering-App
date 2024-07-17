import React,{useEffect} from 'react'
import { StyleSheet,Button,ImageBackground ,Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'


const SplashScreen = ({navigation}) => {
    useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Login')
    }, 3000);
    }, [])
    
  return (
    <View style={styles.splashScreen} >
        <FastImage
                style={{ width: 300, height: 300}}
                source={require('../assets/images/logo.png')}
                 cacheControl={FastImage.cacheControl.cacheOnly}
                resizeMode={FastImage.resizeMode.contain}
            />
      {/* <Button title='shivam' onPress={()=>navigation.navigate('Home')}>juu</Button> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    splashScreen:{
        flex: 1,
        backgroundColor: '#70B9BE',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
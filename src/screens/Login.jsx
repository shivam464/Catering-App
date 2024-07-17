import { StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
    return (
        <View style={styles.login}>
            <ImageBackground source={require('../assets/images/login.png')} style={styles.image}>
                <View style={styles.login_create}>
                    <Text style={styles.text}>Help you path to health goals with happiness</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('Home')}>
                        <View style={styles.loginButton} >
                            <Text style={styles.logintext}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={[styles.logintext, { marginTop: 20 }]}>
                            Create New Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: 'SofiaSans-Bold',
    },
    login_create: {
        position: "absolute",
        bottom: '12%',
        alignSelf: "center",
        marginHorizontal: 20
    },
    loginButton: {
        backgroundColor: "#042628",
        color: "white",
        padding: 15,
        borderRadius: 15,
        width: '100%',
        marginTop: 20
    },
    logintext: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",

    }

})
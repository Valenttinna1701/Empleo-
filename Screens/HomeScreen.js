import { Text, View, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {

    const navigation = useNavigation(); 

    return (
      <View>
        <Text style={styles.titleHomeScreen}>
            Senaa
        </Text>
        <TouchableOpacity
        style={styles.touchableStyle}
        onPress={() => navigation.navigate('Stack')}
        >
            <Text style={styles.textButtonStack}>Go to stack screen</Text>
        </TouchableOpacity>

        <Button title='Holaa' color="purple" onPress={() => navigation.navigate('Stack')}/>
      </View>
    )
}
//Donde puse PTI va ingresar
const styles = StyleSheet.create({
    titleHomeScreen: {
        fontSize: 40,
        textAlign:'center',
        marginTop: "20%", 
    },

    touchableStyle: {
        backgroundColor: 'purple',
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignSelf:"center",
        borderRadius: 10,

    }, 

    textButtonStack:{
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    }
})

export default HomeScreen
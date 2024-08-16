import React from "react";
import { Image } from "react-native-web";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AntDesing from '@expo/vector-icons/AntDesign';

//SCREEN 
import HomeScreen from './Screens/HomeScreen'; 
import SettingScreen from './Screens/SettingScreen'; 
import StackScreen from './Screens/StackScreen';

const HomeStackNavigator = createNativeStackNavigator(); 

function MyStack(){
    return(
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <Image source={require('./img/Logo.jpg')} />
            <HomeStackNavigator.Screen  name="SENA" component={HomeScreen}/>  
            <HomeStackNavigator.Screen name="Stack" component={StackScreen}/>
        </HomeStackNavigator.Navigator>
    )
}
//donde puse pti va HomeScreen
const Tab = createBottomTabNavigator(); 

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            tabBarActiveTinitColor: "red"
        }}>
            <Tab.Screen name="home" component={MyStack}
                options={{tabBarLabel: "home",
                    tabBarIcon:({color, size}) => (
                        <AntDesing name="home" size={24}
                        color={'Black'}/>
                    ),
                    tabBarBadge: 3, 
                    headerShown: false
                }}
            />
            <Tab.Screen name="Settings" component={SettingScreen}
            options={{
                tabBarLabel:"Settings",
                tabBarIcon:({color,size}) => (
                    <AntDesing name="setting" size={24}
                    color={'Black'}/>
                ),
                tabBarBadge: 3, 
                headerShown: false
            }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
import React from "react";
import {TouchableOpacity,Image, } from "react-native";
import {styles} from './styles';

const GoogleIcon = () => {
        return (
                <TouchableOpacity activeOpacity={0.6}  style={styles.container}>
                        <Image style={styles.image} source={require('../../assets/google.png')} />
                </TouchableOpacity>
        )
}
export default GoogleIcon;

// onPress={onPress}
import React from "react";
import { Text, Image, View, Pressable, } from 'react-native';
import { styles } from './styles';
import Button from "../../../components/Button";


const Splash = () => {
        return (
                <View style={styles.container}>
                        <Image resizeMode='contain' style={styles.image} source={require('../../../assets/nature!.webp')} />
                        <View style={styles.titleContainer}>
                                <Text style={styles.title}>The Beautiful</Text>
                                <Text style={[styles.title, styles.Innertitle]}>Nature</Text>
                                <Text style={styles.title}>is Here</Text>
                        </View>
                        <Button title="Sign Up" />
                        <Pressable hitSlop={20}>
                                <Text style={styles.footerText}>Sign In</Text>
                        </Pressable>
                </View>
        )
}

export default Splash;
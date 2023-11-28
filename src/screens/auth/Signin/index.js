import React, { useState } from "react";
import { ScrollView, Text, } from 'react-native';
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleIcon from "../../../components/GoogleIcon";


const Signin = () => {
        const OnSignUp = () => {
        }
        return (
                <ScrollView style={styles.container}>
                        <AuthHeader title="Sign In" />
                        <Input lable="E-Mail" placeholder="example@gmail.com" />
                        <Input isPassword lable="Password" placeholder="*********" />
                        <Button style={styles.button} title="Sign In" />
                        <Seperator text="Or Sign in with" />
                        <GoogleIcon />
                        <Text style={styles.footer}>
                                Don't have an account?
                                <Text onPress={OnSignUp} style={styles.link}> Sign Up</Text>
                        </Text>
                </ScrollView>


        )
};

export default Signin;
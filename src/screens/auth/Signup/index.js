import React, { useState } from "react";
import { ScrollView,Text, Image, View, placeholder } from 'react-native';
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleIcon from "../../../components/GoogleIcon";


const Signup = () => {
        const [checked, setChecked] = useState(false);
        
        const OnSignIn =()=>{
        }
        return (
                <ScrollView style={styles.container}>
                        <AuthHeader title="Sign Up" />
                        <Input lable="Name" placeholder="Name" />
                        <Input lable="E-Mail" placeholder="example@gmail.com" />
                        <Input isPassword lable="Password" placeholder="*********" />
                        <View style={styles.agreeRow}>
                                <Checkbox checked={checked} onCheck={setChecked} />
                                <Text style={styles.agreeText}>I agree with <Text style={styles.bold}>Terms</Text> & <Text style={styles.bold}>Privacy</Text> </Text>
                        </View>
                        <Button style={styles.button} title="Sign Up" />
                        <Seperator text="Or Sign up with" />
                        <GoogleIcon />
                        <Text style={styles.footer}>
                                Already have an account? 
                                <Text onPress={OnSignIn} style={styles.link}> Sign In</Text>
                        </Text>
                </ScrollView>


        )
};

export default Signup;
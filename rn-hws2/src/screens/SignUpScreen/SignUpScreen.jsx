import React from 'react';
import styles from './styles';
import {Pressable, Text, TextInput, View} from "react-native";
import BasicLayout from "../../common/BasicLayout/BasicLayout";

const SignUpScreen = ({navigation}) => {

    console.log('Navigation: ', navigation.getState());

    return (
        <BasicLayout>
            <View style={styles.container}>

                <Text style={styles.title}>Welcome Onboard</Text>
                <Text style={styles.text}>Let's help you meet up your tasks.</Text>
                <View>
                    <TextInput style={styles.input} placeholder='Enter your full name' />
                    <TextInput style={styles.input} placeholder='Enter your email id' />
                    <TextInput style={styles.input} placeholder='Enter Password' />
                    <TextInput style={styles.input} placeholder='Enter confirm Password' />

                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={()=>navigation.navigate('SignIn')}
                               style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                    <View style={styles.signInBtnContainer}>
                        <Text>Already have an account ? </Text>
                        <Pressable onPress={()=>navigation.navigate('SignIn')}>
                            <Text style={styles.signInBtnText}>Sign In</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </BasicLayout>
    );
};

export default SignUpScreen;
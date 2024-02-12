import React, {useState} from 'react';
import styles from './styles';
import {Pressable, Text, TextInput, View, KeyboardAvoidingView, Platform, Linking, Alert} from "react-native";
import BasicLayout from "../../common/BasicLayout/BasicLayout";
import AuthLayout from "../../common/AuthLayout/AuthLayout";

const LoginScreen = ({navigation}) => {

    console.log('Navigation: ', navigation.getState());

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const inputEmailHandler = (text) => {
        setEmail(text);
    };

    const inputPasswordHandler = (text) => {
        setPassword(text);
    };


    return (
        <AuthLayout
            footerSignInShown={true}
            footerForgotPasswordShown={true}
            navigation={navigation}
            footerButtonText={'SignIn'}
            navigateTo={'GetStarted'}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Welcome Onboard</Text>
                    <Text style={styles.text}>Let's help you meet up your tasks.</Text>
                </View>
                <View style={styles.inputsContainer}>

                    <TextInput
                        style={styles.input}
                        value={email}
                        keyboardType='email-address'
                        caretHidden={false}
                        onChangeText={inputEmailHandler}
                        placeholder='Enter your email id'/>
                    <TextInput
                        style={styles.input}
                        value={password}
                        keyboardType='visible-password'
                        onChangeText={inputPasswordHandler}
                        placeholder='Enter Password'/>

                </View>

            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

export default LoginScreen;
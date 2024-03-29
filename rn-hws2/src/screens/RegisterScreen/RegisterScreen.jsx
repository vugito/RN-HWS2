import React, {useState} from 'react';
import styles from './styles';
import {Pressable, Text, TextInput, View, KeyboardAvoidingView, Platform, Linking, Alert} from "react-native";
import BasicLayout from "../../common/BasicLayout/BasicLayout";
import AuthLayout from "../../common/AuthLayout/AuthLayout";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {

    const navigation = useNavigation();

    console.log('Navigation: ', navigation.getState());

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const inputNameHandler = (text) => {
        setName(text);
    };

    const inputEmailHandler = (text) => {
        setEmail(text);
    };

    const inputPasswordHandler = (text) => {
        setPassword(text);
    };

    const inputConfirmPasswordHandler = (text) => {
        setConfirmPassword(text);
    };



    return (
        <AuthLayout
            footerButtonText={'Register'}
            footerButtonNavigation={'SignIn'}
            footerBottomBarShown={true}
            footerBottomBarText={'Already have an account? '}
            footerBottomBarButton={'Sign In.'}
            footerBottomBarNavigation={'SignIn'}>

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
                        value={name}
                        onChangeText={inputNameHandler}
                        placeholder='Enter your full name'/>
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
                    <TextInput
                        style={styles.input}
                        value={confirmPassword}
                        keyboardType="visible-password"
                        onChangeText={inputConfirmPasswordHandler}
                        placeholder='Enter confirm Password'/>
                </View>
            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

export default RegisterScreen;
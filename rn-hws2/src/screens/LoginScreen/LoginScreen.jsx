import React, {useState} from 'react';
import styles from './styles';
import {Pressable, Text, TextInput, View, KeyboardAvoidingView, Platform, Linking, Alert} from "react-native";
import BasicLayout from "../../common/BasicLayout/BasicLayout";
import AuthLayout from "../../common/AuthLayout/AuthLayout";
import {Image} from "expo-image";



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
        <AuthLayout footerButtonText={'Login'}
                    footerButtonNavigation={'GetStarted'}
                    footerBottomBarShown={true}
                    footerBottomBarText={"Don't have an account? "}
                    footerBottomBarButton={'Sign up'}
                    footerBottomBarNavigation={'SignUp'}
                    footerForgotPasswordShown={true}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <Text style={styles.title}>Welcome back!</Text>

                <Image style={styles.bgImage} source={require('../../../assets/images/loginImg.png')}></Image>
                {/*<View style={styles.titleContainer}>*/}
                {/*    <Text style={styles.title}>Welcome Onboard</Text>*/}
                {/*    <Text style={styles.text}>Let's help you meet up your tasks.</Text>*/}
                {/*</View>*/}
                <View style={styles.inputsContainer}>

                    <TextInput
                        style={styles.input}
                        value={email}
                        keyboardType='email-address'
                        caretHidden={false}
                        onChangeText={inputEmailHandler}
                        placeholder='Enter your email'/>
                    <TextInput
                        style={styles.input}
                        value={password}
                        keyboardType='visible-password'
                        onChangeText={inputPasswordHandler}
                        placeholder='Enter your password'/>

                </View>

            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

export default LoginScreen;
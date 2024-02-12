import React from 'react';
import styles from './styles';
import {Pressable, View, Text, Linking} from "react-native";
import {useNavigation} from "@react-navigation/native";

const AuthFooter = ({forgotPasswordShown, signInShown, buttonText, navigateTo}) => {

    const navigation = useNavigation();

    const handleNavigateToSignIn = () => navigation.navigate('SignIn');
    const handleNavigateToSignUp = () => navigation.navigate('SignUp');

    const handleForgotPassword = () => {
        const email = 'vuqar21@gmail.com';

        Linking.openURL(`mailto:${email}`).then(r => console.log(r));
    }

    return (
        <View style={styles.container}>

            {forgotPasswordShown &&
                <Pressable onPress={handleForgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forget Password</Text>
                </Pressable>}

            <Pressable onPress={navigation} style={forgotPasswordShown ? styles.button : [styles.button, styles.mt30]}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>

            {signInShown &&
                <View style={styles.signInBtnContainer}>
                    <Text>Already have an account?</Text>
                    <Pressable onPress={navigation.navigate('SignUp')}>
                        <Text style={styles.signInBtnText}>Sign In</Text>
                    </Pressable>
                </View>}

        </View>
    );
};

export default AuthFooter;
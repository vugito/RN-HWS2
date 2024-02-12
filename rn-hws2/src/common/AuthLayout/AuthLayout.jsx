import React from 'react';
import styles from './styles';
import {View} from "react-native";
import AuthFooter from "../../components/sections/footers/AuthFooter/AuthFooter";


const AuthLayout = ({children, footerForgotPasswordShown, footerSignInShown, footerButtonText, navigateTo}) => {



    return (
        <View style={styles.container}>
            <View style={styles.squareContainer}>
                <View style={styles.squareFirst}></View>
                <View style={styles.squareSecond}></View>
            </View>

            {/*{header}*/}
            {children}
            <AuthFooter navigateTo={navigateTo}
                forgotPasswordShown={footerForgotPasswordShown}
                buttonText={footerButtonText}
                signInShown={footerSignInShown} />
        </View>
    );
};

export default AuthLayout;
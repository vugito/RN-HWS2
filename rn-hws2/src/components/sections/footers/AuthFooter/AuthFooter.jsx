import React from 'react';
import styles from './styles';
import {Pressable, View, Text, Linking} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PressableText from "./components/PressableText/PressableText";

const AuthFooter = ({
                        forgotPasswordShown,
                        buttonText,
                        buttonNavigation,
                        bottomBarShown,
                        bottomBarNavigation,
                        bottomBarText,
                        bottomBarButton}) => {

    const navigation = useNavigation();

    const handleNavigate = () => navigation.navigate(buttonNavigation);

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

            <Pressable onPress={handleNavigate} style={forgotPasswordShown ? styles.button : [styles.button, styles.mt30]}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>

            {bottomBarShown && <PressableText
                text={bottomBarText}
                buttonText={bottomBarButton}
                navigateTo={bottomBarNavigation}/>}

        </View>
    );
};

export default AuthFooter;
import React from 'react';
import styles from './styles';
import {Pressable, View, Text} from "react-native";

const AuthHeader = ({forgotPasswordShown, signInShown, buttonText, navigation}) => {



    return (
        <View style={styles.container}>

            {forgotPasswordShown &&
                <View>
                <Pressable>
                    <Text style={{
                        color: '#0E6565',
                        fontSize: 16,
                        marginBottom: 10
                    }}>Forget Password</Text>
                </Pressable>
            </View>}

            <Pressable onPress={
                ()=>navigation.navigate('SignUp')
            } style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>

            {signInShown &&
                <View style={styles.signInBtnContainer}>
                <Text>Already have an account? </Text>
                <Pressable
                    onPress={() => {
                        console.log('Navigate to Sign In')
                    }}>
                    <Text style={styles.signInBtnText}>Sign In</Text>
                </Pressable>
            </View>}

        </View>
    );
};

export default AuthHeader;
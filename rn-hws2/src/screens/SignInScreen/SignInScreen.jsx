import React from 'react';
import styles from './styles';
import BasicLayout from "../../common/BasicLayout/BasicLayout";
import {View, Text, Linking, KeyboardAvoidingView, Platform, TextInput, Pressable, Alert} from "react-native";

const SignInScreen = ({navigation}) => {

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

    const handleForgotPassword = () => {
        const email = 'vuqar21@gmail.com';

        Linking.openURL(`mailto:${email}`).then(r => console.log(r));
    }

    return (
        <BasicLayout>
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
                <View style={styles.buttonsContainer}>
                    <Pressable
                        onPress={() => {
                            Alert.alert(
                                "Your entered information:", `Name: ${name}${'\n'}Email: ${email}${'\n'}Password: ${password}${'\n'}Confirm Password: ${confirmPassword}`,
                                [{text: 'Close'}]
                            );
                            console.log('Register. Navigate to Sign In')
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                    <View style={styles.signInBtnContainer}>
                        <Text>Already have an account? </Text>
                        <Pressable
                            onPress={() => {
                                console.log('Navigate to Sign In')
                            }}>
                            <Text style={styles.signInBtnText}>Sign In</Text>
                        </Pressable>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </BasicLayout>
    );
};

export default SignInScreen;
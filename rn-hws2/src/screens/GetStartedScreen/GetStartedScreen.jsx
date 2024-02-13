import React from 'react';
import styles from './styles';
import {View, Text} from "react-native";
import {Image} from "expo-image";
import AuthLayout from "../../common/AuthLayout/AuthLayout";

const GetStartedScreen = () => {

    return (
        <AuthLayout footerButtonText={'Get Started'} footerButtonNavigation={'SignUp'}>
            <View style={styles.container}>
                <Image style={styles.bgImage} source={require('../../../assets/images/getStartedImg.png')}></Image>
                <Text style={styles.title}>Gets things done with to do</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
            </View>
        </AuthLayout>
    );
};

export default GetStartedScreen;
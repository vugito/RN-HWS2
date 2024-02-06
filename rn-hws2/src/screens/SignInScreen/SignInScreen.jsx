import React from 'react';
import styles from './styles';
import BasicLayout from "../../common/BasicLayout/BasicLayout";
import {View, Text} from "react-native";

const SignInScreen = ({navigation}) => {

    console.log('Navigation: ', navigation);

    return (
        <BasicLayout>
            <View>
                <Text>SignIn Screen</Text>
            </View>
        </BasicLayout>
    );
};

export default SignInScreen;
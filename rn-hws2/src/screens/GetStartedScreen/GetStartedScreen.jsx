import React from 'react';
import styles from './styles';
import {View, Text, Pressable} from "react-native";
import {Image} from "expo-image";
import BasicLayout from "../../common/BasicLayout/BasicLayout";

const GetStartedScreen = ({navigation}) => {

    console.log('Navigation: ', navigation.getState());

    return (
        <BasicLayout>
            <View style={styles.container}>
                <Image style={styles.bgImage} source={require('../../../assets/images/img.png')}></Image>
                <Text style={styles.title}>Gets things done with to do</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
                <Pressable onPress={
                    ()=>navigation.navigate('SignUp')
                } style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </Pressable>
            </View>
        </BasicLayout>

    );
};

export default GetStartedScreen;
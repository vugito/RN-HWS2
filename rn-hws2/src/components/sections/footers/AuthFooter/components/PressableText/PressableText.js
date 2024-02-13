import React from 'react';
import {Pressable, Text, View} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

const PressableText = ({text, buttonText, navigateTo}) => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate(navigateTo);
    }

    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.text}>{text}</Text>
            <Pressable onPress={handleNavigate}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
        </View>
    );
};

export default PressableText;
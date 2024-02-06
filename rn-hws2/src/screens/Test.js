import React from 'react';
import {View,Text} from "react-native";

const Test = ({navigation}) => {

    console.log('Navigation: ', navigation.getState());
    const navigateTo = (link) => navigation.navigate(link);

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Salam</Text>
        </View>
    );
};

export default Test;
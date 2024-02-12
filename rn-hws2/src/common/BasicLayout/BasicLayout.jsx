import React from 'react';
import styles from './styles';
import {View} from "react-native";


const BasicLayout = ({children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.squareContainer}>
                <View style={styles.squareFirst}></View>
                <View style={styles.squareSecond}></View>
            </View>
            {/*{header}*/}
            {children}
            {/*{footer}*/}
        </View>
    );
};

export default BasicLayout;
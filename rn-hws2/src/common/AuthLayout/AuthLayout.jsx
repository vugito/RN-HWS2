import React from 'react';
import styles from './styles';
import {View} from "react-native";
import AuthFooter from "../../components/sections/footers/AuthFooter/AuthFooter";


const AuthLayout = ({
                        children,
                        footerButtonText,
                        footerButtonNavigation,
                        footerForgotPasswordShown,
                        footerBottomBarShown,
                        footerBottomBarNavigation,
                        footerBottomBarButton,
                        footerBottomBarText
                        }) => {
    return (
        <View style={styles.container}>
            <View style={styles.squareContainer}>
                <View style={styles.squareFirst}></View>
                <View style={styles.squareSecond}></View>
            </View>

            {/*{header}*/}
            {children}

            <AuthFooter
                buttonText={footerButtonText}
                buttonNavigation={footerButtonNavigation}
                forgotPasswordShown={footerForgotPasswordShown}
                bottomBarShown={footerBottomBarShown}
                bottomBarNavigation={footerBottomBarNavigation}
                bottomBarButton={footerBottomBarButton}
                bottomBarText={footerBottomBarText}/>
        </View>
    );
};

export default AuthLayout;
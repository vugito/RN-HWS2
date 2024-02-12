import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigation from "./src/navigation";
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <BottomTabNavigation/>
                {/* <RootNavigation/> */}
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

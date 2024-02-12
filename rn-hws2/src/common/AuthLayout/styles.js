import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d4e8ea'
    },
    squareContainer: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: -100,
        left: -77,
    },
    squareFirst: {
        width: 200,
        height: 200,
        position: 'absolute',
        left: 76,
        borderRadius: 100,
        backgroundColor: '#8AE2E7',
        opacity: 0.5
    },
    squareSecond: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 84,
        borderRadius: 100,
        backgroundColor: '#8AE2E7',
        opacity: 0.36
    }
});

export default styles;
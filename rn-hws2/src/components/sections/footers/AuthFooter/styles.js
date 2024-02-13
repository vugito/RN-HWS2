import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        // justifyContent: 'flex-start',

        // backgroundColor: 'red'
    },
    forgotPasswordText: {
        color: '#0E6565',
        fontSize: 16,
        marginBottom: 10
    },
    signInBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    signInBtnText: {
        color: '#30A6AE',
        fontWeight: '600'
    },
    button: {
        width: (width * 0.75),
        backgroundColor: '#30A6AE',
        padding: 12,
        alignItems: "center",
    },
    mt30: {
        marginTop: 30
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        lineHeight: 30,
    },
});

export default styles;
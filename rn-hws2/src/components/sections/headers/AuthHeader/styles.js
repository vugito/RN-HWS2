import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',

        // backgroundColor: 'red'
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
    buttonText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        lineHeight: 30,
    },
});

export default styles;
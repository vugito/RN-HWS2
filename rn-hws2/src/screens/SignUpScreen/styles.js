import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: height*0.3
    },
    header: {

    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
    text: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
    buttonsContainer: {

    },
    signInBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 35
    },
    button: {
        width: (width*0.75),
        backgroundColor: '#30A6AE',
        padding: 12,
        marginTop: 30,
        marginBottom: 10,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        lineHeight: 30,
    },
    input: {
        width: (width*0.8),
        height: 50,
        margin: 12,
        // borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#f4f4f4",
        // borderColor: "#DDDDDD",
        borderRadius: 50,
        fontSize: 14,
        fontWeight: '600'
    },
    signInBtnText: {
        color: '#30A6AE',
        fontWeight: '600'
    }
});

export default styles;
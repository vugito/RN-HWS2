import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 50,
    },
    titleContainer: {
        flex: 1,
        // backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // padding: 10,
        // marginTop: 20,
        // flexWrap: 'wrap',
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 30
    },
    inputsContainer: {
        // backgroundColor: 'red',
        // flex: 1,
        flexDirection: 'column',
        gap:10,
        marginVertical: 10,
        paddingVertical: 10,

    },
    input: {
        width: (width * 0.8),
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#f4f4f4",
        borderRadius: 50,
        fontSize: 14,
        fontWeight: '600'
    },
    buttonsContainer: {
        // backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',

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
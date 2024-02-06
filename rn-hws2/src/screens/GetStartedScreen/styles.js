import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bgImage: {
        width: 300,
        height: 300,
        marginTop: 200
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    text: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '700',
        textAlign: 'center',
        margin: 30
    },
    button: {
        width: (width*0.75),
        backgroundColor: '#30A6AE',
        padding: 12,
        marginBottom: 60,
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
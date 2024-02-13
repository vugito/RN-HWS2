import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 50,
        // backgroundColor: 'green'
    },
    bgImage: {
        width: 300,
        height: 300,

        // marginTop: 200,
        // backgroundColor: 'yellow'
    },
    // titleContainer: {
    //     flex: 1,
    //     // backgroundColor: 'teal',
    //     alignItems: 'center',
    //     justifyContent: 'flex-end',
    //     // padding: 10,
    //     // marginTop: 20,
    //     // flexWrap: 'wrap',
    //     gap: 10,
    // },
    title: {
        fontSize: 24,
        fontWeight: '800',
        // backgroundColor: 'red'
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

});

export default styles;
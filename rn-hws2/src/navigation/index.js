import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GetStartedScreen from "../screens/GetStartedScreen/GetStartedScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import Test from "../screens/Test";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'GetStarted'}
                component={GetStartedScreen}/>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'SignUp'} component={RegisterScreen}/>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'SignIn'} component={LoginScreen}/>
            <Stack.Screen name={'Test'} component={Test}/>
        </Stack.Navigator>
    )
}

export default RootNavigation;
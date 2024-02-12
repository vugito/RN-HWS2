import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import GetStartedScreen from '../../screens/GetStartedScreen/GetStartedScreen';

const Tab = createBottomTabNavigator();


const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="GetStarted" component={GetStartedScreen} />
            <Tab.Screen name="SignIn" component={SignInScreen} />
            <Tab.Screen name="SignUp" component={SignUpScreen} />           
        
        </Tab.Navigator>
    )
}


export default BottomTabNavigation;
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/Vallet/screens/SplashScreen";
import MainScreen from "./src/Vallet/screens/MainScreen";
import LandingPage from "./src/Vallet/screens/LandingPage";
import ValetSignIn from "./src/Vallet/screens/ValetSignIn";
import Incident from "./src/Vallet/screens/Incident";
import ReportSuccessfull from "./src/Vallet/screens/ReportSuccessfull";
import TermsConditions from "./src/Vallet/screens/TermsConditions";
import PrivacyPolicy from "./src/Vallet/screens/PrivacyPolicy";
import AboutUs from "./src/Vallet/screens/AboutUs";
import WriteUs from "./src/Vallet/screens/WriteUs";
import NotificationSent from "./src/Vallet/screens/NotificationSent";
import TabNavigation from "./src/constants/TabNavigation";
import Notification from "./src/Vallet/screens/Notification";
import Setting from "./src/Vallet/screens/Setting";
import SendNotification from "./src/Vallet/screens/SendNotification";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ValetSignIn"
          component={ValetSignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Incident"
          component={Incident}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReportSuccessfull"
          component={ReportSuccessfull}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationSent"
          component={NotificationSent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendNotification"
          component={SendNotification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WriteUs"
          component={WriteUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

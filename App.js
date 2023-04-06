import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import PrivatRoute from "./routes/PrivatRoute";
import { ThemeProvider, useTheme } from "./state/auth";
const Stack = createNativeStackNavigator();

export default function App() {
  const qwe = () => {
    console.log("first");
  };

  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{ headerShown: false }}
                screenOptions={{
                  qwe: qwe,
                }}
                initialParams={{ id: 42 }}
              />
              <Stack.Screen
                name="Home"
                component={HomePage}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

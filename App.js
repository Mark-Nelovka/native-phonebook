import LoginPage from "./Pages/LoginPage/LoginPage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <LoginPage />
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

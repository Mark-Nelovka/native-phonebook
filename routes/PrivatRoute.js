import { useTheme } from "../state/auth";

export default function PrivatRoute({ children, navigation }) {
  const { state } = useTheme();
  return <>{state.token ? children : navigation.navigate("HomePage")}</>;
}

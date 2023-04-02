import * as s from "./Home.styled";
import { Dimensions, Text } from "react-native";

export default function HomePage() {
  const { height } = Dimensions.get("window");

  return (
    <s.ViewContainer height={height}>
      <Text>Home page</Text>
    </s.ViewContainer>
  );
}

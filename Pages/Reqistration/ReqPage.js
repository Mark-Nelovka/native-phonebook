import * as s from "./Req.styled";
import { Dimensions, Text } from "react-native";

export default function ReqistrationPage() {
  const { height } = Dimensions.get("window");

  return (
    <s.ViewContainer height={height}>
      <Text>Reqistration for name</Text>
    </s.ViewContainer>
  );
}

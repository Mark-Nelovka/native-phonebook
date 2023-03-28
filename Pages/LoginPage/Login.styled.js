import styled from "styled-components/native";

export const ViewContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => props.height + "px"};
`;

export const Form = styled.View`
  width: ${(props) => props.width / 2 + "px"};
`;

export const InputForm = styled.TextInput`
  padding: 20px 20px 5px 5px;
  font-size: 20px;
  color: #000;
  border-bottom-color: green;
  border-bottom-width: 1px;
  width: 100%;
`;

export const LoginButton = styled.TouchableOpacity`
  border-radius: 50%;
  border-color: #000;
  border-width: 1px;
  margin-top: 50px;
  padding: 10px;
`;

export const TextButton = styled.Text`
  font-size: 28px;
  text-align: center;
  letter-spacing: 1.1px;
  font-weight: 600;
  color: green;
`;

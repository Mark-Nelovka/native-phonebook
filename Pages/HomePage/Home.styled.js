import styled from "styled-components/native";

export const ViewContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => props.height + "px"};
`;

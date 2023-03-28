import React, { useEffect, useState } from "react";
import { ToastProvider } from "react-native-toast-notifications";
// import { useToast } from "react-native-toast-notifications";
import Toast from "react-native-root-toast";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import {
  KeyboardAvoidingView,
  Platform,
  //   TouchableWithoutFeedback,
  //   Keyboard,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as s from "./Login.styled";

export default function LoginPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const [loading, setloading] = useState(false);

  const emailHandler = (value) => {
    setEmailInput(value);
  };
  const passwordHandler = (value) => setPasswordInput(value);

  const onLogin = (e) => {
    if (!emailInput || !passwordInput) {
      Toast.show("All field is required", {
        duration: Toast.durations.SHORT,
        position: 50,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      return;
    }
    setloading(true);
    setEmailInput("");
    setPasswordInput("");
  };

  const handlePress = () => {};

  const insets = useSafeAreaInsets();
  const { width, height } = Dimensions.get("window");
  return (
    <s.ViewContainer width={width} height={height}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <s.Form width={width}>
          <s.InputForm
            placeholder="Email"
            value={emailInput}
            onChangeText={emailHandler}
            keyboardType="email-address"
          />
          <s.InputForm
            placeholder="Password"
            value={passwordInput}
            onChangeText={passwordHandler}
            secureTextEntry={true}
          />
          <s.LoginButton onPress={onLogin}>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {!loading && <s.TextButton>Login</s.TextButton>}
          </s.LoginButton>
        </s.Form>
      </KeyboardAvoidingView>
    </s.ViewContainer>
  );
}

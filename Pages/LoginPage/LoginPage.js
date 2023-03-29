import React, { useEffect, useState } from "react";
import Toast from "react-native-root-toast";
import * as yup from "yup";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ActivityIndicator,
  TextInput,
  Button,
  Text,
} from "react-native";
import * as s from "./Login.styled";
import { Formik } from "formik";

const loginValidationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()

    .min(5, ({ min }) => `Password must be at least ${min} characters`),
});

export default function LoginPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const [loading, setloading] = useState(false);

  const emailHandler = (value) => {
    setEmailInput(value);
  };
  const passwordHandler = (value) => setPasswordInput(value);

  const onLogin = (dataForm) => {
    if (!dataForm.email || !dataForm.password) {
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
    setTimeout(() => {
      setloading(false);
      Keyboard.dismiss();
    }, 2000);
    setEmailInput("");
    setPasswordInput("");
  };

  const { width, height } = Dimensions.get("window");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <s.ViewContainer width={width} height={height}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <s.FormContainer width={width}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => onLogin(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <s.InputForm
                    name="email"
                    placeholder="Email Address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                  <s.InputForm
                    name="password"
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                  <s.LoginButton>
                    <Button
                      title="LOGIN"
                      onPress={handleSubmit}
                      disabled={!isValid}
                    />
                  </s.LoginButton>
                </>
              )}
            </Formik>
          </s.FormContainer>
          {/* <s.Form width={width}>
            <s.InputForm
              placeholder="Email"
              value={emailInput}
              onChangeText={emailHandler}
              keyboardType="email-address"
              maxLength={50}
              autoFocus={true}
            />
            <s.InputForm
              placeholder="Password"
              value={passwordInput}
              onChangeText={passwordHandler}
              secureTextEntry={true}
              maxLength={10}
              minLength={5}
              blurOnSubmit={false}
              textContentType="newPassword"
            />
            <s.LoginButton onPress={onLogin}>
              {loading && <ActivityIndicator size="large" color="#0000ff" />}
              {!loading && <s.TextButton>Login</s.TextButton>}
            </s.LoginButton>
            <s.LoginButton onPress={onLogin}>
              {loading && <ActivityIndicator size="large" color="#0000ff" />}
              {!loading && <s.TextButton>Reqistration</s.TextButton>}
            </s.LoginButton>
          </s.Form> */}
        </KeyboardAvoidingView>
      </s.ViewContainer>
    </TouchableWithoutFeedback>
  );
}

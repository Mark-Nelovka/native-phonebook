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
import { Login, Reqistration } from "../../API/auth";
import { useTheme } from "../../state/auth";

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(5, ({ min }) => `Password must be at least ${min} characters`),
});

export default function LoginPage({ route, screenOptions }) {
  const [loading, setloading] = useState(false);
  const { dispatch } = useTheme();

  useEffect(() => {
    console.log(route);
  }, []);

  const handleSubmit = async (dataForm) => {
    setloading(true);
    switch (dataForm.buttonId) {
      case "Login":
        try {
          const signInResult = await Login(dataForm);
          // console.log("signInResult: ", signInResult);
        } catch (error) {
          Toast.show(`${error.message}`, {
            duration: Toast.durations.SHORT,
            position: 50,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
        }
        break;
      case "Reqistration":
        try {
          const signUpResult = await Reqistration(dataForm);
          // console.log("signUpResult: ", signUpResult);
        } catch (error) {
          Toast.show(`${error.message}`, {
            duration: Toast.durations.SHORT,
            position: 50,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
        }
        break;

      default:
        break;
    }

    setloading(false);
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
              initialValues={{ email: "", password: "", buttonId: "" }}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({
                handleChange,
                handleBlur,
                setFieldValue,
                handleSubmit,
                values,
                errors,
              }) => (
                <>
                  <s.InputForm
                    name="email"
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    textContentType="emailAddress"
                    value={values.email}
                    autoCapitalize="none"
                    autoFocus={true}
                    // onEndEditing={checkValidEmail}
                  />
                  {errors && <TextInput>{errors.email}</TextInput>}
                  <s.InputForm
                    name="password"
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                    // onEndEditing={checkValidPassword}
                  />
                  {errors && <TextInput>{errors.password}</TextInput>}
                  <s.ButtonContainer>
                    <s.LoginButton>
                      {loading && (
                        <ActivityIndicator size="large" color="green" />
                      )}
                      {!loading && (
                        <Button
                          title="LOGIN"
                          onPress={() => {
                            setFieldValue("buttonId", "Login");
                            handleSubmit();
                          }}
                        />
                      )}
                    </s.LoginButton>
                    <s.ReqButton>
                      {loading && (
                        <ActivityIndicator size="large" color="green" />
                      )}
                      {!loading && (
                        <Button
                          title="REQISTRATION"
                          onPress={() => {
                            setFieldValue("buttonId", "Reqistration");
                            handleSubmit();
                          }}
                        />
                      )}
                    </s.ReqButton>
                  </s.ButtonContainer>
                </>
              )}
            </Formik>
          </s.FormContainer>
        </KeyboardAvoidingView>
      </s.ViewContainer>
    </TouchableWithoutFeedback>
  );
}

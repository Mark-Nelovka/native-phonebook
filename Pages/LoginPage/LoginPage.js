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

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(5, ({ min }) => `Password must be at least ${min} characters`),
});

export default function LoginPage() {
  const [loading, setloading] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = async (dataForm) => {
    setloading(true);
    switch (dataForm.buttonId) {
      case "Login":
        try {
          // await loginValidationSchema.validate(dataForm);
          const signInResult = await Login(dataForm);
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
        break;

      default:
        break;
    }

    setloading(false);
  };

  const handleReqistrationSubmit = async (dataForm) => {
    setloading(true);
    try {
      await loginValidationSchema.validate(dataForm);
      const reqistrationResult = await Reqistration(dataForm);
      console.log(reqistrationResult);
    } catch (error) {
      console.log(error);
      Toast.show(`${error.message}`, {
        duration: Toast.durations.SHORT,
        position: 50,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  };

  const checkValidEmail = (e) => {
    setErrorEmail(true);
  };

  const checkValidPassword = (e) => {
    setErrorPassword(true);
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
                    onEndEditing={checkValidEmail}
                  />
                  {errors && errorEmail && (
                    <TextInput>{errors.email}</TextInput>
                  )}
                  <s.InputForm
                    name="password"
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                    onEndEditing={checkValidPassword}
                  />
                  {errors && errorPassword && (
                    <TextInput>{errors.password}</TextInput>
                  )}
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

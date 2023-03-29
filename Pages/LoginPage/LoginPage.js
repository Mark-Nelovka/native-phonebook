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
  email: yup.string(),
  password: yup
    .string()
    .min(5, ({ min }) => `Password must be at least ${min} characters`),
});

export default function LoginPage({ navigation }) {
  const [loading, setloading] = useState(false);

  const handleSubmit = async (dataForm) => {
    try {
      await loginValidationSchema.validate(dataForm);
      setloading(true);
      setTimeout(() => {
        setloading(false);
        Keyboard.dismiss();
      }, 2000);
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
              // validationSchema={loginValidationSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <s.InputForm
                    name="email"
                    placeholder="Email Address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  <s.InputForm
                    name="password"
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  <s.ButtonContainer>
                    <s.LoginButton>
                      {loading && (
                        <ActivityIndicator size="large" color="green" />
                      )}
                      {!loading && (
                        <Button title="LOGIN" onPress={handleSubmit} />
                      )}
                    </s.LoginButton>
                    <s.ReqButton>
                      {loading && (
                        <ActivityIndicator size="large" color="green" />
                      )}
                      {!loading && (
                        <Button
                          title="REQISTRATION"
                          onPress={() =>
                            navigation.navigate("Reqistration", {
                              name: "Jane",
                            })
                          }
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

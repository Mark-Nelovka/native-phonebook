// import { ToastProvider } from "react-native-toast-notifications";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <SafeAreaProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <ToastProvider> */}
        <RootSiblingParent>
          <LoginPage />
        </RootSiblingParent>
        {/* </ToastProvider> */}
      </TouchableWithoutFeedback>
    </SafeAreaProvider>
  );
}

// const styles = (props) => {
//   console.log(props.colorForBorderForm);
//   return StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//       // paddingBottom: 30,
//     },
//     // form: {
//     //   width: width / 2,
//     // },
//     modalView: {
//       // position: "absolute",
//       // top: 0,
//       // left: 0,
//       margin: 50,
//       backgroundColor: "grey",
//       borderRadius: 10,
//       padding: 25,
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5,
//     },
//     modalText: {
//       color: "#fff",
//       fontSize: 20,
//       textAlign: "center",
//     },
//     input: {
//       paddingRight: 20,
//       paddingLeft: 5,
//       paddingTop: 20,
//       paddingBottom: 5,
//       fontSize: 20,
//       color: "#000",
//       borderBottomColor: props.colorForBorderForm,
//       borderBottomWidth: 1,
//       width: "100%",
//     },
//     button: {
//       borderRadius: "50%",
//       borderColor: "#000",
//       borderWidth: 1,
//       marginTop: 20,
//       padding: 10,
//     },
//     textButton: {
//       fontSize: 28,
//       textAlign: "center",
//       letterSpacing: 1.1,
//       fontWeight: 600,
//       color: "green",
//     },
//   });
// };

// const ModalQwe = () => {
//   const toast = useToast();
//   return (
//     <Text>
//       {toast.show("Task finished successfully", {
//         type: "normal",
//         placement: "top",
//         duration: 4000,
//         offset: 50,
//         animationType: "zoom-in",
//       })}
//     </Text>
//   );
// };

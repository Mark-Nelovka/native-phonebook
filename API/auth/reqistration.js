import axios from "axios";
export default async function Reqistration(dataForm) {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/users/reqistration",
      {
        email: dataForm.email,
        password: dataForm.password,
      }
    );
    console.log("SuccessfulAPI: ", res.data.data);
    return res.data.data;
  } catch (error) {
    console.log("ErrorAPI: ", error);
    return error.data.data;
  }
}

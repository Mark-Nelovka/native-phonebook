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
    // console.log("SuccessfulAPI: ", res.data);
    return res.data;
  } catch (error) {
    // console.log("ErrorAPI: ", error);
    throw {
      status: error.response.data.status,
      message: error.response.data.message,
      data: error.response.data.data,
    };
  }
}

import axios from "axios";
export default async function Login(dataForm) {
  try {
    const res = await axios.post("http://localhost:3001/api/users/login", {
      email: dataForm.email,
      password: dataForm.password,
    });
    // console.log("SuccessfulAPI: ", res.data);
    return res.data;
  } catch (error) {
    throw {
      status: error.response.data.status,
      message: error.response.data.message,
      data: error.response.data.data,
    };
    // return error.response.data.message;
  }
}

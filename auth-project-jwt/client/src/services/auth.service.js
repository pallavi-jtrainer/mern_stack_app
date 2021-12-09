import axios from "axios";

const BASE_URL = "http://localhost:5000/users";

const Login = (username, password) => {
    return axios.post(BASE_URL + "/signin", {username, password})
       .then((res) => {
           if(res.data.accessToken) {
               localStorage.setItem("user", JSON.stringify(res.data))
           }

           return res.data;
       })
};

const Register = (username, email, password) => {
    return axios.post(BASE_URL + "/register", {username, email, password})
      .then((res) => {
          console.log(res.data)
      })
};

const CurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
};

const Logout = () => {
    localStorage.removeItem("user")
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Login, Logout, CurrentUser, Register,
};
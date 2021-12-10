import axios from "axios";
import authHeader from './auth-header';

const BASE_URL = "http://localhost:5000/users";

const getPublicContent = () => {
    return axios.get(BASE_URL + "/public");
  };
  
  const getUserContent = () => {
    return axios.get(BASE_URL + "/user", { headers: authHeader() });
  };
  
  
  const getAdminContent = () => {
    return axios.get(BASE_URL + "/admin", { headers: authHeader() });
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    getPublicContent,
    getAdminContent,
    getUserContent
  };

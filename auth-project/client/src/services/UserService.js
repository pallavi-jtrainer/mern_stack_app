import React from "react";
import axios from "axios";

const BASE_URL="https://61add432d228a9001703afa6.mockapi.io/userData";
class UserService extends React.Component {
    getUserById(id) {
        return axios.get(BASE_URL + "/" + id);
    }

    async getUsers() {
        return await axios.get(BASE_URL);
    }
}

export default new UserService();
import axios from "axios";

const BASE_URL = "https://61add432d228a9001703afa6.mockapi.io/fakeData";

class EmployeeService {
    getAllEmployees() {
        return axios.get(BASE_URL);
    }

    createEmployee(){

    }

    updateEmployee() {

    }

    deleteEmployee() {

    }

    getEmployeeById(id) {
        return axios.get(BASE_URL + '/' + id);
    }
}

export default new EmployeeService();
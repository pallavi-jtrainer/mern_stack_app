import axios from "axios";

const BASE_URL = "https://61add432d228a9001703afa6.mockapi.io/fakeData";

class EmployeeService {
    async getAllEmployees() {
        return await axios.get(BASE_URL);
    }

    createEmployee(employee){
        return axios.post(BASE_URL, employee);
    }

    updateEmployee(id, employee) {
        return axios.put(BASE_URL + '/' + id, employee);
    }

    deleteEmployee(id) {
        return axios.delete(BASE_URL + '/' + id);
    }

    getEmployeeById(id) {
        return axios.get(BASE_URL + '/' + id);
    }
}

export default new EmployeeService();
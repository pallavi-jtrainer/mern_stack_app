import React, {useEffect, useState} from "react";
import { Button, Form } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";

// class Update extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             firstname: '',
//             lastname: '',

//         }
//     }
// }

const Update = (props) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [salary, setSalary] = useState(0);
    const [id, setId] = useState(0);

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setFirstName(localStorage.getItem('firstname'));
        setLastName(localStorage.getItem('lastname'));
        setSalary(localStorage.getItem('salary'));
       // console.log(id, firstname);
        localStorage.clear();
    })

    const updateEmployee = () => {
        EmployeeService.updateEmployee(id, {firstname, lastname, salary});
    }

    return(
        <Form>
            <Form.Field>
                <label id="lab">First Name: </label>
                <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label id="lab">Last Name: </label>
                <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label id="lab">Salary: </label>
                <input type="text" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
            </Form.Field>
            <Button type="submit" onClick={updateEmployee}>Update</Button>
        </Form>
    )
}

export default Update;
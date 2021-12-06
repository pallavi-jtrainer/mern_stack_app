import React from "react";
import { Table,Button } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";

class EmpList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getAllEmployees().then(res => {
            this.setState({employees: res.data});
        })
    }

    render() {
        return(
            <div>
                <div>
                    <Button>Add Employee</Button>
                </div>
                <div>
                    {/* <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Salary</td>
                            </tr>
                        </thead>
                    </table> */}
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>#</Table.HeaderCell>
                                <Table.HeaderCell>First Name</Table.HeaderCell>
                                <Table.HeaderCell>Last Name</Table.HeaderCell>
                                <Table.HeaderCell>Salary</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <Table.Row key={employee.id}>
                                        <Table.Cell>{employee.id}</Table.Cell>
                                        <Table.Cell>{employee.firstname}</Table.Cell>
                                        <Table.Cell>{employee.lastname}</Table.Cell>
                                        <Table.Cell>{employee.salary}</Table.Cell>
                                        <Table.Cell>
                                            <Button className="ui blue basic button">View</Button>
                                            <Button className="ui orange basic button">Update</Button>
                                            <Button className="ui red basic button">Delete</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            }
                            {/* <Table.Row>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>Alan</Table.Cell>
                                <Table.Cell>Grant</Table.Cell>
                                <Table.Cell>23419</Table.Cell>
                                <Table.Cell>
                                    <Button className="ui blue basic button">View</Button>
                                    <Button className="ui orange basic button">Update</Button>
                                    <Button className="ui red basic button">Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>John</Table.Cell>
                                <Table.Cell>Doe</Table.Cell>
                                <Table.Cell>24200</Table.Cell>
                                <Table.Cell>
                                <Button className="ui blue basic button">View</Button>
                                    <Button className="ui orange basic button">Update</Button>
                                    <Button className="ui red basic button">Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>Jane</Table.Cell>
                                <Table.Cell>Gray</Table.Cell>
                                <Table.Cell>25361</Table.Cell>
                                <Table.Cell>
                                    <Button className="ui blue basic button">View</Button>
                                    <Button className="ui orange basic button">Update</Button>
                                    <Button className="ui red basic button">Delete</Button>
                                </Table.Cell>
                            </Table.Row> */}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}


// const EmpList = () => {
//     return(
//         <div>
//             <div>
//                 <Button>Add Employee</Button>
//             </div>
//             <div>
//                 {/* <table className="table">
//                     <thead className="thead-dark">
//                         <tr>
//                             <td>First Name</td>
//                             <td>Last Name</td>
//                             <td>Salary</td>
//                         </tr>
//                     </thead>
//                 </table> */}
//                 <Table singleLine>
//                     <Table.Header>
//                         <Table.Row>
//                             <Table.HeaderCell>#</Table.HeaderCell>
//                             <Table.HeaderCell>First Name</Table.HeaderCell>
//                             <Table.HeaderCell>Last Name</Table.HeaderCell>
//                             <Table.HeaderCell>Salary</Table.HeaderCell>
//                             <Table.HeaderCell>Actions</Table.HeaderCell>
//                         </Table.Row>
//                     </Table.Header>
//                     <Table.Body>
//                         <Table.Row>
//                             <Table.Cell>1</Table.Cell>
//                             <Table.Cell>Alan</Table.Cell>
//                             <Table.Cell>Grant</Table.Cell>
//                             <Table.Cell>23419</Table.Cell>
//                             <Table.Cell>
//                                 <Button className="ui blue basic button">View</Button>
//                                 <Button className="ui orange basic button">Update</Button>
//                                 <Button className="ui red basic button">Delete</Button>
//                             </Table.Cell>
//                         </Table.Row>
//                         <Table.Row>
//                             <Table.Cell>2</Table.Cell>
//                             <Table.Cell>John</Table.Cell>
//                             <Table.Cell>Doe</Table.Cell>
//                             <Table.Cell>24200</Table.Cell>
//                             <Table.Cell>
//                             <Button className="ui blue basic button">View</Button>
//                                 <Button className="ui orange basic button">Update</Button>
//                                 <Button className="ui red basic button">Delete</Button>
//                             </Table.Cell>
//                         </Table.Row>
//                         <Table.Row>
//                             <Table.Cell>3</Table.Cell>
//                             <Table.Cell>Jane</Table.Cell>
//                             <Table.Cell>Gray</Table.Cell>
//                             <Table.Cell>25361</Table.Cell>
//                             <Table.Cell>
//                                 <Button className="ui blue basic button">View</Button>
//                                 <Button className="ui orange basic button">Update</Button>
//                                 <Button className="ui red basic button">Delete</Button>
//                             </Table.Cell>
//                         </Table.Row>
//                     </Table.Body>
//                 </Table>
//             </div>
//         </div>
//     )
// }

export default EmpList;
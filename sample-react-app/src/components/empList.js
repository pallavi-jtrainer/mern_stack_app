import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Table,Button } from "semantic-ui-react";
import Create from './createEmp.js';
import EmployeeService from "../services/EmployeeService.js";

const EmpList = (props) => {
    // const { isModalOpen, openModal, closeModal } = useModal();
    const [show, setShow] = useState(false)

    const openModal = () => setShow(true);
    const closeModal = () => {
        setShow(false);
    }

    const editEmp = (data) => {
         //console.log(data)
         localStorage.setItem('id', data.id);
         localStorage.setItem('firstname', data.firstname);
         localStorage.setItem('lastname', data.lastname);
         localStorage.setItem('salary', data.salary);
     }

     const [employees, setEmployees] = useState(props)
  
     useEffect(() => {
        EmployeeService.getAllEmployees()
        .then((res) => {
            setEmployees(res.data);
        })
    }, [])
     
     return(
         <div>
             <div>
                <button className="btn btn-info" onClick={openModal}>Add Employee</button>
                {show ? <Create closeModal={closeModal} show={show}/> : null }
             </div>
             
             <div>
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
                         {employees.length > 0 ? (
                             employees.map((employee) => 
                                 <Table.Row key={employee.id}>
                                     <Table.Cell>{employee.id}</Table.Cell>
                                     <Table.Cell>{employee.firstname}</Table.Cell>
                                     <Table.Cell>{employee.lastname}</Table.Cell>
                                     <Table.Cell>{employee.salary}</Table.Cell>
                                     <Table.Cell>
                                         <Button className="ui blue basic button">View</Button>
                                         <Link to="/edit">
                                             <Button className="ui orange basic button" onClick={() => editEmp(employee)}>Update</Button>
                                         </Link>
                                         <Button className="ui red basic button">Delete</Button>
                                     </Table.Cell>
                                 </Table.Row>
                             )
                         ): null}
                     </Table.Body>
                 </Table>
             </div>
         </div>
    )
}


//====================================================================================

// class EmpList extends Component {
//     constructor(props) {
//         super(props);
//         // this.props = props;
//         this.state = {
//             employees: []
//         }
//         this.updateEmployee = this.updateEmployee.bind(this);
//     }

//     componentDidMount() {
//         EmployeeService.getAllEmployees().then(res => {
//             this.setState({employees: res.data});
//         })
//     }

//     updateEmployee(id) {
//        // <Navigate replace to={`/edit/${id}`} />
//        const history = createBrowserHistory();
//        history.push(`/edit/${id}`);
//         //this.props.history.push(`/edit/${id}`);
//         //console.log("In update");
//     }

//     render() {
//         return(
//             <div>
//                 <div>
//                     <Button>Add Employee</Button>
//                 </div>
//                 <div>
//                     {/* <table className="table">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <td>First Name</td>
//                                 <td>Last Name</td>
//                                 <td>Salary</td>
//                             </tr>
//                         </thead>
//                     </table> */}
//                     <Table singleLine>
//                         <Table.Header>
//                             <Table.Row>
//                                 <Table.HeaderCell>#</Table.HeaderCell>
//                                 <Table.HeaderCell>First Name</Table.HeaderCell>
//                                 <Table.HeaderCell>Last Name</Table.HeaderCell>
//                                 <Table.HeaderCell>Salary</Table.HeaderCell>
//                                 <Table.HeaderCell>Actions</Table.HeaderCell>
//                             </Table.Row>
//                         </Table.Header>
//                         <Table.Body>
//                             {
//                                 this.state.employees.map(
//                                     employee => 
//                                     <Table.Row key={employee.id}>
//                                         <Table.Cell>{employee.id}</Table.Cell>
//                                         <Table.Cell>{employee.firstname}</Table.Cell>
//                                         <Table.Cell>{employee.lastname}</Table.Cell>
//                                         <Table.Cell>{employee.salary}</Table.Cell>
//                                         <Table.Cell>
//                                             <Button className="ui blue basic button">View</Button>
//                                             <Button className="ui orange basic button" onClick={() => this.updateEmployee(employee.id)}>
//                                                 Update
//                                             </Button>
//                                             <Button className="ui red basic button">Delete</Button>
//                                         </Table.Cell>
//                                     </Table.Row>
//                                 )
//                             }
//                             {/* <Table.Row>
//                                 <Table.Cell>1</Table.Cell>
//                                 <Table.Cell>Alan</Table.Cell>
//                                 <Table.Cell>Grant</Table.Cell>
//                                 <Table.Cell>23419</Table.Cell>
//                                 <Table.Cell>
//                                     <Button className="ui blue basic button">View</Button>
//                                     <Button className="ui orange basic button">Update</Button>
//                                     <Button className="ui red basic button">Delete</Button>
//                                 </Table.Cell>
//                             </Table.Row>
//                             <Table.Row>
//                                 <Table.Cell>2</Table.Cell>
//                                 <Table.Cell>John</Table.Cell>
//                                 <Table.Cell>Doe</Table.Cell>
//                                 <Table.Cell>24200</Table.Cell>
//                                 <Table.Cell>
//                                 <Button className="ui blue basic button">View</Button>
//                                     <Button className="ui orange basic button">Update</Button>
//                                     <Button className="ui red basic button">Delete</Button>
//                                 </Table.Cell>
//                             </Table.Row>
//                             <Table.Row>
//                                 <Table.Cell>3</Table.Cell>
//                                 <Table.Cell>Jane</Table.Cell>
//                                 <Table.Cell>Gray</Table.Cell>
//                                 <Table.Cell>25361</Table.Cell>
//                                 <Table.Cell>
//                                     <Button className="ui blue basic button">View</Button>
//                                     <Button className="ui orange basic button">Update</Button>
//                                     <Button className="ui red basic button">Delete</Button>
//                                 </Table.Cell>
//                             </Table.Row> */}
//                         </Table.Body>
//                     </Table>
//                 </div>
//             </div>
//         )
//     }
// }

export default EmpList;
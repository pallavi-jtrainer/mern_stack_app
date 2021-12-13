import React , { useState}from 'react';
import './App.css';
import Modal from './components/modal';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import EmpList from './components/empList.js';
// import Update from './components/updateEmp.js';
// import EmployeeService from './services/EmployeeService';
// import Dummy from './components/dummyComponent';
// import PortalDemo from './components/PortalDemo';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         Welcome To React JS!
//       </header>
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     const history = createBrowserHistory();
//     return(
//       <Router history={history}>
//         <div className="App">
//           <h2 className="main-header">
//             Class Component - Main Component
//           </h2>
//           <div>
//             {/* <Create/> */}
//             <Routes>
//               {/* <Route exact path='/show' component={EmpList}/> */}
//               <Route exact path='/create' element={<Create/>} />
//               <Route exact path='/show' element={<EmpList/>} />
//               <Route exact path='/edit/:id' element={<Update/>} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     );    
//   }
// }

const App = () => {
  const [openModal, setOpenModal] = useState(false);
    const Toggle = () => setOpenModal(!openModal);

    return (
        <div>
            <button className='modalBtn' onClick={() => Toggle()}>
                Show Modal
            </button>

            <Modal show={openModal} title="Modal" close={Toggle}>
                New Modal Content    
            </Modal>
        </div> 
    )





  // const [employees, setEmployees] = useState([])
  
  // useEffect(() => {
  //   EmployeeService.getAllEmployees()
  //   .then((res) => {
  //     setEmployees(res.data);
  //   })
  // }, [])

  // return(
  //   // <div>
  //   //   <button>Open Modal</button>
  //   // </div>
  //   <PortalDemo/>
  //   // <Router>
  //   //   <Routes>
  //   //     <Route exact path='/show' element={<EmpList employees={employees}/>}/>
  //   //     {/* <Route exact path='/show' element={<EmpList />}/> */}
  //   //     <Route exact path='/edit' element={<Update/>}/>
  //   //     {/* <Route exact path='/dummy/:id' element={<Dummy/>}/> */}
  //   //     <Route exact path='/dummy' element={<Dummy/>}/>
  //   //   </Routes>
  //   // </Router>
  // )
}

export default App;

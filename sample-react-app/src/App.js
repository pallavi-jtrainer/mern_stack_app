// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Create from './components/createEmp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmpList from './components/empList.';

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

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          <h2 className="main-header">
            Class Component - Main Component
          </h2>
          <div>
            {/* <Create/> */}
            <Routes>
            {/* <Route exact path='/create' component={Create} /> */}
              {/* <Route exact path='/create' element={<Create/>} /> */}
              <Route exact path='/show' element={<EmpList/>} />
            </Routes>
          </div>
        </div>
      </Router>
    );    
  }
}

export default App;

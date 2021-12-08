// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/loginscreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/dash" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

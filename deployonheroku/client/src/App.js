// import logo from './logo.svg';
import './App.css';
import Books from './components/Books/Books';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Details from './components/Books/BookDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/books' element={<Books/>}/>
          <Route path={'/books/:id'} element={<Details/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

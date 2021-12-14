// import logo from './logo.svg';
import './App.css';
import Books from './components/Books/Books';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Details from './components/Books/BookDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Books/>}/>
          <Route exact path='/books' element={<Books/>}/>
          <Route exact path='/books/:id' element={<Details/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

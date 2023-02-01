import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<Register />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

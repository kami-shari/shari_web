import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Imprint from './components/Imprint';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </Router>
  );
}

export default App;

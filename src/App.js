import {
  Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import { Calcul } from './pages/Calcul';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <div className="app">
        <h1>Math Magicians</h1>
        <nav>
          <ul className="navContainer">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calcul">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calcul" element={<Calcul />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </>
  );
}

export default App;

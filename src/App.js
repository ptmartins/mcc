import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import { Home, Logs, About } from './pages';
import './App.css';

function App() {

  return (
      <div className="app-container">
        <Nav />
        <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/logs" element={ <Logs /> } />
        </Routes>
        </div>
      </div>
  );
}

export default App;

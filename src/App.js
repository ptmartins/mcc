import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import { Home, Logs, About } from './pages';
import styles from './App.module.css';

function App() {

  return (
      <div className={styles.app}>
        <Nav />
        <div className={styles.content}>
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

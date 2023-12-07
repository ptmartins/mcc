import { Routes, Route } from "react-router-dom";
import { Nav } from './components';
import { Home, Logs, About } from './pages';
import styles from './App.module.css';

function App() {

  const menus = [
    {
      path: '/',
      txt: 'Home'
    },
    {
      path: '/logs',
      txt: 'Logs'
    },
    {
      path: '/about',
      txt: 'About'
    }
  ]

  return (
      <div className={styles.app}>
        <Nav menus={menus}/>
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

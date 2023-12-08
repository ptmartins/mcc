import { Routes, Route } from "react-router-dom";
import { Nav, Header, Footer } from './components';
import { Home, Logs, About } from './pages';
import styles from './App.module.css';

function App() {

const menus = {
  status: [
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
  ],
  configuration: [
    {
      path: '/general',
      txt: 'General'
    },
    {
      path: '/databases',
      txt: 'Databases'
    },
    {
      path: '/queue',
      txt: 'Queue management'
    },
    {
      path: '/appications',
      txt: 'Applications'
    },
    {
      path: '/resourceGroups',
      txt: 'Resource Groups'
    }
  ],
  extras: [
    {
      path: '/remoteTools',
      txt: 'Remote Tools'
    }
  ],
  access: [
    {
      path: '/account',
      txt: 'Account'
    },
    {
      path: '/certificates',
      txt: 'Certificates'
    }
  ],
  service: [
    {
      path: '/diagnostics',
      txt: 'Diagnostics'
    },
    {
      path: '/updates',
      txt: 'Updates'
    }
  ]
}

return (
    <div className={styles.app}>
      <Nav menus={menus}/>
      <div className={styles.content}>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/logs" element={ <Logs /> } />
        </Routes>
        <Footer />
      </div>
    </div>
);
}


export default App;

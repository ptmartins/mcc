import { Routes, Route } from "react-router-dom";
import { Nav, Header, Footer } from './components';
import { Home, Logs, About } from './pages';
import { FaHome, FaInfoCircle, FaClipboardList, FaCog, FaDatabase, FaBriefcase, FaLayerGroup, FaTools, FaStethoscope } from "react-icons/fa";
import { HiQueueList } from "react-icons/hi2";
import { MdAccountCircle, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import styles from './App.module.css';

function App() {

const menus = {
  status: [
    {
      path: '/',
      txt: 'Home',
      icon: <FaHome />
    },
    {
      path: '/logs',
      txt: 'Logs',
      icon: <FaClipboardList />
    },
    {
      path: '/about',
      txt: 'About',
      icon: <FaInfoCircle />
    }
  ],
  configuration: [
    {
      path: '/general',
      txt: 'General',
      icon: <FaCog />
    },
    {
      path: '/databases',
      txt: 'Databases',
      icon: <FaDatabase />
    },
    {
      path: '/queue',
      txt: 'Queue management',
      icon: <HiQueueList />
    },
    {
      path: '/appications',
      txt: 'Applications',
      icon: <FaBriefcase />
    },
    {
      path: '/resourceGroups',
      txt: 'Resource Groups',
      icon: <FaLayerGroup />
    }
  ],
  extras: [
    {
      path: '/remoteTools',
      txt: 'Remote Tools',
      icon: <FaTools />
    }
  ],
  access: [
    {
      path: '/account',
      txt: 'Account',
      icon: <MdAccountCircle />
    },
    {
      path: '/certificates',
      txt: 'Certificates',
      icon: <AiFillSafetyCertificate />
    }
  ],
  service: [
    {
      path: '/diagnostics',
      txt: 'Diagnostics',
      icon: <FaStethoscope />
    },
    {
      path: '/updates',
      txt: 'Updates',
      icon: <MdOutlineSystemUpdateAlt />
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

import { useState, UseEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Nav, Header, Footer, LoginForm } from './components';
import { Home, Logs, About, Databases, NotFound, Applications, ResourceGroups, Diagnostics, Certificates } from './pages';
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
        path: '/applications',
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
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = val => {
    setIsLoggedIn(val);
  }

  return (
      <div className={ styles.app }>
        {isLoggedIn &&
          <>
            <Nav menus={menus}/>
            <div className={ styles.content }>
              <Header loggedIn={ isLoggedIn }/>
              <main className={ styles.main }>
                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/about" element={ <About /> } />
                  <Route path="/logs" element={ <Logs /> } />
                  <Route path="/databases" element={ <Databases /> } />
                  <Route path="/applications" element={ <Applications /> } />
                  <Route path="/resourceGroups" element={ <ResourceGroups /> } />
                  <Route path="/diagnostics" element={ <Diagnostics /> } />
                  <Route path="/certificates" element={ <Certificates /> } />
                  <Route path='*' element={<NotFound />}/>
                </Routes>
              </main>
              <Footer />
            </div>x
          </>
        }
        { !isLoggedIn && <LoginForm cb={ handleLogin }/> }
      </div>
  );
}

export default App;

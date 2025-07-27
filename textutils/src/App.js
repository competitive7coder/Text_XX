import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, alerttype) => {
    setAlert({
      msg: message,
      type: alerttype
    });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  const ToggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    const navbar = document.getElementById('navbar');

    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');

      if (navbar) {
        navbar.style.color = 'white';
        document.body.style.backgroundColor = '#042743';
        navbar.querySelectorAll('a, .nav-link, .navbar-brand, label, span').forEach(el => {
          el.style.color = 'white';
        });
      }

    } else {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');

      if (navbar) {
        navbar.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        navbar.querySelectorAll('a, .nav-link, .navbar-brand, label, span').forEach(el => {
          el.style.color = 'black';
        });
      }
    }
  };

  return (
    <>
      <Router>
  <Navbar homeText="HOME" mode={mode} toggleMode={ToggleMode} />
  <Alert alert={alert} />

  <Routes>
    <Route exact path="/about" element={<About />} /> 
    <Route exact path="/cards" element={<Cards />} />
    <Route exact path="/" element={<TextForm heading="Enter your text here" mode={mode} />} />
  </Routes>
</Router>

      
    </>
  );
}

export default App;

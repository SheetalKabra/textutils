import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled!!!", 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!!!", 'success');
    }
  };
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze " mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Add Title here",
  aboutText : "About Us"
}

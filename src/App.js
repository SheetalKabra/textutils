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
  const[color, setColor] = useState('black');
  const[colorArray, setColorArray] = useState({
    'colorValue' : 'black',
    'backgroundColor' : 'white'
  });

  const toggleMode = ()=>{
    let backgroundColor = '';
    let colorValue = '';
    console.log(color)
    if(mode === 'light'){
      setMode('dark');
      if(color == 'red'){
        backgroundColor = '#dd0430';
        colorValue = '';
      }else{
        backgroundColor = 'grey';
        colorValue = '';
      }
      showAlert("Dark mode has been enabled!!!", 'success');
    }else{
      setMode('light');
      if(color == 'red'){
        backgroundColor = '#d9677e';
        colorValue = '';
      }else{
        backgroundColor = 'white';
        colorValue = '';
      }
      
      showAlert("Light mode has been enabled!!!", 'success');
    }

    document.body.style.backgroundColor = backgroundColor;
      setColorArray({
        'color' : colorValue,
        'backgroundColor' : backgroundColor
      });
  };
  const changeColor = (event)=>{
    setColor(event.target.value);
    console.log(color);
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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze " mode={mode} showAlert={showAlert} colorArray={colorArray}/>
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

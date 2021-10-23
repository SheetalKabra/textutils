import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const[color, setColor] = useState('black');
  const[colorArray, setColorArray] = useState({
    'colorValue' : 'black',
    'backgroundColor' : 'white',
    'backgroundColorTextForm' : 'white'
  });

  const toggleMode = ()=>{
    let backgroundColor = '';
    let backgroundColorTextForm = '';
    let colorValue = '';
    if(mode === 'light'){
      setMode('dark');
      if(color === 'red'){
        backgroundColor = '#dd0430';
        backgroundColorTextForm = '#c13939';
        colorValue = '';
      }else{
        backgroundColor = '#122c5d';
        backgroundColorTextForm = '#4c6aa1';
        colorValue = '';
      }
      showAlert("Dark mode has been enabled!!!", 'success');
      //document.title= 'Textutils - Dark Mode';
    }else{
      setMode('light');
      if(color === 'red'){
        backgroundColor = '#d9677e';
        backgroundColorTextForm = '#db8c9c';
        colorValue = '';
      }else{
        backgroundColor = 'white';
        backgroundColorTextForm = 'white';
        colorValue = '';
      }
      showAlert("Light mode has been enabled!!!", 'success');
      //document.title= 'Textutils - Light Mode';
    }

    document.body.style.backgroundColor = backgroundColor;
      setColorArray({
        'color' : colorValue,
        'backgroundColor' : backgroundColor,
        'backgroundColorTextForm' : backgroundColorTextForm
      });
  };
  const changeColor = (event)=>{
    setColor(event.target.value);
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
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
          <Textform heading="Try Textutils - word counter, character counter, remove extra spaces " mode={mode} showAlert={showAlert} colorArray={colorArray}/>
          </Route>
        </Switch>
      </div>
      </Router>
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

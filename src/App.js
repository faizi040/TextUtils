// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import About from './components/About.js';
import { useState } from 'react';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';i
// impoting component for usage



// let name = <b>Faizi</b>;         //using html with javascript and the using it in JSX
// const element = <a href="https://www.reactjs.org"> link </a>;
function App() {

  const [mode, setMode] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const [text, setText] = useState("Enable");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextColor('light');
      setText('Disable');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode has been enabled", "Success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      setTextColor('dark');
      setText('Enable');
      document.body.style.backgroundColor = 'white';
      showAlert("DarkMode has been disbled", "Success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    //down all code is JSX until return bracket close
    <>   {/* //Jsx fragment---comment in JXS */}

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} textColor={textColor} text={text} />     {/* sending props with components */}
        {/* using Navbar component Now navbar is coming from navbar component */}
        <Alert alert={alert} />

        <div className="container my-5">
          {/* setting react router */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>

            </Route>

            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />}>

            </Route>
          </Routes>
           {/* React Router part */}


        </div>
      </BrowserRouter>
    </>



  );
}

export default App;

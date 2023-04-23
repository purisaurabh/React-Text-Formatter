import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About'
import {  } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const[mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout( () => {
         setAlert(null)
      } , 1500)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode Has Been Enabled' , 'success');
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Has Been Enabled' , 'success')
    }

  }

  return (
    <>
      <Router>
        <Navbar title="React JS" mode={mode} toggleMode={toggleMode}/>
        <Alert  alert ={alert}/>

        <div className='container my-3'>
          <Routes>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Enter your text here" mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

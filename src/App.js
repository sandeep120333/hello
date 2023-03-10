
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import {Switch} from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route


} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null);

    }, 2000);

  }

  const toogle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "success");
    }

  }
  // setMode('dark');
  return (
    <>
      <Router>
        <Navbar tittle="Bhusals.." mode={mode} toogle={toogle} />
        <Alert alert={alert} />
        <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
          <Routes>
            <Route path="/about" element={<About />}/>

            

            <Route path="/" element={<TextArea mode={mode} toogle={toogle} showAlert={showAlert} heading="Enter your text here" />}/>
           
          </Routes>


        </div>
      </Router>
    </>
  );
}

export default App;

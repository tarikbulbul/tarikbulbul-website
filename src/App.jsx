import React, { useState, useEffect } from 'react';
import Preloader from './components/Pre';
import Router from './router';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  
  return (
      <>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Router />;
        </div>
      </>
    )
};

export default App;
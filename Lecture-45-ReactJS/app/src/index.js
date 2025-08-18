import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  
import Catfacts from './components/Catfacts';
import Cleanup from './components/Cleanup/Cleanup';
import SearchProduct from './components/SearchProduct/SearchProduct';
import LearningReducer from './components/UseReducer/LearnReducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Catfacts /> */}
    {/* <Cleanup /> */}
    {/* <SearchProduct /> */}
    <LearningReducer />

  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoApp from './components/TodoApp/TodoApp';
import Catfacts from './components/CatFact/Catfacts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Catfacts />
  </React.StrictMode>
);  
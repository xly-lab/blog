import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import routes from './router';

function App() {
  return <Router>{renderRoutes(routes)}</Router>;
}

export default App;

// 'index.js' file typically serves as the entry point o the application. It is responsible for rendering the root component of the React app and mounting it into the HTML document.

// Importing Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Attaching the stylesheets
//default bootstrap file
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';

// Importing the Root Component
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
    </Route>
  )
)

// Rendering the root component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

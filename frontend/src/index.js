// 'index.js' file typically serves as the entry point o the application. It is responsible for rendering the root component of the React app and mounting it into the HTML document.

// Importing Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// 'createRoutesFromElements' is a helper that creates route objects from '<Route>' elemenets.
// it is useful if  you prefer  to create your routes as JSX instead of objects
// it creates routes based on the provided elements and their nested structure
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Attaching the stylesheets
//default bootstrap file
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';

// Importing the Root Component
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
/*
 - 'createRoutesFromElements' is a helper that creates route objects from '<Route>' elemenets.
 - it is useful if  you prefer  to create your routes as JSX instead of objects
 - it creates routes based on the provided elements and their nested structure

 */
/*
Syntax

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
*/


const router = createBrowserRouter(

  createRoutesFromElements(
    // '<Route>' represents a specific route that matches a particular URL path and renders the specified component or element when the route is accessed
    // in this code, the first '<Route>' component represents the root path of the application and renders the 'App' (root) component
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
    </Route>
  )
)

// Rendering the root component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*since we're providing the '<App />' component in the router, replace with the RouterProvider and pass the router as a prop*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

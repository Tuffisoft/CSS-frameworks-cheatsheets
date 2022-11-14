import React from 'react'
import ReactDOM from 'react-dom/client'
import Bulma from '../pages/Bulma.jsx';
import Tailwind from '../pages/tailwind.jsx';
import Ant from '../pages/Ant.jsx';
import Chakra from '../pages/Chakra.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import ErrorPage from "./error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bulma",
    element: <Bulma />
  },
  {
    path: "/tailwind",
    element: <Tailwind/>
  },
  {
    path: "/chakra",
    element: <Chakra />
  },
  {
    path: "/ant",
    element: <Ant />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

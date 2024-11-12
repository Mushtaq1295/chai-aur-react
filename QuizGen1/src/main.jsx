import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Page1 from './components/Page1.jsx'
import Page2 from './components/Page2.jsx'
import Tier1 from './components/Tier1.jsx'
import ErrorPage from './components/ErrorPage.jsx'
// import router from './router'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path:"/tier1",
    element: <Tier1 />,
  },
  // {
  //   path: "*", //Handle unknown routes
  //   element: <ErrorPage />,
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

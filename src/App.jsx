import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PublicLayout from './components/Layout/PublicLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element: <PublicLayout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/blogs",
          element:<Blog/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/contact",
          element: <Contact/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PublicLayout from './components/Layout/PublicLayout';
import Home from './pages/Home';

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

      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
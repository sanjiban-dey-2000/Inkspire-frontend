import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      children:[

      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
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
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './config/PrivateRoute';
import PrivateLayout from './components/Layout/PrivateLayout';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import BlogDetails from './pages/BlogDetails';
import MyBlogs from './pages/MyBlogs';
import CreatePost from './pages/CreatePost';
import BlogEdit from './pages/BlogEdit';

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
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element: <Signup/>
        }
      ]
    },
    {
      path:"/private",
      element:(
        <PrivateRoute>
          <PrivateLayout/>
        </PrivateRoute>
      ),
      children:[
        {
          path:"dashboard",
          element: <Dashboard/>
        },
        {
          path:"news",
          element:<News/>
        },
        {
          path:"blog/:id",
          element:<BlogDetails/>
        },
        {
          path:"my-posts",
          element: <MyBlogs/>
        },
        {
          path:"create",
          element: <CreatePost/>
        },
        {
          path:"edit-blog/:id",
          element: <BlogEdit/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
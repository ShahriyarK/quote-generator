import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root/Root';
import Login, {action as loginAction} from './routes/Login/Login';
import Home from './routes/Home/Home';
import AddQuote,{action as addQuote} from './routes/AddQuote/AddQuote';
import SignUp, {action} from './routes/SignUp/SignUp';
import User from './routes/User/User';
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute';
import {loader} from './components/RandomQuote/RandomQuote'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children:[
      {
        path:'/',
        element: <Home />,
        loader: loader
      },
      {
        path:'/',
        element: <ProtectedRoute />,
        children:[
          {
            path:'/user/:userId',
            element: <User />,
            loader: loader,
          },
          {
            path:'/user/:userId/add-quote',
            element: <AddQuote />,
            action: addQuote
          }
        ]
      },
      {
        path:'/login',
        element: <Login />,
        action: loginAction
      },
      {
        path:'/Signup',
        element: <SignUp />,
        action: action
      },
      {
        path:'*',
        element:<Navigate to='/login' />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

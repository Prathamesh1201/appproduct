import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MyShop from './MyShop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
// import About from './About';
import Contact from './Contact';
import Showproduct from './ShowProduct';
import App from './App';
import ShowDetail from './ShowDetail';
import ThemeProvider from './MyContext/ThemeContext';

const About = React.lazy(()=>import('./About'));

const router = createBrowserRouter([

  {
    path:'/',
    element:<App />,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/about',
        element:<React.Suspense>
          <About/>
        </React.Suspense>
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/showproduct',
        element:<Showproduct />
      },
      {
        path:'/product/:id',
        element:<ShowDetail />
      }
    ]
  },
  {
    path:'*',
    element:<Home/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


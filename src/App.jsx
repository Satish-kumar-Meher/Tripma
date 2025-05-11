// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {


//   return (
//     <>
     
//     </>
//   )
// }

// export default App

import React from 'react';

import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './components/AppLayout';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import FlightSchedulePage from './pages/Flights';
import FlightDetails from './pages/FlightDetails';
import PassengerInformationForm from './pages/PassengerDetails';
import CurrentBookings from './pages/CurrBookings';
import { Chatbot } from './pages/Chatbot';
import About from './pages/About';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/signin",
        element: <SignIn/>,
      },
      {
        path: "/flights",
        element: <FlightSchedulePage/>,
      },
      {
        path: "/flightdetail/:id",
        element: <FlightDetails/>,
      },
      {
        path: "/passengerdetail/:id",
        element: <PassengerInformationForm/>,
      },
      {
        path: "/currentbookings",
        element: <CurrentBookings/>,
      },
      {
        path: "/chatbot",
        element: <Chatbot/>,
      },
      {
        path: "/about",
        element: <About/>,
      },

    ]
  }
]
)


const App = () => {
  return (
    <>
    <RouterProvider router={router}> </RouterProvider>;
    <Toaster position="top-right" reverseOrder={false} />
    </>
  
  )
};


export default App;


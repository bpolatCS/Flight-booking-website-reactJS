import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import logo from './logo.svg';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/layout/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import FlightListPage from "./flightList/FlightListPage";
import ReservationPage from "./reservation/ReservationPage";
import SuccesPage from "./succededReservation/SuccesPage";

function App() {
 
  return (

   <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element = {<Home />}></Route>
            <Route path='/about' element = {<About />}></Route>
            <Route path='/notfound' element = {<NotFound />}></Route>
            <Route path='/*' element = {<NotFound />}></Route>
            <Route path='/allflights' element = {<FlightListPage />}></Route>
            <Route path='/choosenflight' element = {<ReservationPage />}></Route>
            <Route path='/succededreservation' element = {<SuccesPage />}></Route>
      
          </Routes>
        </main>
        
      </div>
   </Router>
  
  );
}

export default App;



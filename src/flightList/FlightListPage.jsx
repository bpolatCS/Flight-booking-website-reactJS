import React from 'react';
import {Link} from 'react-router-dom';
import FlightListUI from "./FlightListUI";
import { useLocation } from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import { Component } from 'react';

function FlightListPage() {

    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const arrivalAirportId= parseInt(searchParams.get('selectedArrival')); 
    const departureAirportId=parseInt(searchParams.get('selectedDeparture')); 
    const departureDate=searchParams.get('departureDate')

 

    const [schFlights, setSchFlights] = useState([]);

    useEffect(() => {
        getFlights();
    }, [])

    const getFlights = async ()=>{
        const res= await axios.get("https://localhost:7290/api/ScheduledFlight/GetSchflights");
        

        const schFlight = res.data.filter(
            x=>x.departureAirportId === departureAirportId
            && x.arrivalAirportId === arrivalAirportId
        )
        setSchFlights(schFlight);
    }


  return (
      <>
        {/* <section class="bg-danger text-light p-5 mt-5 pt-lg-5 text-center text-sm-start">
            <div class="container">
                <div class="d-sm-p-5 flex align-items-center justify-content-between">
                    <div>
                    
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </section> */}

        <section class=" text-light  p-5 ">
            <h1 class="text-center text-dark p-5 fs-1 mt-5">
            FLIGHTS
            </h1>

        <div class="container fs-5  text-dark">  
            <div class="row">
                <div class="col-8">
                    <div class="row">
                        <div class="col-2 mx-auto text-center ">            
                            <p>Flight Name</p>
                        </div>
                        <div class="col-2 mx-auto text-center">            
                            <p>Departure</p>
                        </div>
                        <div class="col-2 mx-auto text-center ">            
                            <p>Duration</p>
                        </div>
                        <div class="col-2 mx-auto text-center ">            
                            <p>Arrival</p>
                        </div>                       
                    </div>                  
                </div> 
                <div class="col-4">
                    <div class="row">
                        <div class="col-2 mx-auto text-center ">            
                            <p>Price</p>
                        </div>
                        <div class="col-2 mx-auto text-center ">            
                            <p>BOOK</p>
                        </div>                               
                    </div>
                </div>
             </div>
        </div>

        <FlightListUI schFlights={schFlights}/>
 
        </section>
       
    </>
  )
}

export default FlightListPage
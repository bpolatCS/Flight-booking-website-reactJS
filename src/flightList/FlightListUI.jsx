
import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'


function FlightListUI({schFlights}) {

    console.log(schFlights);
 
  return (
    <div>
        <div className="container">
            {
                schFlights.map(flight=>{
                    return  <div className="row align-items-center bg-secondary mb-3">
                    <div className="col-8">
                        <div className="row align-items-center ">
                            <div className="col-2 p-3 mx-auto text-center ">            
                                <img src="//images.ucuzabilet.com/resources/img/flights-logo/logo25x19/25px-XQ.png" width="40" height="40" />
                                <div className="airline">{flight.flightAirline}</div>
                                <div className="flight-number">{flight.flightNumber}</div>     
                                <div>{flight.flightType}</div>
                            </div>
                            <div className="col-2 mx-auto text-center">            
                                <b className="flight-time h4">{flight.date.substring(11,16)}</b>
                                <div>{flight.departureAirport}</div>
                                
                            </div>
                            <div className="col-2 mx-auto text-center ">            
                                <div></div>
                                <div>{flight.arrivalDate.substring(11,16)}-{flight.date.substring(11,16)}</div>
                            </div>
                            <div className="col-2 mx-auto text-center ">            
                                <b className="h4 mb-2">{flight.arrivalDate.substring(11,16)}</b>
                                <div>{flight.arrivalAirport}</div>
            
                            </div>
                        </div>
                       
    
                    </div> 
    
                    <div className="col-4">
                        <div className="row align-items-center d-flex justify-content-around ">
                            <div className="col-2 p-3 mx-auto text-dark text-center">            
                                <h2>{flight.price}₺</h2>
                            </div>
    
                            <div className="col-2 mx-auto">
                                <div className="col">
    
                                <Link to={`/choosenflight?flightId=${flight.id}&departurePort=${flight.departureAirport}&arrivalPort=${flight.arrivalAirport}
                                &departureDate=${flight.date}&arrivalDate=${flight.arrivalDate}&price=${flight.price}`} className="btn btn-info">BOOK</Link>

                                {/* fligh id'si gönderilecek. giden sayfada alınan bilgilere göre reservations tablosu ıd =1 olacak şekilde doldurlucak */}
                                {/* hangi book'a tıklarsam o carddaki bilgiler gitmeli choosenPage'e */}
                                </div>            
                               
                               
                            </div>
                        </div>                  
                    </div> 
                    
                </div>
                })
            }
           
        </div>  
    </div>
  )
}

export default FlightListUI
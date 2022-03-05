
import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

// geçmiş gün girmek
// gidiş geliş aynı seçmek
// uçuş göstermeye date.now'dan itibaren göstermeli
// list'ten home'a gidilmiyor
// gün ve ay check'i


function Home() {

    const current = new Date();
    const currentDate = `${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`;

 

    const [airports, setAirports] = useState([]);
    const [selectedArrival, setSelectedArrival] = useState({});
    const [selectedDeparture, setSelectedDeparture] = useState({});
    // const [arrivalDate, setArrivalDate] = useState(currentDate);
    const [departureDate, setDepartureDate] = useState(currentDate)
    
    useEffect(() => {
        getAirports();
    }, [])

    const getAirports = async ()=>{
    const res= await axios.get("https://localhost:7290/api/Airport/GetAirports");
    setAirports(res.data);
    }

    const handleArrivalChange = (e)=>{
        let id=e.target.value;
        let selected=airports.find(x=>x.id==id);
        setSelectedArrival(selected);
    }
    const handleDepartureChange = (e)=>{
        let id=e.target.value;
        let selected=airports.find(x=>x.id==id);
        setSelectedDeparture(selected);
    }

    const handleDepartureDateChange = (e)=>{
        setDepartureDate(e.target.value);
    }
    
    return (

        <>
            <section className="bg-secondary text-light overflow-hidden mb-2 pt-lg-5">
            <img class="d-block mx-auto mb-4" src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-airplane-travel-clip-art-png-image_5589637.jpg" alt="" width="400" height="200" />
    
                <h1 className="text-center mb-2 p-5 mt-5 ">Where would you like to fly?</h1>
                <div className="col d-flex align-items-center">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xxs-6 p-4 pr-3 mx-auto ">
                        <div className="col-lg-12">
                            <div className="col p-3">
                                <h3 className="text-center">
                                    Departure
                                </h3>
                                <select onChange={handleDepartureChange} className="form-select" aria-label="Default select example">
                                    <option selected>Choose Departure</option>
                                    {airports.map(x=>{
                                        return  <option value={x.id}>{x.name + " - "+ x.code}</option>
                                    })}
                                </select>            
                            </div>

                            <div className="col p-3">
                            
                                <h3 className="text-center">
                                    Arrival
                                </h3>
                                <select onChange={handleArrivalChange} className="form-select" aria-label="Default select example">
                                    <option selected>Choose Arrival</option>
                                    {airports.map(x=>{
                                        return  <option value={x.id}>{x.name + " - "+ x.code}</option>
                                    })}

                                </select> 
                
                            </div>
                            
                            <div className="row d-flex align-center justify-content-around p-3">
                                    <label for="start" className="text-center h3">Departure date:</label>
                                        <input type="date" id="start" name="trip-start" value={departureDate} 
                                        onChange={handleDepartureDateChange} />                        


                                {/* <div className=" col col-lg-4 col-sm-6 col-md-6 col-xxs-6">
                                    <label for="start">Return date:</label>
                                        <input type="date" id="start" name="trip-start" value={arrivalDate} onChange={handleDateChange}/>                   
                                </div> */}
                            </div>
                            <div className=" row d-flex justify-content-center align-content-center ">
                        
                            
                                <Link to={`/allflights?selectedArrival=${selectedArrival.id}&selectedDeparture=${selectedDeparture.id}&departureDate=${departureDate}`} className="btn btn-info col-2">SEARCH</Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    
   
    
  )
}

export default Home
import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import axios from "axios";


function ReservationPage() {
  let navigate = useNavigate();


    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const flightId= parseInt(searchParams.get('flightId')); 
    const departurePort=searchParams.get('departurePort'); 
    const arrivalPort=searchParams.get('arrivalPort'); 
    const departureDate=searchParams.get('departureDate');
    const arrivalDate=searchParams.get('arrivalDate');
    const price=searchParams.get('price')

    const depDate= departureDate.substring(0,10)
    const depHour= departureDate.substring(11,16)
    const arrDate= arrivalDate.substring(0,10)
    const arrHour = arrivalDate.substring(11,16)

    const [customer, setCustomer] = useState({
        name:'',//Name
        surname:'',
        mail:'',
        phone:'',
        citizenId:'',
        schFlightId:flightId//SchFlightId
    })

   


    const handleCustomerChange =(e)=>{
      let value=e.target.value;
      let name=e.target.name;
      // console.log(value,name);
      setCustomer({...customer,[name]:value});
    }

  

    const submitHandler = (e) => {
      console.log("customer",customer)
      e.preventDefault();
       // POST request using axios inside useEffect React hook
       axios.post('https://localhost:7290/api/Reservation/PostReservation', {name:customer.name,surname:customer.surname,
       mail:customer.mail, phone:customer.phone, citizenId:customer.citizenId, schFlightId:flightId},{
         headers:{
           "content-type":"application/json"
         }
       })
       .then(response => navigate("../succededreservation", { replace: true }));

      console.log(customer.name);
    }
  return (
  
    <div class="container p-5">
      <main>
        <div class="pb-5 text-center">
          <img class="d-block mx-auto mb-4" src="data:image/png;base64,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
          wH0ZBJSZ05I8gAAAAASUVORK5CYII=" alt="" width="400" height="200" />


          
          <h1>Reservation Form</h1>
          <p class="lead"></p>
        </div>

        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-info">Your Flight Info</span>
              
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="fs-5 mt-3 mb-1">Departure: </h6>
                  <small className='fs-6'>{departurePort}</small>
                </div>
                <span className='fs-6'></span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="fs-5 mt-3 mb-1">Arrival: </h6>
                  <small className='fs-6'>{arrivalPort}</small>
                </div>
                <span class="text-muted"></span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="fs-5 mt-3 mb-1">Flight Date: </h6>
                  <small className='fs-6'>{depDate} - {depHour}</small>
                </div>
               
              </li>
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div>
                  <h6 class="fs-5 mt-3 mb-1 fs-7">Arrival Date: </h6>
                  <small className='fs-6'>{arrDate} - {arrHour}</small>
                </div>
                
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <h5 class="fs-4 mt-3 mb-3" >Total Price: </h5>
                <strong className='text-info mt-3 mb-3 fs-5'>{price}₺</strong>
              </li>
            </ul>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="same-address" />
                <label class="form-check-label fs-5" for="same-address">I agree on flight information*</label>
              </div>
          </div>

          <div class="col-md-7 col-lg-8 ">
            <h4 class="mb-3 text-info">Passenger Information</h4>
           
              <div class="row g-3 fs-5">
                <div class="col-sm-6 ">
                  <label for="firstName" class="form-label">First name</label>
                  <input type="text" class="form-control" id="firstName" placeholder="name" value={customer.name} name="name" onChange={handleCustomerChange} />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Last name</label>
                  <input type="text" class="form-control" id="lastName" placeholder="surname" value={customer.surname} name="surname" onChange={handleCustomerChange} />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label for="address" class="form-label">Citizen ID</label>
                  <input type="text" class="form-control" id="address" placeholder="Id:" value={customer.citizenId} name="citizenId" onChange={handleCustomerChange} />
                  <div class="invalid-feedback">
                    Please enter your citizen ID
                  </div>
                </div>

                <div class="col-12">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" value={customer.mail} name="mail" onChange={handleCustomerChange}/>
                  <div class="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>

                <div class="col-12">
                  <label for="address" class="form-label">Mobile Phone</label>
                  <input type="text" class="form-control" id="address" placeholder="0xx" value={customer.phone} name="phone" onChange={handleCustomerChange} />
                  <div class="invalid-feedback">
                    Please enter your mobile phone
                  </div>
                </div>

              </div> 

              <hr class="my-4" />  

              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="same-address" />
                <label class="form-check-label fs-5" for="same-address">I guarantee that passanger information are correct.</label>
              </div>

              <hr class="my-4"/>

              <h4 class="mb-3">Payment</h4>

              <div class="my-3 fs-5">
                <div class="form-check">
                  <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="" />
                  <label class="form-check-label" for="credit">Credit card</label>
                </div>
                <div class="form-check">
                  <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" />
                  <label class="form-check-label" for="debit">Debit card</label>
                </div>
                <div class="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" />
                  <label class="form-check-label" for="paypal">PayPal</label>
                </div>
              </div>

              <div class="row gy-3 fs-5">
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="cc-number" class="form-label">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>

              <hr class="my-4" />

                <container className="mt-5 mb-5">
                  {/* <Link to={`/succededreservation`} className="w-100 btn btn-info btn-lg" >PURCHASE</Link>  */}
                  <button type="button" className="w-100 btn btn-info btn-lg" onClick={submitHandler}>PURCHASE</button>
                </container>
            
          </div>
        </div>    
    </main>
    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">© Jan-Feb 2022 - by Sarp Bora Polat</p>
      <p class="mb-1">SunExpress Airlines - Airline Business Solutions Internship</p>
      
    </footer>
  </div>
)
}

export default ReservationPage
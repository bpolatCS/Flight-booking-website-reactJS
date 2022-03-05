import React from 'react'
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';


function SuccesPage() {
  return (

<div class="px-4 py-5 my-5 text-center">

    
<img class="d-block mx-auto mb-4" src="https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png" alt="" width="100" height="100" />
        <h1 class="display-4 fw-bold">Your reservation has been completed !</h1>
        <br />
        <h3 class="display-5 fw-bold">Thank you for flying with us!</h3>
        <br />
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-3">If you want to change your flight please contact +90 5380459212</p>
            {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> */}
                <p class="lead mb-2">Go back to home page press blue button</p>
                <Link to={`/`} className="btn btn-primary btn-lg px-4 mb-3 gap-3" >GO HOME</Link> 
                
                <br />
                <p class="lead mb-4">Go to designer information press red button</p>
                <Link to={`/about`} className="btn btn-primary btn-lg px-4 mb-3 gap-3" >GO DESIGNER PROFILE</Link> 
            {/* </div>       */}
            
           

            
        </div>
    </div>

    
    
  )
}

export default SuccesPage
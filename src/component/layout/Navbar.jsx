import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (

    <header class=" bg-info bg-gradient d-flex p-5 flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      {/* <img src="//https://cdn.cimri.io/image/1000x1000/disneyplanesuaklarelchupacabra_39588301.png" className="mr-2" width="40" height="40" /> */}
      <span class="fs-2 text-light ">ChupAirlines </span>
      </a>

      <ul class="nav nav-pills">
        <Link to='/' className='btn btn-ghost text-light btn-sm rounded-btn fs-5'>Home</Link>
        <Link to='/about' className='btn btn-ghost text-light btn-sm rounded-btn fs-5'>About Designer</Link>
      </ul>
    </header>






    // <nav className ="navbar margin-left: 3 justify-content-start navbar-expand-lg bg-secondary navbar-dark py-3 fixed-top">
    //     <div className="continer"></div>
    //     <div className="">
    //         <Link to ='/' className="navbar-brand navbar-dark ">
    //             {title}
    //         </Link>
    //     </div>

    //     <div className="flex-1 px-2 mx-2">
    //         <div className="flex justify-end">
    //             <Link to='/' 
    //             className='btn btn-ghost btn-sm rounded-btn'>
    //                 Home
    //             </Link>
    //             <Link to='/about' 
    //             className='btn btn-ghost btn-sm rounded-btn'>
    //                 About
    //             </Link>
    //         </div>
    //     </div>

    // </nav>
    
    
  )
}

Navbar.defaultProps = {
  title: 'ChupAirlines'
}

export default Navbar
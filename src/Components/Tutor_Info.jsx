import React from 'react'
import {Link} from "react-router-dom";
import PageHeader   from "./PageHeader";

import '../Styles/Tutor_info.css';

export default function LoginForm() {
  
  return (

    <div className="logo"> 
   <PageHeader/>
    
    <div id="tutor-container">
    <div className="container">
    <div className="form-body"><br></br>
        <div className="row">
               <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h1>Tutor Profile</h1><br></br>
                        <form className="requires-validation" novalidate/>

                              <div className="col-md-12">
                                <h5>Name:</h5>
                               <input className="form-control" type="text" name="name" placeholder="Full Name" required/>
                            </div> <br />

                              <div className="col-md-12">
                              <h5>Email-Address:</h5>
                                <input className="form-control" type="email" name="email" placeholder="E-mail Address" required/>
                            </div> <br />

                           <div className="col-md-12">
                           <h5>Ph.Number:</h5>
                              <input className="form-control" type="number" name="number" placeholder="Ph.Number" required/>
                           </div> <br />

                              <div className="col-md-12">
                              <h5>Enter Department:</h5>
                                <input className="form-control" type="text" name="text" placeholder="Enter Department" required/>
                            </div><br></br>
                              <div className="col-md-12">
                              <h5>More Information:</h5>
                                <input className="form-control" type="text" name="text" placeholder="More Information" required/>
                                
                            </div><br></br>
                           <div id='links'>
                            <div className="form-button mt-3">
                                  <Link to="/StudentMymeeting"><button id="submit" type="submit" className="btn btn-success  mr-5">My Meetings</button></Link>
                                  <button id="submit" type="submit" className="btn btn-success " >Save</button>
                            </div> <br></br>
                            <div className="form-button">
                                <Link to="/"><button id="submit" type="submit" className="btn btn-success">Logout</button></Link>
                            </div>
                            </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
      </div>
      </div>
    
  )
}

import React from 'react'
import '../Styles/Studentprofile.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import PageHeader from './PageHeader';
import Dashboard from './StudentDashboard';
import Footer from './Footer';
let axios = require('axios');
let Email=localStorage.getItem("email");

const userDetils = async()=>{
  try{
    var myObj =  await axios.get(`http://localhost:8082/userprofileDetails/${Email}`);
    document.getElementById ("1m").value=myObj.data[0].username;
    document.getElementById ("2m").value=myObj.data[0].mobile;
    document.getElementById ("3m").value=myObj.data[0].userid;
   
    }
    catch(error){
      console.log(error);
    }
}

function Studentprofile() {
  return (
    <div>
      <PageHeader/>
      <Dashboard/>
      <Footer/>

    </div>
    
  )
}
userDetils();

export default Studentprofile;
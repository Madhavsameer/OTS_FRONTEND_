import React from 'react'
import '../Styles/Studentprofile.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import PageHeader from './PageHeader';
let axios = require('axios');
let Email=localStorage.getItem("email");

const userDetils = async()=>{
  try{
    var myObj =  await axios.get(`http://localhost:8080/userprofileDetails/${Email}`);
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
      <div className='background1'>
        <PageHeader/>
        {/* <div className='userDetails'>
          <i class="fa-solid fa-user" id="userProf"></i>
          <p>{Email}</p>
        </div> */}
        <div className='info'>
         <form className='form-info'>
          <div>
            {/* <h1>{myObj.data[0].userid}</h1> */}
          </div>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder='Enter Name' id='1m'/> <br />
          <label htmlFor="name">MailId:</label>
          <input type="text"value={Email}placeholder='Email'/>  <br/>
          <label htmlFor="name">Mobile</label>
          <input type="text" placeholder='Mobile' id='2m'/>  <br/>
          <label htmlFor="name"> UserId</label>
          <input type="text" placeholder='UserId' id='3m'/>  <br/>
        
          <Link to="/Studentprofile"> <Button className='save'>Save</Button></Link>
          <div className='links'>
           
         <Link to="/StudentMYmeeting"> <Button>Meeting</Button></Link>
         <Link to="/"> <Button>Logout</Button></Link>
         </div>
         </form>
         </div>
         <img className='stud-img' src="/images/Studentpic.png" alt="good" width="1000px" height="900px"></img>
      </div>
  )
}
userDetils();

export default Studentprofile;
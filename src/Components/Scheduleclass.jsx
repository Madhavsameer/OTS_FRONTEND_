import  React  from "react";
import '../Styles/Scheduleclass.css';
import {Link} from "react-router-dom";
import PageHeader   from "./PageHeader";


function Scheduleclass() {
    return (
        <div className="background2">
          
          <PageHeader/>
          <img className='addpic' src="/Images/artadd.png" alt="good or bad" width="540px" height="450px"></img>
            <div className="background-container">
              <div>
            <label for="sessname"><b>Session Name:</b></label><br></br>
           <input type="text" name="name" placeholder=''/><br></br>
           <label for="about"><b>About:</b></label><br></br>
           <input type="email" name="email"  placeholder=''/><br></br>
           <br />
<label for="Sem"><b>Semester:</b></label>
<select name="sem" id="sem">
    <option value="sem1">sem1</option>
  <option value="sem2">sem2</option>
  <option value="sem3">sem3</option>
  <option value="sem4">sem4</option>
  <option value="sem5">sem5</option>
  <option value="sem6">sem6</option>
  <option value="sem7">sem7</option>
  <option value="sem8">sem8</option>
</select>
<br />
<br />
<label for="new"><b>Tutor:</b></label>
<select name="tut" id="tut">
    <option>Mr.Debendra Maharana</option>
  <option>Dr.Dhaleshwar Rao</option>
  <option>Kirtidev Mahaptro</option>
  <option>Ms.Arya Lopa</option>
  <option>Anshuman Pattnaik</option>
  <option>Abinas Panda</option>
  <option>Dr.Prashant Kumar Mohanty</option>
  <option>Dr.Anita Patra</option>
</select>
<br />
<br />
           <td><label for="time"><b>Time:</b></label></td>
        <td><input type="time"/></td>
        
        <br />
             
<label for="date"><b>Date:</b></label>
<input type="date" id="date" aria-describedby="date-format" name="date" min="2000-01-01" max="3000-01-01" />
<br />


           
          <Link  to="/Admin"> <button className="btn btn-primary" id="schedule" type="submit" >Add Schedule</button></Link>
          
    </div>
    </div>
            </div>
         )
}
export default Scheduleclass;
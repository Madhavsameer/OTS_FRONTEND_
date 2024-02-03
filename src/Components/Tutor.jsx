 import '../Styles/Tutor.css'
 import {Link} from "react-router-dom";
import { Button } from 'reactstrap';

<public></public>
 
 const Tutor = () =>{
    return(
        <div>
            <div className='tutor'>
               <img src="https://www.pngitem.com/pimgs/m/517-5177724_vector-transparent-stock-icon-svg-profile-user-profile.png" alt="profile" />
                <Link to="/Tutor_Info"> <Button className='my_profile'>MY Profile</Button></Link>
                <div className='tutor-info'>
                       <span>Deb</span> <br />
                       <span>Deb1234@gmail.com</span>
                </div>
            </div>
            <div className='bio'>
                <h3>Bio</h3>
                <p>I am a Software Technologies professor at CENTURION UNIVERSITY <br/></p>
            </div>
            <br />
            <div>
                <th>
                    <tr>
                        <td ><a href="https://madhavmeets.netlify.app" target="_blank" rel="noopener noreferrer">
        <button class='myclass'> <img src="myclass.jpeg" alt="" height="10px" /> Join classes </button> </a>
        <br /></td>
        <td ><a href="https://madhavmeets.netlify.app" target="_blank" rel="noopener noreferrer">
        <button class='myclass'> <img src="myclass.jpeg" alt="" height="10px" /> Attendance </button> </a>
        <br /></td>
        <td ><a href="https://madhavmeets.netlify.app" target="_blank" rel="noopener noreferrer">
        <button class='myclass'> <img src="myclass.jpeg" alt="" height="10px" /> Assignment </button> </a>
        <br /></td>
        
        </tr>
        </th>
            
            </div>
            <h2>Tutor Offered Courses</h2>
            
            
        </div>
    );
}

export default Tutor;
 import '../Styles/Tutor.css'
 import {Link} from "react-router-dom";
import { Button } from 'reactstrap';
 
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Consectetur quisquam quaerat harum corrupti dignissimos <br/>repudiandae, animi eius libero. Doloremque nobis omnis <br/>consectetur non quos illum temporibus tenetur reprehenderit culpa.</p>
            </div>
            <h2>Tutor Offered Courses</h2>
        </div>
    );
}

export default Tutor;
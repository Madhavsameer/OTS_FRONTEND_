import React from "react";
// import { Container } from "reactstrap";
import { BsFillPersonFill } from "react-icons/bs";

import { FaDelicious } from "react-icons/fa";

import "../Styles/Header.css";
import {Link} from "react-router-dom";


const Header = () => {
  

  return (
    
       <nav class="navbar">
        
         <div class="logo"><FaDelicious />Upturn</div>
         <ul class="nav-links">
          
           <div class="menu">
             <li><Link to ="/">Home</Link></li>
             <li><a href="#2">About</a></li>
             <li>
               <a href="#3">Courses</a>
             </li>
             
             <li><a href="#5">Contact</a></li>
             <li><Link to="/Admin"><BsFillPersonFill /></Link></li>
           </div>
         </ul>
       </nav>
  );
};

export default Header;

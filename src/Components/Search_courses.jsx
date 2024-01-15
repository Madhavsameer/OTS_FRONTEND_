import React, { useEffect, useState } from "react";
import axios from "axios";
import Page_header   from "./PageHeader";
import { Link, useParams } from "react-router-dom";
import "../Styles/Search-courses.css"


function Profile(){
    const [users, setUsers] = useState([]);

   // const { email} = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8082/getcoursenames");
      setUsers(result.data);
    };
    return(
      <>
        <Page_header/>
      <div className="container">
      <div className="py-4">
        {/* <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.coursename}</td>
                <td>{user.language}</td>
               
                
              </tr>
            ))}
          </tbody>
        </table> */}
        <h1> COURSES</h1>

{users.map((user, index) => (
            <>
            <div  className="cont">

            
            
            <div className='containerr'>
    
              <div>
             <div className="cn"><i>Course: </i> <b> {user.coursename} </b></div>
             <div><i>Coursetype: </i> <b> {user.coursetype} </b></div>
             <div><i>Language: </i> <b>{user.language}</b></div>
             <div><i>Description: </i> <b>{user.description}</b></div>
             <div><i>Enrolledcount: </i> <b>{user.enrolledcount}</b></div>
             <div><i>Skilllevel: </i> <b>{user.skilllevel}</b></div>
             <div><i>Tutorname: </i> <b>{user.instructorname}</b></div>
             <div><i>Institution: </i> <b>{user.instructorinstitution}</b></div>
             <div><i>WebsiteDocument: </i><b> <a href={user.websiteurl}>{user.websiteurl}</a></b></div>
             <div><i>Youtube(videos): </i> <b><a href={user.youtubeurl}>{user.youtubeurl}</a></b></div>
             </div>
             </div>
             <Link to="/Media"><button> VIEW COURSE</button></Link>
             </div>
            </>
            


             

            ))}

      
      </div>
     
    </div>
    </>
    );
}

export default Profile;
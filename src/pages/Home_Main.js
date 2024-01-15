import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbarr from "../layout/Navbarr";
import "./Home.css";
import AboutUs from "../Components/AboutUs";
import Footer from "../layout/Footer"
import Type from "./Type";



export default function Home() {

  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    // <div className="container">
    //   <div className="py-4">
    //     <table className="table border shadow">
    //       <thead>
    //         <tr>
    //           <th scope="col">S.N</th>
    //           <th scope="col">Name</th>
    //           <th scope="col">Username</th>
    //           <th scope="col">Email</th>
    //           <th scope="col">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map((user, index) => (
    //           <tr>
    //             <th scope="row" key={index}>
    //               {index + 1}
    //             </th>
    //             <td>{user.name}</td>
    //             <td>{user.username}</td>
    //             <td>{user.email}</td>
    //             <td>
    //               <Link
    //                 className="btn btn-primary mx-2"
    //                 to={`/viewuser/${user.id}`}
    //               >
    //                 View
    //               </Link>
    //               <Link
    //                 className="btn btn-outline-primary mx-2"
    //                 to={`/edituser/${user.id}`}
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 className="btn btn-danger mx-2"
    //                 onClick={() => deleteUser(user.id)}
    //               >
    //                 Delete
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="home">  
    <Navbarr/>

         <video src='video1.mp4' autoPlay loop muted />
         
         <div className="overlay">


         
          
          <h1>
            <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

          </h1>
          
         
         
      </div>
      <div>
      
      <AboutUs/>
      </div>
      <div>
      <img src="otsfe3.jpg"></img>
      </div>
      
      
      {/* <div className="aboute">
        <h1>*Quick Learning</h1>
        <h1>*All Time Support</h1>
        <h1>*Expert Tutors</h1>
       


      </div> */}
      
      <div>
      <Footer/>
      </div>


      </div>
      
  );
}

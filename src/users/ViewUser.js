// import axios from "axios";
// import React, { useEffect,useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export default function ViewUser() {
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { email } = useParams();

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8080/userprofileDetails${email}`);
//     setUser(result.data);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">User Details</h2>

//           <div className="card">
//             <div className="card-header">
//               Details of user id : {user.id}
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">
//                   <b>Name:</b>
//                   {user.name}
//                 </li>
//                 <li className="list-group-item">
//                   <b>UserName:</b>
//                   {user.username}
//                 </li>
//                 <li className="list-group-item">
//                   <b>Email:</b>
//                   {user.email}
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <Link className="btn btn-primary my-2" to={"/"}>
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import Header from "../Components/Header";

// const UersList = () => {
//   const profilePIcDefault =
//     "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
//   return (
//     <div>
//       <Header />
//       <div className="container content">
//         <div className="border mt-4 p-4">
//           <h3 className="text-center bg-info p-2 mb-3">
//             Welcome To User Management System
//           </h3>
//           <div className="row">
//             <div className="col-md-4">
//               <div className="d-flex flex-column align-items-center ">
//                 <img
//                   src={
//                     localStorage.getItem("img")
//                       ? localStorage.getItem("img")
//                       : profilePIcDefault
//                   }
//                   alt="profile_pic"
//                   className="img-thumbnail"
//                   height={200}
//                   width={200}
//                 />
//               </div>
//             </div>
//             <div className="col-md-6 d-flex align-items-center">
//               <div className="ms-4">
//                 <h4>
//                   Name :{" "}
//                   {localStorage.getItem("name")
//                     ? localStorage.getItem("name")
//                     : "NA"}
//                 </h4>
//                 <h4>
//                   Email :{" "}
//                   {localStorage.getItem("email")
//                     ? localStorage.getItem("email")
//                     : "NA"}
//                 </h4>
//                 <h4>
//                   Gender :{" "}
//                   {localStorage.getItem("gender")
//                     ? localStorage.getItem("gender")
//                     : "NA"}
//                 </h4>
//                 <p>
//                   Accepted Terms And Conditions :{" "}
//                   {localStorage.getItem("terms") ? "YES" : "No"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UersList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { email} = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/professorlist");
    setUsers(result.data);
  };

  const deleteUser = async (email) => {
    await axios.delete(`http://localhost:8082/updateuser${email}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {/* <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.email}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.email}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.email)}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Page_header   from "../Components/PageHeader";
export default function Home() {
  const [users, setUsers] = useState([]);

  const { email} = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/userlist");
    setUsers(result.data);
  };

  const deleteUser = async (email) => {
    await axios.delete(`http://localhost:8082/updateuser${email}`);
    loadUsers();
  };

  return (
    <>
    <Page_header/>
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
                <td>
                  {/* <Link
                    className="btn btn-primary mx-2"
                    to={`/#/${user.email}`}
                  >
                    View
                  </Link> */}
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/:email`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.email)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
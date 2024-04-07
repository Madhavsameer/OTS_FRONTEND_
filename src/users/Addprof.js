import axios from "axios";
import React, { useState } from "react";
import "./Adduser.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    status: "",
    professorname: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    degreecompleted: "",
    department:"",
    experience:"",
    instutionname:"",
  });

  const { status, professorname, email,gender,mobile,password,degreecompleted,department,experience,instutionname } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
   try{ await axios.post("http://localhost:8082/registerprofessor", user);
    navigate("/Tutor_list");
  }

  catch{
      let a = document.getElementById("er");
      a.innerHTML = "This   "+ email +" is already exists" ;
      a.style.color="red";
      a.style.fontWeight=700;
      
    }
  };

  return (
    <>
    <Header/>
    <div className="reg">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <i class="fa-solid fa-user"></i>
          <h2 className="text-centerz">Register Professor</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="regele">

            
            <div className="mb-3">
              <label htmlFor="Professorname" className="form-label">
                Professorname
              </label>
              <input
                type={"text"}
                required
                className="form-control"
                placeholder="Enter your username"
                name="professorname"
                value={professorname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"email"}
                required
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Status" className="form-label">
                Status
              </label>
              <input
                type={"text"}
                required
                className="form-control"
                placeholder="Enter your Address"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Gender" className="form-label">
                Gender
              </label>
              <input
                type={"text"}
                required
                className="form-control"
                placeholder="Enter your gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Mobile" className="form-label">
                Mobile
              </label>
              <input
                type={"text"}
                required
                className="form-control"
                placeholder="Enter your Mobile Number"
                name="mobile"
                value={mobile}
                maxLength={10}
                minLength={10}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type={"Password"}
                required
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Degreecompleted" className="form-label">
                Degreecompleted
              </label>
              <input
                type={"text"}
                className="form-control"
                required
                placeholder="Enter your degreecompleted"
                name="degreecompleted"
                value={degreecompleted}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Experience" className="form-label">
                Experience
              </label>
              <input
                type={"text"}
                className="form-control"
                required
                placeholder="Enter your experience"
                name="experience"
                value={experience}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Department" className="form-label">
                Department
              </label>
              <input
                type={"text"}
                className="form-control"
                required
                placeholder="Enter your department"
                name="department"
                value={department}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Instutionname" className="form-label">
                Instutionname
              </label>
              <input
                type={"text"}
                className="form-control"
                required
                placeholder="Enter your instutionname"
                name="instutionname"
                value={instutionname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
          
           <button type="submit" className="btn btn-outline-primary" id="reg-submit">
              Submit
            </button>
            <br />
            <Link className="btn btn-outline-danger mx-2" id="reg-cancel" to="/">
              Cancel
            </Link>
            </div>
            <br/>  
            <p id="er"></p>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}
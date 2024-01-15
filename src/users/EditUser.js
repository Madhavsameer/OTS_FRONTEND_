import axios from "axios";
import React, { useState } from "react";
import "./Adduser.css";
import { Link, useNavigate } from "react-router-dom";
import Page_header   from "../Components/PageHeader";

export default function EditStudent() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    address: "",
    username: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    profession: "",
  });

  const { address, username, email,gender,mobile,password,profession } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
   try{ await axios.post("http://localhost:8082/upuser", user);
    navigate("/studentlist/:email");
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
    <Page_header/>
    <div className="regs">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <i class="fa-solid fa-user"></i>
          <h2 className="text-centerz">Edit Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                required
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
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
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                required
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
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
            {/* <div className="mb-3">
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
            </div> */}
            <div className="mb-3">
              <label htmlFor="Profession" className="form-label">
                Profession
              </label>
              <input
                type={"text"}
                className="form-control"
                required
                placeholder="Enter your Proffession"
                name="profession"
                value={profession}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          
           <button type="submit" className="btn btn-outline-primary" id="reg-submits">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" id="reg-cancels" to="/studentlist/:email">
              Cancel
            </Link>
            <br/>  
            <p id="er"></p>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}
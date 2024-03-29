import axios from "axios";
import "../App.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbarr from "../layout/Navbarr";
import "./FindUser.css";
import { Navbar } from "reactstrap";
import OAuthCallback from "../Components/OAuthCallback";

export default function FindUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8082/loginuser`, user);
      navigate("/StudentProfile");
    } catch {
      let a = document.getElementById("er");

      a.innerHTML = "Entered Wrong Cerdintals";
      a.style.color = "red";
      a.style.fontWeight = 700;
    }
  };
  const onSubmita = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8082/loginprofessor`, user);
      navigate("/TutorProfile");
    } catch {
      let a = document.getElementById("er");

      a.innerHTML = "Entered Wrong Cerdintals";
      a.style.color = "red";
      a.style.fontWeight = 700;
    }
  };
  const onSubmitb = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8082/loginadmin`, user);
      navigate("/Home");
    } catch {
      let a = document.getElementById("er");

      a.innerHTML = "Entered Wrong Cerdintals";
      a.style.color = "red";
      a.style.fontWeight = 700;
    }
  };
  const [active, setActive] = useState("Admin");
  function adminForm() {
    return (
      <>
        <div>
          <h2>Login Admin</h2>
          <div className="form">
            <form onSubmit={(e) => onSubmitb(e)}>
              <div className="inputt">
                <div>
                  <label>User Email </label>
                  <input
                    required
                    placeholder="Enter your email id"
                    type={"text"}
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label>Password </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your passsword"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="button-container" id="loginbutt">
                <input type="submit" />
              </div>
              <p id="er"></p>
            </form>
          </div>
        </div>
      </>
    );
  }
  function studentForm() {
    return (
      <div>
        <h2>Login student</h2>
        <div className="form">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="inputt">
              <div>
                <label>User Email </label>
                <input
                  required
                  placeholder="Enter your email id"
                  type={"text"}
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label>Password </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your passsword"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
            <p id="er"></p>
          </form>
        </div>
        <div>
          <OAuthCallback/>
        </div>
      </div>
    );
  }
  function tutorForm() {
    return (
      <div>
        <h2>Login tutor</h2>
        <div className="form">
          <form onSubmit={(e) => onSubmita(e)}>
            <div className="inputt">
              <div>
                <label>User Email </label>
                <input
                  required
                  placeholder="Enter your email id"
                  type={"text"}
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label>Password </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your passsword"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
            <p id="er"></p>
          </form>
        </div>
      </div>
    );
  }

  return (
    
    <>
      <Navbarr />
      <div className="App">
        <div className="card-btns">
          <button
            onClick={() => {
              setActive("Admin");
            }}
          >
            Admin
          </button>
          <button
            onClick={() => {
              setActive("Tutor");
              
            }}
          >
            Tutor
          </button>
          <button
            onClick={() => {
              setActive("Student");
            }}
          >
            Student
          </button>
        </div>
        <div className="actual-card">
          {active === "Admin" && adminForm()}
          {active === "Tutor" && tutorForm()}
          {active === "Student" && studentForm()}
        </div>
      </div>
    </>
  );
}
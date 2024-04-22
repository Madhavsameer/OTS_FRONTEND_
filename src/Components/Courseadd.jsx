import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Courseadd.css';

function Courseadd() {
    let navigate = useNavigate();

  const [user, setUser] = useState({
    coursename:"",
   coursetype:"",
   description:"",
   enrolleddate:"",
   instructorinstitution:"",
   instructorname:"",
   language:"",
   skilllevel:"",
   websiteurl:"",
   youtubeurl:"",
  });

  const { coursename,coursetype,description,enrolleddate,instructorinstitution,instructorname,language,skilllevel,websiteurl,youtubeurl } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
   try{ await axios.post("http://localhost:8082/addCourse", user);
    navigate("/Search_courses");
  }

  catch{
      let a = document.getElementById("er");
      a.innerHTML = "This   "+ instructorname +" is already exists" ;
      a.style.color="red";
      a.style.fontWeight=700;
      
    }
  };
    return (
        <div className="reg">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <i class="fa-solid fa-user"></i>
            <h2 className="text-centerz">Register Course</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="regele">
              <div className="mb-3">
                <label htmlFor="Coursename" className="form-label">
                  Coursename
                </label>
                <input
                  type={"text"}
                  required
                  className="form-control"
                  placeholder="Enter your username"
                  name="coursename"
                  value={coursename}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="coursetype" className="form-label">
                  coursetype
                </label>
                <input
                  type={"text"}
                  required
                  className="form-control"
                  placeholder="Enter yourcoursetype"
                  name="coursetype"
                  value={coursetype}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  description
                </label>
                <input
                  type={"text"}
                  required
                  className="form-control"
                  placeholder="Enter your description"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="enrolleddate" className="form-label">
                  Enrolled date
                </label>
                <input
                  type={"date"}
                  required
                  className="form-control"
                  placeholder="Enter your enrolleddate"
                  name="enrolleddate"
                  value={enrolleddate}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="instructorinstitution" className="form-label">
                instructorinstitution
                </label>
                <input
                  type={"text"}
                  required
                  className="form-control"
                  placeholder="Enter yourinstructorinstitution"
                  name="instructorinstitution"
                  value={instructorinstitution}
                
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="instructorname" className="form-label">
                instructorname
                </label>
                <input
                  type={"text"}
                  required
                  className="form-control"
                  placeholder="Enter your  instructorname"
                  name="instructorname"
                  value={instructorname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="language" className="form-label">
                language
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  required
                  placeholder="Enter your  language"
                  name="language"
                  value={ language}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="skilllevel" className="form-label">
                skilllevel
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  required
                  placeholder="Enter your skilllevel"
                  name="skilllevel"
                  value={skilllevel}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="websiteurl" className="form-label">
                websiteurl
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  required
                  placeholder="Enter your websiteurl"
                  name="websiteurl"
                  value={websiteurl}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="youtubeurl" className="form-label">
                youtubeurl
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  required
                  placeholder="Enter your websiteurl"
                  name="youtubeurl"
                  value={youtubeurl}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            
             <button type="submit" className="btn btn-outline-primary" id="reg-submit">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" id="reg-cancel" to="/">
                Cancel
              </Link>
              <br/>  
              <p id="er"></p>
              </div>
            </form>
          </div>
          
        </div>
      </div>
         )
}
export default Courseadd;
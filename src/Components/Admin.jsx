import '../Styles/Admin.css';
import{Link } from "react-router-dom";
import Page_header   from "./PageHeader";
import AddCourse from "../assets/AddCourse.png"; 
import assignmentsImage from "../assets/assignment.jpeg";
import feedbackImage from "../assets/feedback.jpeg";
import prof from "../assets/Proffesors.png";
import Tutors from "../assets/Tutors.png";
import logout from "../assets/logout.jpg";
import assign from "../assets/assign.png";
import myclass from "../assets/myclass.jpeg";
import exam from "../assets/exam.jpeg";
import Users from "../assets/Users.png";
import dashboard from "../Styles/dashboard.css";
import Footer from "../layout/Footer.js";


export default function Admin()
{
    return (
        <div>
            <Page_header/>
            <div className="dashboard-container">
      <h2>Welcome Admin</h2>
      <div className="options" style={{ display: "flex", flexWrap: "wrap" }}>
        <a
          href="https://madhavmeet.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Link to="attendance" className="option-link" target="_blank" rel="noopener noreferrer" > */}
          <div className="option">
            <img
              src={myclass}
              alt="Attendance"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Schedule Class</p>
          </div>
          {/* </Link> */}
        </a>

        <Link to="/AddCourse" className="option-link">
          <div className="option">
            <img
              src={AddCourse}
              alt="Add Course"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Add Course</p>
          </div>
        </Link>
        <Link to="/addprof" className="option-link">
          <div className="option">
            <img
              src={prof}
              alt="Assignments"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Add Profesor</p>
          </div>
        </Link>
        <Link to="/Student_List" className="option-link">
          <div className="option">
            <img
              src={Users}
              alt="Assignments"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Students List</p>
          </div>
        </Link>
        <Link to="/FeedbackList" className="option-link">
          <div className="option">
            <img
              src={feedbackImage}
              alt="Feedback"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Feedback List</p>
          </div>
        </Link>
        <Link to="/Tutor_List" className="option-link">
          <div className="option">
            <img
              src={Tutors}
              alt="Study Material"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Tutor List</p>
          </div>
        </Link>

        <Link to="/AdminTestScheduler" className="option-link">
          <div className="option">
            <img
              src={exam}
              alt="Study Material"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Schedule Test</p>
          </div>
        </Link>

        <Link to="/" className="option-link">
          <div className="option">
            <img
              src={logout}
              alt="Study Material"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Log Out</p>
          </div>
        </Link>
      </div>
            
        </div>
        <Footer/>
        
        </div>
    );
}
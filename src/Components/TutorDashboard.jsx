import React from "react";
import { Link } from "react-router-dom";
import attendanceImage from "./attendance.png"; // Import your images
// import joinClassesImage from './join-classes.png';
import assignmentsImage from "./assignment.jpeg";
import feedbackImage from "./feedback.jpeg";
import rl from "./rl.png";
import logout from "./logout.jpg";
import UploadWork from "./UploadWork";
import myclass from "./myclass.jpeg";
import dashboard from "../Styles/dashboard.css";
import FeedbackList from "./FeedbackList";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <div className="options" style={{ display: "flex", flexWrap: "wrap" }}>
        <a
          href="https://madhavmeets.netlify.app"
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
            <p>Join Class</p>
          </div>
          {/* </Link> */}
        </a>

        <Link to="/tutorattendance" className="option-link">
          <div className="option">
            <img
              src={attendanceImage}
              alt="Join Classes"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Attendance</p>
          </div>
        </Link>
        <Link to="/ViewAssgn" className="option-link">
          <div className="option">
            <img
              src={assignmentsImage}
              alt="Assignments"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Assignments</p>
          </div>
        </Link>
        <Link to="/FeedbackList" className="option-link">
          <div className="option">
            <img
              src={feedbackImage}
              alt="Feedback"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Feedback</p>
          </div>
        </Link>
        <Link to="/FileUpload" className="option-link">
          <div className="option">
            <img
              src={rl}
              alt="Study Material"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Study Material</p>
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
      //hyjhcghgjhgfhjk
    </div>
  );
}

export default Dashboard;

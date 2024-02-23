import React from "react";
import { Link } from "react-router-dom";
import attendanceImage from "./attendance.png"; // Import your images
// import joinClassesImage from './join-classes.png';
import assignmentsImage from "./assignment.jpeg";
import feedbackImage from "./feedback.jpeg";
import studyMaterialImage from "./studymaterial.png";
import UploadWork from "./UploadWork";
import myclass from "./myclass.jpeg";
import dashboard from "../Styles/dashboard.css";
import FeedbackForm from "./FeedbackForm";

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

        <Link to="/attendance" className="option-link">
          <div className="option">
            <img
              src={attendanceImage}
              alt="Join Classes"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Attendance</p>
          </div>
        </Link>
        <Link to="/UploadWork" className="option-link">
          <div className="option">
            <img
              src={assignmentsImage}
              alt="Assignments"
              //hgbghj
              style={{ width: "100px", height: "100px" }}
            />
            <p>Assignments</p>
          </div>
        </Link>
        <Link to="/FeedbackForm" className="option-link">
          <div className="option">
            <img
              src={feedbackImage}
              alt="Feedback"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Feedback</p>
          </div>
        </Link>
        <Link to="/VideoList" className="option-link">
          <div className="option">
            <img
              src={studyMaterialImage}
              alt="Study Material"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Study Material</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

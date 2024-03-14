import React from "react";
import { Link } from "react-router-dom";
import attendanceImage from "./attendance.png"; // Import your images

import assignmentsImage from "./assignment.jpeg";
import feedbackImage from "./feedback.jpeg";
import studyMaterialImage from "./studymaterial.png";
import rl from "./rl.png"
import logout from "./logout.jpg"

import myclass from "./myclass.jpeg";


function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard Madhav😊</h2>
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
        <Link to="/ListNotes" className="option-link">
          <div className="option">
            <img
              src={assignmentsImage}
              alt="Assignments"
              //hgbghj
              style={{ width: "100px", height: "100px" }}
            />
            <p>Notes</p>
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
        <Link to="/ListVideos" className="option-link">
          <div className="option">
            <img
              src={rl}
              alt="Study Material"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Recorded Lectures</p>
          </div>
        </Link>
        <Link to="/StudentGrades" className="option-link">
          <div className="option">
            <img
              src={studyMaterialImage}
              alt="Study Material"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Report Card</p>
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
  );
}

export default Dashboard;

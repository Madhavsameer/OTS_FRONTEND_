import React from 'react';
import { Link } from 'react-router-dom';
// import attendanceImage from './attendance.png'; // Import your images
// import joinClassesImage from './join-classes.png';
// import assignmentsImage from './assignments.png';
// import feedbackImage from './feedback.png';
// import studyMaterialImage from './study-material.png';
import myclass from './myclass.jpeg';
import dashboard from '../Styles/dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h2>Welcome to Your Dashboard</h2>
            <div className="options" style={{display: 'flex' ,flexWrap: 'wrap'}}>
                
                <a href="https://madhavmeet.netlify.app" target="_blank" rel="noopener noreferrer">
                  {/* <Link to="attendance" className="option-link" target="_blank" rel="noopener noreferrer" > */}
                    <div className="option">
                        <img src={myclass} alt="Attendance" style={{ width: '100px', height: '100px' }}/>
                        <p>Join Class</p>
                    </div>
                    {/* </Link> */}
                    </a>
               
                <Link to="/join-classes" className="option-link">
                    <div className="option">
                        <img src={myclass} alt="Join Classes" style={{ width: '100px', height: '100px' }}/>
                        <p>Attendance</p>
                    </div>
                </Link>
                <Link to="/assignments" className="option-link">
                    <div className="option">
                        <img src={myclass} alt="Assignments" style={{ width: '100px', height: '100px' }}/>
                        <p>Assignments</p>
                    </div>
                </Link>
                <Link to="/feedback" className="option-link">
                    <div className="option">
                        <img src={myclass} alt="Feedback" style={{ width: '100px', height: '100px' }} />
                        <p>Feedback</p>
                    </div>
                </Link>
                <Link to="/study-material" className="option-link">
                    <div className="option">
                        <img src={myclass} alt="Study Material" style={{ width: '100px', height: '100px' }} />
                        <p>Study Material</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;

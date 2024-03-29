import '../Styles/Admin.css';
import{Link } from "react-router-dom";
import Page_header   from "./PageHeader";

export default function Admin()
{
    return (
        <div>
            <Page_header/>
            <h1 id='myadmin'>Admin Profile</h1>
            <div className="Admin_container">
            
                {/* <div className="main_left">
                    <img src="https://bissafety.com/wp-content/uploads/2020/05/Man-taking-chainsaw-course-flattened-Shoulder-fixed-cropped-e1588020944198.png" alt="admin"/>
                </div> */}
                <div className="main_right">
                    <div className="profile-box">
                        
                        <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" class="adminimg" alt="adminImage" />
                        <Link to="/AddCourse"><button>Add Course</button></Link>

                        {/* <Link to ="/AddSchedule"><button>Add Class Schedule</button></Link> */}
                        <a href="https://madhavmeet.netlify.app" target="_blank" rel="noopener noreferrer">
        <button>Add Class Schedule</button>
      </a>
                        
        
                        
                        
                        <Link to="/FeedbackList"><button>View Feedback</button></Link>
                        
                        <Link to ="/addprof"><button>ADD PROFFESOR</button></Link>
                        <Link to ="/Student_list"><button>Users</button></Link>
                        <Link to ="/Tutor_list"><button>Tutors</button></Link>
                        <Link to ="/"><button>Logout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
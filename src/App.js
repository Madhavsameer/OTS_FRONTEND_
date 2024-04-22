import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ZHome from "./Zego/ZHome";
import Room from "./Room";

import Search_courses from "./Components/Search_courses"; 
import Studentprofile from "./Components/Studentprofile";
import StudentMYmeeting from "./Components/StudentMYmeeting";
import OnlineMeeting from "./Components/OnlineMeeting";
import UploadWork from "./Components/UploadWork";
import ViewAssess from "./Components/ViewAssess";
import Tutor_Info from "./Components/Tutor_Info";
import TutorProfile from "./Components/TutorProfile";
import Admin from "./Components/Admin";
import Courseadd from "./Components/Courseadd";
import Scheduleclass from "./Components/Scheduleclass";
import About_course from "./Components/About_course";
import Video from "./Components/Video";
import Home from "./Components/Home";
import Feedback from "./Components/Feedback";
import Student_List from "./Components/Student_List";
import Tutor_List from "./Components/Tutor_List";
import Addprof from "./users/Addprof";
import Media from "./Components/Media";
import StudentTestList from "./Components/StudentTestList";
import AdminTestScheduler from "./Components/AdminTestScheduler";
//hii

import Home_Main from "./pages/Home_Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import FindUser from "./users/FindUser";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";


import Attendance from "./Components/Attendance";
import StudentAttendance from "./Components/StudentAttendance";
import StudentGrades from "./Components/StudentGrades";
import ListVideos from "./Components/ListVideos";
import UploadVideos from "./Components/UploadVideos";
import ListNotes from "./Components/ListNotes";
import UploadNotes from "./Components/UploadNotes";
import ListAssignment from "./Components/ListAssignment";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbarr /> */}

        <Routes>
          <Route exact path="/" element={<Home_Main />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/finduser" element={<FindUser />} />
          <Route exact path="/Student_list" element={<Student_List />} />
          <Route exact path="/Tutor_list" element={<Tutor_List />} />
          <Route exact path="/edituser/:email" element={<EditUser />} />
          <Route exact path="/viewuser/:email" element={<ViewUser />} />
          <Route exact path="/addprof" element={<Addprof />} />

          <Route path="/Search_courses" element={<Search_courses />} />
          <Route path="/Aboutcourse" element={<About_course />} />
          <Route path="/Video" element={<Video />} />

          <Route path="/Studentprofile" element={<Studentprofile />} />
          <Route path="/ViewAssgn" element={<ViewAssess />} />
          <Route path="/Onlinemeeting" element={<OnlineMeeting />} />
          <Route path="/UploadWork" element={<UploadWork />} />

          <Route path="/StudentMYmeeting" element={<StudentMYmeeting />} />

          <Route path="/Tutor_Info" element={<Tutor_Info />} />
          <Route path="/TutorProfile" element={<TutorProfile />} />

          <Route path="/Admin" element={<Admin />} />
          <Route path="/AddCourse" element={<Courseadd />} />
          <Route path="/AddSchedule" element={<Scheduleclass />} />
          <Route path="/Feedback" element={<Feedback />} />

          <Route path="/meet" element={<ZHome />} />
          <Route path="/room/:roomID" element={<Room />} />
          <Route path="/Media" element={<Media />} />

          <Route exact path="/feedbackform" element={<FeedbackForm />} />
          <Route exact path="/feedbacklist" element={<FeedbackList />} />

          
          <Route exact path="/Attendance" element={<Attendance />} />
          <Route exact path="/StudentAttendance" element={<StudentAttendance />} />
          <Route exact path="/studentgrades" element={<StudentGrades />} />
          <Route exact path="/uploadvideos" element={<UploadVideos />} />
          <Route exact path="/listvideos" element={<ListVideos />} />
          <Route exact path="/uploadnotes" element={<UploadNotes />} />
          <Route exact path="/listnotes" element={<ListNotes />} />
          <Route exact path="/listassignment" element={<ListAssignment />} />
          <Route exact path="/AdminTestScheduler" element={<AdminTestScheduler />} />
          <Route exact path="/StudentTestList" element={<StudentTestList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

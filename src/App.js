import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ZHome from "./Zego/ZHome";
import Room from "./Room";

import Search_courses from './Components/Search_courses' ;//prblm
import Studentprofile from "./Components/Studentprofile";
import StudentMYmeeting from "./Components/StudentMYmeeting";
 import OnlineMeeting from "./Components/OnlineMeeting";
import UploadWork from "./Components/UploadWork";
 import ViewAssess from "./Components/ViewAssess";
 import Tutor_Info from "./Components/Tutor_Info"; 
 import TutorProfile from './Components/TutorProfile';
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




import Home_Main from "./pages/Home_Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import FindUser from "./users/FindUser";
//hii


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
          <Route exact path="/Student_list" element={<Student_List/>}/>
          <Route exact path="/Tutor_list" element={<Tutor_List/>}/>
          <Route exact path="/edituser/:email" element={<EditUser />} />
          <Route exact path="/viewuser/:email" element={<ViewUser />} />
          <Route exact path="/addprof" element={<Addprof />} />



          <Route path="/Search_courses" element={<Search_courses />} />
        <Route path="/Aboutcourse" element={<About_course />} />
        <Route path="/Video" element={<Video />} />





        <Route path="/Studentprofile" element={<Studentprofile />} />
        <Route path="/ViewAssgn" element={<ViewAssess/>} />
        <Route path="/Onlinemeeting" element={<OnlineMeeting />} />
        <Route path="/Upload" element={<UploadWork />} />
        
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
       
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;



// {
//   "email":"naseersonu3@gmail.com",
//   "username":"Abdul",
//   "gender":"male",
//   "address":"src",
//   "mobile":"7077469273",
//   "password":"123456",
//   "profession":"student"
// }

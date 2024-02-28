import React from "react";
import tutorattendance from "../Styles/tutorattendance.css";

function tutor_attendance() {
  return (
    <div class="container">
      <h2>Tutor Attendance Tracker</h2>
      <form id="attendanceForm">
        <div class="form-group">
          <label for="studentName">Student Name:</label>
          <input type="text" id="studentName" name="studentName" required />
        </div>
        <div class="form-group">
          <label for="attendanceStatus">Attendance Status:</label>
          <select id="attendanceStatus" name="attendanceStatus">
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <div class="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>

      <div id="attendanceTable">
        <h3>Attendance Records</h3>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Attendance Status</th>
            </tr>
          </thead>
          <tbody id="attendanceBody"></tbody>
        </table>
      </div>
    </div>
  );
}

export default tutor_attendance;

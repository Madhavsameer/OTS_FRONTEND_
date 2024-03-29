import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/AllAttendance.css'; // Import CSS file for styling

const AllAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/attendance/madhav sameer')
      .then(response => {
        // Calculate attendance status based on duration
        const updatedAttendanceData = response.data.map(record => ({
          ...record,
          attendanceStatus: calculateAttendanceStatus(record.attendedDuration)
        }));
        setAttendanceData(updatedAttendanceData);
      })
      .catch(error => {
        console.error('Error fetching all attendance:', error);
      });
  }, []);

  // Function to calculate attendance status
  const calculateAttendanceStatus = (duration) => {
    const percentage = parseFloat(duration); // Assuming duration is in minutes
    return percentage >= 75 ? 'Present' : 'Absent';
  };

  return (
    <div>
      <h2>Your Attendance Record of Previous Classes are:-
        
      </h2>
      <div className="card-container">
        {attendanceData.map(record => (
          <div
            key={record.id}
            className={`card ${record.attendanceStatus === 'Present' ? 'present' : 'absent'}`}
          >
            <p><strong>Name:</strong> {record.participantName}</p>
            <p><strong>Attendance Duration:</strong> {record.attendedDuration}</p>
            <p><strong>Attendance Status:</strong> {record.attendanceStatus}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAttendance;

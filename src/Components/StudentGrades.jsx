import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/StudentReport.css';

function StudentGrades() {
  const [regNo, setRegNo] = useState('');
  const [grades, setGrades] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [cgpa, setCGPA] = useState(0);

  const gradeToCGPA = {
    'O': 10,
    'E': 9,
    'A': 8,
    'B': 7,
    'C': 6,
    'D': 5,
    'F': 0,
    'S': 0,
    'M': 0
  };

  const calculateCGPA = () => {
    let totalCGPAValue = 0;
    let gradeCount = 0;

    grades.forEach(grade => {
      if (gradeToCGPA[grade.grade] !== undefined) {
        totalCGPAValue += gradeToCGPA[grade.grade];
        gradeCount++;
      } else {
        console.error(`Invalid grade encountered: ${grade.grade}`);
      }
    });

    if (gradeCount !== 0) {
      const calculatedCGPA = totalCGPAValue / gradeCount;
      setCGPA(calculatedCGPA.toFixed(2)); // Keeping it to 2 decimal places
    } else {
      console.error("No valid grades found. Unable to calculate CGPA.");
    }
  };

  

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8082/grades/${regNo}`);
      setGrades(response.data);
      setStudentName(response.data[0]?.name || '');
      setRegistrationNumber(response.data[0]?.regNo || '');
      calculateCGPA();
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setRegNo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <h2 id='repmess'>Student Grade Sheet</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Registration Number:
          <input type="text" value={regNo} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {studentName && registrationNumber && (
        <div>
          <p>Name: {studentName}</p>
          <p>Registration Number: {registrationNumber}</p>
        </div>
      )}

      
      <button className="print-button" onClick={handlePrint}>Print</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Type</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{grade.subjectCode}</td>
                  <td>{grade.subjectName}</td>
                  <td>{grade.type}</td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>CGPA: {cgpa}</p>
        </div>
      )}
    </div>
  );
}

export default StudentGrades;

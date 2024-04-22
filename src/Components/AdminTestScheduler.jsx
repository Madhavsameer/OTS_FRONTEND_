import React, { useState } from 'react';
import axios from 'axios';

const AdminTestScheduler = () => {
    const [test, setTest] = useState({
        testName: '',
        dateTime: '',
        durationMinutes: 60 // default duration
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTest({ ...test, [name]: value });
    };

    const handleScheduleTest = () => {
        axios.post('http://localhost:8082/api/tests/schedule', test)
            .then(response => {
                alert('Test scheduled successfully:', response.data);
                // Add any success notification or redirection logic here
            })
            .catch(error => {
                console.error('Error scheduling test:', error);
                // Handle error (e.g., show error message)
            });
    };

    return (
        <div>
            <h2>Schedule Test</h2>
            <form>
                <label>Test Name:</label>
                <input type="text" name="testName" value={test.testName} onChange={handleInputChange} required />

                <label>Date & Time:</label>
                <input type="datetime-local" name="dateTime" value={test.dateTime} onChange={handleInputChange} required />

                <label>Duration (minutes):</label>
                <input type="number" name="durationMinutes" value={test.durationMinutes} onChange={handleInputChange} required />

                <label>Test Link:</label>
                <input type="text" name="testLink" value={test.testLink} onChange={handleInputChange} required />

                <button type="button" onClick={handleScheduleTest}>Schedule Test</button>
            </form>
        </div>
    );
};

export default AdminTestScheduler;

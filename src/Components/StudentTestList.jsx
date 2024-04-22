import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentTestList = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/api/tests/active')
            .then(response => {
                setTests(response.data);
            })
            .catch(error => {
                console.error('Error fetching active tests:', error);
                // Handle error (e.g., show error message)
            });
    }, []);

    return (
        <div>
            <h2>Upcoming Tests</h2>
            <ul>
                {tests.map(test => (
                    <li key={test.id}>
                        <strong>{test.testName}</strong>
                        <br />
                        Date & Time: {test.dateTime}
                        <br />
                        Duration: {test.durationMinutes} minutes
                        
                        <button onClick={() => window.open(test.testLink, '_blank', 'noopener noreferrer')}>
    Start Test
</button>
      
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqYTLw0A2ZwENnwrJnBMvGjz18193EnPctX7w1UnFvHsVDnw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
        <button>Start Test</button>
      </a>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentTestList;

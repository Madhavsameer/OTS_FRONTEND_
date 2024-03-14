// FeedbackList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/FeedbackList.css';  // Import your CSS file


const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:8082/api/feedback/get');
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };
        fetchFeedbacks();
    }, []);

    return (
        <div>
            
        <div className="feedback-list-container">
            <h2>Feedbacks</h2>
            <ul className="feedback-list">
                {feedbacks.map((feedback) => (
                    <li key={feedback.id} className="feedback-item">
                        <p className="feedback-message">{feedback.message}</p>
                        <div className="feedback-rating">
                            <span>Rating:</span>
                            <div className="star-rating">
                                {[...Array(feedback.rating).keys()].map((star) => (
                                    <span key={star}>★</span>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
        </div>
    );
};

export default FeedbackList;

// FeedbackForm.js
import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Styles/FeedbackForm.css";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8082/api/feedback/post",
        { message, rating }
      );
      console.log("Feedback submitted:", response.data);
      alert("Feedback Submitted Successfully 😊");
      // Optionally, you can show a success message or reset the form hereee
    } catch (error) {
      console.error("Error submitting feedback:", error);
      // Optionally, you can show an error message here
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Enter your feedback:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <label>
          Rating (1-5):
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className={star <= rating ? "filled" : ""}
                onClick={() => handleRatingChange(star)}
              >
                <FontAwesomeIcon icon={faStar} />
              </label>
            ))}
          </div>
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

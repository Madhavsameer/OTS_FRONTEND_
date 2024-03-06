import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoPlayer = ({ videoUrl, accessToken }) => {
  const videoSrc = `${videoUrl}?token=${accessToken}`;

  return (
    <div>
      <h2>Video Player</h2>
      <video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/videos/all');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const playVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    // Assuming you have a function to fetch access token from your backend
    fetchAccessToken();
  };

  const fetchAccessToken = async () => {
    try {
      // Fetch access token from your backend
      const response = await axios.get('http://localhost:8082/api/access-token');
      setAccessToken(response.data.accessToken);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  return (
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map((videoUrl, index) => (
          <li key={index} onClick={() => playVideo(videoUrl)}>
            {videoUrl}
          </li>
        ))}
      </ul>
      {currentVideo && <VideoPlayer videoUrl={currentVideo} accessToken={accessToken} />}
    </div>
  );
};

export default VideoList;

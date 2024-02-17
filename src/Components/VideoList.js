import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/videos/list');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const handleWatchNowClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Dear Student's Your videos are:-</h2>
      {videos.map(video => (
        <div key={video.id} style={{ marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
          <h3 style={{ marginBottom: '10px' }}>{video.name}</h3>
          <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }} onClick={() => handleWatchNowClick(video.url)}>Watch Now</button>
          {selectedVideo === video.url && <VideoPlayer videoUrl={selectedVideo} />}
        </div>
      ))}
    </div>
  );
}

export default VideoList;

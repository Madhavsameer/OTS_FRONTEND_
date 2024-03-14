import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListVideos = () => {
  const [videos, setVideos] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/videos/all');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const openVideo = async (videoId) => {
    try {
      const response = await axios.get(`http://localhost:8082/api/videos/${videoId}`, {
        responseType: 'blob' // Ensure response is treated as a binary blob
      });
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'video/mp4' }));
      setVideoUrl(url);
      setSelectedVideoId(videoId);
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  const downloadVideo = async (videoId) => {
    try {
      const response = await axios.get(`http://localhost:8082/api/videos/${videoId}`, {
        responseType: 'blob' // Ensure response is treated as a binary blob
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `video_${videoId}.mp4`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  return (
    <div>
      <h2>List of Uploaded Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            {video.title}
            <button onClick={() => openVideo(video.id)}>Play Video</button>
            <button onClick={() => downloadVideo(video.id)}>Download Video</button>
          </li>
        ))}
      </ul>
      {videoUrl && (
        <div>
          <h3>Video Player</h3>
          <iframe src={videoUrl} style={{ width: '68%', height: '500px', borderRadius: '20px', textAlign: 'center' }} title="Video Player" />
        </div>
      )}
    </div>
  );
};

export default ListVideos;

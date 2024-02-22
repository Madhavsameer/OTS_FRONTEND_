import React from 'react';

function VideoPlayer({ videoUrl }) {
  return (
    <div style={{ 
      width: '750px', 
      height: '500px', 
      margin: '0 auto', 
      textAlign: 'center', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '10px', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
    }}>
      <video style={{ 
        width: '100%', 
        height: '100%', 
        borderRadius: '10px' 
      }} controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;

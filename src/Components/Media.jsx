import React from "react";
import "../Styles/media.css";

import PageHeader from './PageHeader';
import VideoFile from '../videos/vid-1.mp4'
import Video2 from '../videos/vid-2.mp4'
import Video3 from '../videos/vid-3.mp4'
import Video4 from '../videos/vid-4.mp4'
import Video5 from '../videos/vid-5.mp4'
import Video6 from '../videos/vid-6.mp4'
import Video7 from '../videos/vid-7.mp4'
import Video8 from '../videos/vid-8.mp4'
import Video9 from '../videos/vid-9.mp4'
const Home = () => {
  let videoList = document.querySelectorAll(".video-list-container .list");

  videoList.forEach((vid) => {
    vid.onclick = () => {
      videoList.forEach((remove) => {
        remove.classList.remove("active");
      });
      vid.classList.add("active");
      let src = vid.querySelector(".list-video").src;
      let title = vid.querySelector(".list-title").innerHTML;
      document.querySelector(".main-video-container .main-video").src = src;
      document.querySelector(".main-video-container .main-video").play();
      document.querySelector(
        ".main-video-container .main-vid-title"
      ).innerHTML = title;
    };
  });
 return(
  
  
  <>
  <PageHeader/>
  <div className="container3">
<div className="main-video-container1">
  <video
    src={VideoFile}
    loop=""
    controls=""
    autoPlay
    muted
    className="main-video"
  />
  <h3 className="main-vid-title">house flood animation</h3>
</div>
<div className="video-list-container">
  <div className="list active">
    <video src={VideoFile} className="list-video" />
    <h3 className="list-title">house flood animation</h3>
  </div>
  <div className="list">
    <video src={Video2} autoPlay muted className="list-video" />
    <h3 className="list-title">zoombie walking animation</h3>
  </div>
  <div className="list">
    <video src={Video3} autoPlay muted className="list-video" />
    <h3 className="list-title">emoji falling animation</h3>
  </div>
  <div className="list">
    <video src={Video4} autoPlay muted className="list-video" />
    <h3 className="list-title">3D town animation</h3>
  </div>
  <div className="list">
    <video src={Video5} autoPlay muted className="list-video" />
    <h3 className="list-title">man chasing carrot animation</h3>
  </div>
  <div className="list">
    <video src={Video6} autoPlay muted className="list-video" />
    <h3 className="list-title">door hinge animation</h3>
  </div>
  <div className="list">
    <video src={Video7} autoPlay muted className="list-video" />
    <h3 className="list-title">poeple walking in town animation</h3>
  </div>
  <div className="list">
    <video src={Video8} autoPlay muted className="list-video" />
    <h3 className="list-title">knight chasing virus animation</h3>
  </div>
  <div className="list">
    <video src={Video9} autoPlay muted className="list-video" />
    <h3 className="list-title">3D helicopter animation</h3>
  </div>
</div>
</div>

</>
 );   
}

export default Home;
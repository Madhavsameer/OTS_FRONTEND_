import React from 'react'
import '../Styles/StudMYmeeting.css';
import {Link} from "react-router-dom";
import PageHeader from "./PageHeader";


function StudentMYmeeting() {
  return (
      <div>
        <PageHeader/>
        <h1> My Meetings</h1>
        <h2>Meetings</h2>
        <div className='current'>
           <img className='img1' src="/images/advancejava.png" alt="bad"></img>
           <div className='meet-links'>
            <p className='info1'>Session Status: <span className='status'>Session Complete</span></p>
            <Link to="/ViewAssgn"><button >View Assginement</button></Link>
            <Link to="/Upload"><button >Upload Work</button></Link>
            <Link to="/meet"><button >Join</button></Link>
            </div>
        </div>
        <div className='current'>
          <img className='img1' src="/images/c++image.png" alt="bad"></img>
           <div className='meet-links'>
            <p className='info1'>Session Status: <span className='status'>Session Complete</span></p>
            <Link to="/ViewAssgn"><button >View Assginement</button></Link>
            <Link to="/Upload"><button >Upload Work</button></Link>
            <Link to="/meet"><button >Join</button></Link>
            </div>
        </div>
        <h2>UpComing Meetings</h2>
        <div className='current'>
          <img className='img1' src="https://miro.medium.com/max/647/0*tol3ohqCrzJc_KKI.png" alt="bad"></img>
           <div className='meet-links'>
            <p className='info1'>Time Status: <span className='status'>07:10:56</span></p>
            <img class="cart" src="/Images/meetcartoon.jpg" alt="bad"></img>
            <Link to="/meet"><button >Join</button></Link>
            </div>
        </div>
        <div className='current'>
          <img className='img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBidpR3bC2LLFzETGMpeqAx6lwZ8MDg6_yQ&usqp=CAU" alt="bad"></img>
           <div className='meet-links'>
            <p className='info1'>Time Status: <span className='status'>10:05:33</span></p>
            <img class="cart" src="/Images/meetcartoon.jpg" alt="bad"></img>
            <Link to="/meet"><button >Join</button></Link>
            </div>
        </div>
    </div>
  )
}


export default StudentMYmeeting;
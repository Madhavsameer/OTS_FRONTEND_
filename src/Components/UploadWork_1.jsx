import React from 'react'
 import '../Styles/Upload.css';
 import {Link} from "react-router-dom";
 import PageHeader   from "./PageHeader";

function UploadWork() {
  return (
    <div>
      <PageHeader/>
    <div className='uwork'>
    <h1>Upload Taks and Assignments</h1>
    <div class="bigbox">
      <p>Upload from local computer or drive</p>
      <Link to="#">upload</Link>
    </div>
    </div>
    </div>
  )
}


export default UploadWork;
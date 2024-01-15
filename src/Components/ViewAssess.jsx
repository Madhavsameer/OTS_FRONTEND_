/* eslint-disable react/jsx-pascal-case */
import React from 'react'
//import './ViewAs.css';
import Page_header   from "./PageHeader";
function ViewAssess() {
  return (
    <div>
      <Page_header/>
    <center>  
        <h1>Assignment</h1>
        <iframe src="\updatedSRS.pdf" 
                width="800" 
                height="900"
                title='ass'>
        </iframe>
    </center>
    </div>
  )
}

export default ViewAssess;
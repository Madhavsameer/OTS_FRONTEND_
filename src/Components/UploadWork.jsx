import React from 'react'
import '../Styles/Upload.css';
import {Link} from "react-router-dom";
import PageHeader   from "./PageHeader";

// const onSubmit = async (e) => {
//     e.preventDefault();
//     try{ await axios.post("http://localhost:8082/file", form);
//     let a = document.getElementById("uploadWork");
//     a.innerHTML = "file successfully uploaded";
//     navigate("/uploadWork");
//   }

//   catch{
//       let a = document.getElementById("uploadWork");
//       a.innerHTML = "unable to upload file";
//       a.style.color="red";
//       a.style.fontWeight=700;
//       navigate("/uploadWork");
//     }
//   };
// onSubmit={(e) => onSubmit(e)}
// action="http://localhost:8082/file"

// const gotoupload = () =>{
//   navigate("/UploadWork");
// }

function UploadWork() {
  return (
    <div>
      <PageHeader/>
    <div className='uwork'>
    
    <div class="bigbox">
      <p>Upload from local computer or drive</p>
      <form action="http://localhost:8082/file"  method="post"  enctype="multipart/form-data">
        <label>Enter Course Name</label>
            <input 
            className='inputts'
            type = {"text"} 
            name="c_id"
            required
            /> 
            <input type="file" name="file"/>  <br /> <br />

           <label>Enter about course</label>

            <input 
             className='inputts'
            type={"text"}
            name="about"
            required
            />  
            
            <input type="file" name="video"/> <br />
            <input className="sub" type="submit" value="submit"/>
        </form>
        <p id="uploadWork"></p>
      {/* <Link to="#">upload</Link> */}
    </div>
    </div>
    </div>
  )
}


export default UploadWork;
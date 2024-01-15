import React from 'react';
import '../Styles/about_course.css';
import PageHeader   from "./PageHeader";
import {Link}  from "react-router-dom";



export default function Demo(){
    return (
        <div className="mainContainer">
            <PageHeader/>
            <div className="ghhjghcourseContainer">
                <div className="Courses">
                    <h1>Intro to our courses</h1>
                    <img src='https://previews.123rf.com/images/andreypopov/andreypopov2004/andreypopov200400413/145126021-teacher-hosting-online-class-using-video-conference-on-laptop.jpg' alt='gfg' />
                    <Link to="/Video"><button>start learning</button></Link>
                </div>
                <div className="Courses">   
                    <h1>About courses</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis magni quibusdam 
                        dolore officia sit dolorum corrupti odit quam, dicta praesentium aspernatur id 
                        tempore iusto perferendis maiores odio similique sapiente, illum repudiandae 
                        consectetur! Aspernatur totam itaque expedita quibusdam? Aliquam impedit dolorum 
                        provident quasi eius aut optio, pariatur corporis officiis, sed tempore ut? 
                        Dignissimos distinctio consequatur natus, quos, maiores earum debitis autem 
                        dolore rem, soluta nostrum. Provident maiores esse laborum facilis ad quaerat 
                        totam nulla mollitia delectus. Doloribus facere explicabo perferendis ad accusamus 
                        eos voluptate cum sint quo? Vitae corrupti unde aspernatur et nemo, odit molestiae! 
                        Praesentium nisi vel cupiditate totam vitae.
                    </p>
                </div>
                <div className="Courses">
                    <button>Deregister</button> <br />
                    <button>Register</button> <br />
                    <button>Files</button> <br />
                    <button>Live sessions</button>
                </div>

            </div>
            
        </div>
    )
};
import React from 'react';
import '../Styles/Video.css';
import Page_header   from "./PageHeader";

export default function Video(){
    return(
        <div className="body-video">
            <Page_header/>
            <div className="wrapper">
                <div className="sidebar">
                    <h2>Sidebar</h2>
                    <ul>
                        <li>Java Home</li>
                        <li>Java Get Started</li>
                        <li>Java Operators</li>
                        <li>Java Syntax</li>
                        <li>Java Output</li>
                        <li>Java Comments</li>
                        <li>Java Variable</li>
                        <li>Java Data Types</li>
                        <li>Java Operators</li>
                        <li>Java Strings</li>
                        <li>Java Math</li>
                        <li>Java Booleans</li>
                        <li>Java If..else</li>
                        <li>Java Switch</li>
                        <li>Java While Loop</li>
                        <li>Java For Loop</li>
                        <li>Java Break</li>
                        <li>Java Continue</li>
                        <li>Java Arrays</li>
                        <li>Java Methods</li>
                        <li>Java Method Parameters</li>
                        <li>Java Method Overloadings</li>
                        <li>Java Scope</li>
                        <li>Java Recursion</li>
                        <li>Java Classes</li>
                        <li>Java OOP</li>
                        <li>Java Classes/Object</li>
                        <li>Java Classes Attributes</li>
                        <li>Java Classes Methods</li>
                        <li>Java Classes Constructors</li>
                        <li>Java Constructors</li>
                    </ul>
                </div>
                <div className="main_content">
                    <div className="header">Welcome! Have a nice day.</div>
                    <div className="meeting_container">
                        <img src="https://i0.wp.com/sethideclercq.com/wp-content/uploads/2021/05/newlook.png?resize=1024%2C576&ssl=1" alt="img"/>
                    </div>
                    <button><span>feedback</span></button>
                    <span><textarea className="Textarea"></textarea></span>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import '../Styles/Feedback.css';
import Pageheader from "./PageHeader";
export default function feedback(){
    return (
        <div className="Feedback-Container">
            <Pageheader/>
            <h1 className="Feedback-Title">View Students Feedback</h1>
            <div className="Feedback-grid">
                <div className="Feedback-item">
                    <i class="fa-solid fa-user"></i>
                    <p>FullName</p>
                    <div className="Feedback-View">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae excepturi molestias earum repellat dolores? Deleniti obcaecati sed ab at, magni alias, labore vero quidem esse consectetur minus, deserunt nostrum tempora inventore. Quod praesentium asperiores at quasi accusantium ea facilis dolore molestiae eius. Sequi eveniet repudiandae qui quasi voluptate dolores iure?
                    </div>
                    <div className="Feedback-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="Feedback-item">
                    <i class="fa-solid fa-user"></i>
                    <p>FullName</p>
                    <div className="Feedback-View">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae excepturi molestias earum repellat dolores? Deleniti obcaecati sed ab at, magni alias, labore vero quidem esse consectetur minus, deserunt nostrum tempora inventore. Quod praesentium asperiores at quasi accusantium ea facilis dolore molestiae eius. Sequi eveniet repudiandae qui quasi voluptate dolores iure?
                    </div>
                    <div className="Feedback-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        {/* <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i> */}
                    </div>
                </div>
                <div className="Feedback-item">
                    <i class="fa-solid fa-user"></i>
                    <p>FullName</p>
                    <div className="Feedback-View">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae excepturi molestias earum repellat dolores? Deleniti obcaecati sed ab at, magni alias, labore vero quidem esse consectetur minus, deserunt nostrum tempora inventore. Quod praesentium asperiores at quasi accusantium ea facilis dolore molestiae eius. Sequi eveniet repudiandae qui quasi voluptate dolores iure?
                    </div>
                    <div className="Feedback-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        {/* <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i> */}
                    </div>
                </div>  
                <div className="Feedback-item">
                    <i class="fa-solid fa-user"></i>
                    <p>FullName</p>
                    <div className="Feedback-View">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae excepturi molestias earum repellat dolores? Deleniti obcaecati sed ab at, magni alias, labore vero quidem esse consectetur minus, deserunt nostrum tempora inventore. Quod praesentium asperiores at quasi accusantium ea facilis dolore molestiae eius. Sequi eveniet repudiandae qui quasi voluptate dolores iure?
                    </div>
                    <div className="Feedback-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        {/* <i class="fa-solid fa-star"></i> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
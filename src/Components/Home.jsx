import React from "react";
import AboutUs from "../Components/AboutUs";
import ChooseUs from "../Components/ChooseUs";
import Courses from "../Components/Courses";
import Features from "../Components/Features";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Testimonials from "../Components/Testimonials";
import Footer from '../Components/Footer'
const Home = () => {
 return(
 <div> 
    <Header />
    <HeroSection />
     <AboutUs/>
    <ChooseUs/> 
    <Courses />
    <Features />
   
    {/* <Testimonials /> */}
    <Footer/>
    
     </div>
 )   
};

export default Home;

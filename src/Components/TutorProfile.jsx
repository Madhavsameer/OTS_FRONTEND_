import PageHeader from "./PageHeader";
import Tutor from "./Tutor";
import Container from "./Container_course";
// import UpComing from "./UpComing";
import Footer from "./Footer";

const TutorProfile = () =>{
    return(
        <div>
            <PageHeader/>
            <Tutor/>
            <Container/>
            {/* <UpComing/> */}
            <Footer/>

        </div>
    );


}

export default TutorProfile;
import '../Styles/Header_page.css';
import{Link} from "react-router-dom";

const Header = () =>{
    return(
        <div className="header">
           <Link to ="/Home"> <h4>Back to Home </h4></Link>
        </div>
    );

}
export default Header;
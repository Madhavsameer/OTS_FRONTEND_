import '../Styles/Container.css';
import {Link} from "react-router-dom";

const Container = () =>{

    return(
        <div>
        <div className="container1">
            <div className='item'>
               <Link to="/Aboutcourse"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlaVUZW9G1EWAQvZCRXYCclL4gJy6PFW0Urg6T3QedxIEbQgl3civ_umsPxXI34RpRKmo&usqp=CAU" alt="java" /></Link>
            </div>
            <div className='item'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpRR9ZC_pUW5RWi8zjEF8yZOaT-s19qauZQzrFfwPzUQjOpNTRDNl5FheTktjIafBFQ0&usqp=CAU" alt=''/>
            </div>
            <div className='item'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBidpR3bC2LLFzETGMpeqAx6lwZ8MDg6_yQ&usqp=CAU" alt="java" />
            </div>
            <div className='item'>
                <img src="https://miro.medium.com/max/647/0*tol3ohqCrzJc_KKI.png" alt="java" />
            </div>
        </div>
        </div>
    );

}

export default Container;
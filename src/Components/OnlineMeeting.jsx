import '../Styles/OnlineMeeting.css';
import Header from './Header';

import Page_header   from "./PageHeader";

const Meeting = () =>{
    return(
        <div>
          <Page_header/>
    <section className="main-container">
        <div className="meet">
            <img src="https://storage.googleapis.com/support-forums-api/attachment/thread-28919240-6427763027636024187.png" alt='meet'/>
        </div>
        <div className="chat-box">
            <h3>Chat</h3>
            <div>
                <p className="sir"> Am I audible, students ?</p>
                <p className="student1"> Yeah sir, Its perfectly alright !!</p>
                <p className="student2"> Yes sir.</p>
                <p className="sir2">Okay, Thanks for the confirmarion <br/> Shall we begin now ?</p>
            </div>
        </div>
        <div className="members">
            <h3>Members</h3>
            <ul>
                <li>Varma</li>
                <li>Abdul</li>
                <li>Srija</li>
                <li>Shankar</li>
                <li>Satish</li>
                <li>Sravani</li>
                <li>Vimlesh</li>
                <li>Manish</li>
                <li>Sai ganesh</li>
                <li>Bindhu</li>
                <li>Chetana</li>
                <li>Bhanu</li>
                <li>Charan Sai</li>
                <li>Subash</li>
                <li>Venky</li>
                <li>Anveshi</li>
                <li>Sravan Kumar</li>
            </ul>
        </div>

    </section>

        </div>
    );
}

export default Meeting;
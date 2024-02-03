import React from "react";
import { SiLinkedin, SiGithub,SiInstagram,SiFacebook} from "react-icons/si";
import "../Styles/footer.css";
const Footer = () => {

    return (
<div className="totall" id="5">
      <center>
  <div class="container pt-4">
    <section class="mb-4">
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://cutm.ac.in/"
        role="button"
        ><SiLinkedin/></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://cutm.ac.in/"
        role="button"
        ><SiGithub/></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://cutm.ac.in/"
        role="button"
        ><SiInstagram/>
        </a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://cutm.ac.in/"
        role="button"
        ><SiFacebook/>
        </a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://cutm.ac.in/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://cutm.ac.in/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
     
    </section>
  </div>

  <div className="copy" >
    © 2024 Copyright: Designed & Developed bY CENTURION UNIVERSITY
  </div>
  </center>
</div>
)
};

export default Footer;
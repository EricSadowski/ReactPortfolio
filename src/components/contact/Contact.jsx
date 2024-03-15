import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.min.css";
import Van from "../../assets/img/vansunsetcrop.jpg";
import linked from "../../assets/img/linkedin_icon.png";
import email from "../../assets/img/email.png";
import github from "../../assets/img/github-mark.svg";

const Contact = () => {
    const form = useRef()
    const [done, setDone] = useState(false)

    // .sendForm('service_vac2awv', 'template_kcxcdj3', formRef.current,
    // '9gERi9hfOKPch3lci'

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_vac2awv', 'template_kcxcdj3', form.current, {
            publicKey: 'jtmDaVGLkzDnjqqnx',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setDone(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    // <div className="c">
    //   <div className="c-bg"></div>
    //   <div className="c-wrapper">
    //     <div className="c-left">
    //       <h1 className="c-title">Contact</h1>
    //       <div className="c-info">
    //         <div className="c-info-item">
    //           <img src={Phone} alt="" className="c-icon" />
    //           +1 1234 556 75
    //         </div>
    //         <div className="c-info-item">
    //           <img className="c-icon" src={Email} alt="" />
    //           contact@lama.dev
    //         </div>
    //         <div className="c-info-item">
    //           <img className="c-icon" src={Address} alt="" />
    //           245 King Street, Touterie Victoria 8520 Australia
    //         </div>
    //       </div>
    //     </div>
    //     <div className="c-right">
    //     <p className="c-desc">
    //         <b>Want to work with me?</b> Get in touch.
    //       </p>
    //       <form ref={form} onSubmit={handleSubmit}> 
    //         <input type="text" placeholder="Name" name="user_name"/>
    //         <input type="text" placeholder="Subject" name="user_subject"/>
    //         <input type="text" placeholder="Email" name="user_email"/>
    //         <textarea rows="5" placeholder="Message" name="message"/>
    //         <button>Submit</button>
    //         {done && "Thank you"}
    //       </form>
    //     </div>
    //   </div>
    // </div>


    <div className="bottom-bg">

    <div className ="container">
    <footer className="row">
    <h2 className="text-center text-lg-start" id="contact-link">Contact</h2>
    <img src={Van} class="img-fluid" alt="Van on street with a sunset"/>
    <div className = "row contact-link">
    <div className ="col-12 col-lg-4 text-center text-lg-start">
    <a className="email-link nav-link" href="mailto:ericcsadowski@gmail.com">E-Mail <img className="icon" src={email}></img></a>
    </div>
    <div className ="col-12 col-lg-4 text-center">
    <a className="github-link nav-link" href="https://github.com/EricSadowski">GitHub <img className="icon" src={github}></img></a>
    </div>
    <div className ="col-12 col-lg-4 text-center text-lg-end">
    <a className="linkedin-link nav-link" href="https://www.linkedin.com/in/eric-sadowski/">
      LinkedIn 
    <img className="icon" src={linked}></img>
    </a>
    </div>
   </div>

  </footer>
</div>
  
</div>
  );
};

export default Contact;

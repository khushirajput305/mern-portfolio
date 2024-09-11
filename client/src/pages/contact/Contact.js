import React, { useRef } from "react";
import "./contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o3k31fl",
        "template_spxpkhl",
        form.current,
       "r2fIrRXdoWEITkQUM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occured, please try again.");
        }
      );
  };
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img src="contact.jpg" alt="" className="image" />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact with
                        <a href="https://www.linkedin.com/in/khushi-rajput-163065250/">
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/khushirajput305">
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row px-3 mb-4">
                        <div className="line" />
                        <small className="or text-center">OR</small>
                        <div className="line" />
                      </div>

                      <div className="row px-3">
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Enter your name"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="to_name"
                          placeholder="Enter your email"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Write your message"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <button type="submit" className="button">
                          {" "}
                          SEND MESSAGE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

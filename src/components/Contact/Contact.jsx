import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import './Contact.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);


    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jh7i3iu', 'template_tvm9l5g', form.current, 'aSdg16zZ8OITs1TxG')
        .then((result) => {
            console.log(result.text);
            console.log("sent");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src='https://drive.google.com/uc?export=view&id=19Tym5l-uMsWNFkCVipSt04bYZ3AGXuJT' alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form  ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.name} placeholder="Your Name" name="user_name"  onChange={(e) => onFormUpdate('name', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" value={formDetails.email} placeholder="Email Address" name="user_email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <button type="submit" value="Send" className="email-buton">Send</button>
                                            </Col>

                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;

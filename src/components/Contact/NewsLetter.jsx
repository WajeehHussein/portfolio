import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { FaLinkedin ,FaGithub} from 'react-icons/fa';
import '../Footer/Footer.css'

export const Newsletter = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                        <div className="contact-box">
                    <Col lg={12} md={6} >
                        <div>Contact me on </div>
                        <div className="icons">
                        <a href="https://www.linkedin.com/in/wajeeh-essam/"><FaLinkedin /></a>
                        <a href="https://github.com/WajeehHussein"><FaGithub /></a>
                        </div>
                    </Col>
                        </div>
                </Row>
            </div>
        </Col>
    )
}

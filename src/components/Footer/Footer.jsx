import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "../MailchimpForm/MailchimpForm";


import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6} className='portfolio'>
                        Wajeeh Hussein
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        {/* <div className="social-icon">
                            <a href="#"><img src='' alt="Icon" /></a>
                            <a href="#"><img src='' alt="Icon" /></a>
                            <a href="#"><img src='' alt="Icon" /></a>
                        </div> */}
                        <p>Copyright 2022. All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

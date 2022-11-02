import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Navbar.css'
import { RiLinkedinFill } from 'react-icons/ri'
import { GoMarkGithub } from 'react-icons/go'
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            (window.scrollY > 150) ? setScrolled(true) : setScrolled(false);
        }

        window.addEventListener("scroll", onScroll);

        // return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/" className="brand">
                        WAJEEH
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                {/* <a href="#"><img src="https://drive.google.com/uc?export=view&id=1JobHjIj2OXYqr2qDBQHyqAC6zaP1pMWP" alt="icon" /></a>
                                <a href="#"><img src="https://drive.google.com/uc?export=view&id=1JobHjIj2OXYqr2qDBQHyqAC6zaP1pMWP" alt="icon" /></a> */}
                                {/* <a href="#"><GoMarkGithub /></a> */}
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}

export default NavBar;

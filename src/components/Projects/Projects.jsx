import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import './Projects.css'

import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const projects = [
        {
            title: "Mr delievery",
            description: "Site for delievery food",
            imgUrl: 'https://images.pexels.com/photos/9461218/pexels-photo-9461218.jpeg?auto=compress&cs=tinysrgb&w=1600',
            liveUrl: 'https://wista02.github.io/mr-delivery-fe/'
        },
        {
            title: "Todo App",
            // description: "Design & Development",
            imgUrl: 'https://pbs.twimg.com/media/Fo4ScIqWYAIYIiI?format=jpg&name=large',
            liveUrl: 'https://wajeehhussein.github.io/todo-app/'
        },
        {
            title: "Youtube clone",
            // description: "Design & Development",
            imgUrl: 'https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg?w=1800&t=st=1676326044~exp=1676326644~hmac=117e2d3360cac7bcb89ff0c4bb1563aae703704ca24088da9f20235e5833f5d0',
            liveUrl: 'https://wajeeh-youtube.netlify.app/'

        },
        {
            title: "ecommerce app",
            // description: "Design & Development",
            imgUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            liveUrl: 'https://wajeehhussein.github.io/social-media/'
        },
        {
            title: "games site",
            // description: "Design & Development",
            imgUrl: 'https://images.pexels.com/photos/9072256/pexels-photo-9072256.jpeg?auto=compress&cs=tinysrgb&w=1600',
            liveUrl: 'https://wajeehhussein.github.io/games-site/'
        },
        {
            title: "Memory game",
            // description: "Design & Development",
            imgUrl: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1600',
            liveUrl: 'https://wajeehhussein.github.io/memory-game/'
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>In this Section I Like Present Some my projects</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            {/* <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item> */}
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="soon">
                                                <div>Coming Soon...</div>
                                                <div className="lds-heart"><div></div></div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;

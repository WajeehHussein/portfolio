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
            imgUrl: 'https://images.pexels.com/photos/669986/pexels-photo-669986.jpeg?auto=compress&cs=tinysrgb&w=1600',
            liveUrl: 'https://wajeehhussein.github.io/todo-app/'
        },
        {
            title: "Youtube clone",
            // description: "Design & Development",
            imgUrl: 'https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg?w=996&t=st=1667344290~exp=1667344890~hmac=26de0448aeb8b0574058d8e1f5c11ff69f8629cd4f701743ecb245fe694eca35',
            liveUrl: 'https://wajeeh-youtube.netlify.app/'

        },
        {
            title: "Wajeeh World",
            // description: "Design & Development",
            imgUrl: 'https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1600',
            liveUrl: 'https://wajeehhussein.github.io/social-media/'
        },
        {
            title: "games site",
            // description: "Design & Development",
            imgUrl: 'https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg?auto=compress&cs=tinysrgb&w=1600',
            liveUrl: 'https://wajeehhussein.github.io/games-site/'
        },
        {
            title: "SOON",
            // description: "Design & Development",
            imgUrl: 'https://images.pexels.com/photos/3843282/pexels-photo-3843282.jpeg?auto=compress&cs=tinysrgb&w=1600',
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

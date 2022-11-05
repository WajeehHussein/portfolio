import { Col } from "react-bootstrap";
import './Projects.css'

const ProjectCard = ({ title, description, imgUrl, liveUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="img" src={imgUrl} />
        <a href={liveUrl}>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                </a>
            </div>
        </Col>

    )
}

export default ProjectCard;
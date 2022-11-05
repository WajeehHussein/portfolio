
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} items='5' infinite={true}  className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src='https://drive.google.com/uc?export=view&id=1nK9l0MG696rbUXjavocy-QVmYPSPZLEt' alt="" />
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className="item">
                                    <img src='https://drive.google.com/uc?export=view&id=1nK9l0MG696rbUXjavocy-QVmYPSPZLEt' alt="" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src='https://drive.google.com/uc?export=view&id=1nK9l0MG696rbUXjavocy-QVmYPSPZLEt' alt="" />
                                    <h5>REACT JS</h5>
                                </div>
                                <div className="item">
                                    <img src='https://drive.google.com/uc?export=view&id=1nK9l0MG696rbUXjavocy-QVmYPSPZLEt' alt="" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src='https://drive.google.com/uc?export=view&id=1nK9l0MG696rbUXjavocy-QVmYPSPZLEt' alt="" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src='https://drive.google.com/uc?export=view&id=1nK9l0MG696rbUXjavocy-QVmYPSPZLEt' alt="" />
                                    <h5>GIT & GITHUB</h5>
                                </div>
                                <div className="item">
                                    <img src='https://drive.google.com/uc?export=view&id=1nK9l0MG696rbUXjavocy-QVmYPSPZLEt' alt="" />
                                    <h5>Deploy on platforms</h5>
                                </div>
                                <div className="item">
                                    <img src='https://drive.google.com/uc?export=view&id=1nK9l0MG696rbUXjavocy-QVmYPSPZLEt' alt="" />
                                    <h5>SASS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src='https://pbs.twimg.com/media/FeYowVCXkAA4HeU?format=png&name=small' alt="" />
        </section>
    )
}

export default Skills;
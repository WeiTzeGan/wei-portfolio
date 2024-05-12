import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import css from "../assets/img/css.png";
import cpp from "../assets/img/cpp.png";
import python from "../assets/img/python.png";
import vue from "../assets/img/vue.png";
import react from "../assets/img/react.png";
import html from "../assets/img/html.png";
import matlab from "../assets/img/matlab.png";
import rstudio from "../assets/img/rstudio.png";
import blender from "../assets/img/blender.png";
import finalcutpro from "../assets/img/finalcutpro.png";
import ai from "../assets/img/ai.png";
import ps from "../assets/img/ps.png";
import ae from "../assets/img/ae.png";
import pr from "../assets/img/pr.png";
import au from "../assets/img/au.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={vue} alt="Image" />
                                <h5>Vue</h5>
                            </div>
                            <div className="item">
                                <img src={rstudio} alt="Image" />
                                <h5>R Studio</h5>
                            </div>
                            <div className="item">
                                <img src={matlab} alt="Image" />
                                <h5>Matlab</h5>
                            </div>
                            <div className="item">
                                <img src={blender} alt="Image" />
                                <h5>Blender</h5>
                            </div>
                            <div className="item">
                                <img src={finalcutpro} alt="Image" />
                                <h5>Final Cut Pro</h5>
                            </div>
                            <div className="item">
                                <img src={ai} alt="Image" />
                                <h5>Adobe Illustrator</h5>
                            </div>
                            <div className="item">
                                <img src={ps} alt="Image" />
                                <h5>Adobe Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={pr} alt="Image" />
                                <h5>Adobe Premiere Pro</h5>
                            </div>
                            <div className="item">
                                <img src={ae} alt="Image" />
                                <h5>Adobe After Effect</h5>
                            </div>
                            <div className="item">
                                <img src={au} alt="Image" />
                                <h5>Adobe Audition</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

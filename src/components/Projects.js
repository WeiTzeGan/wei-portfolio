import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import WebprojImg1 from "../assets/img/project-web1.png";
import WebprojImg2 from "../assets/img/project-web2.png";
import WebprojImg3 from "../assets/img/project-web3.png";
import WebprojImg4 from "../assets/img/project-web4.png";
import WebprojInfoImg1 from "../assets/img/project-web1-dt.png";
import GraohicprojImg1 from "../assets/img/project-graphic1.png";
import GraohicprojImg2 from "../assets/img/project-graphic2.png";
import GraohicprojImg3 from "../assets/img/project-graphic3.png";
import VideoprojImg1 from "../assets/img/project-video1.png";
import VideoprojImg2 from "../assets/img/project-video2.png";
import VideoprojImg3 from "../assets/img/project-video3.png";
import VideoprojImg4 from "../assets/img/project-video4.png";
import VideoprojImg5 from "../assets/img/project-video5.png";
import VideoprojImg6 from "../assets/img/project-video6.png";
import VideoprojImg7 from "../assets/img/project-video7.png";
import VideoprojImg8 from "../assets/img/project-video8.png";
import VideoprojImg9 from "../assets/img/project-video9.png";
import VideoprojImg10 from "../assets/img/project-video10.png";
import VideoprojImg11 from "../assets/img/project-video11.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Cool Forggy Club",
      description: "Academic Project - Web Application",
      imgUrl: WebprojImg1,
      infoImg: WebprojInfoImg1,
      linkurl: "https://github.com/WeiTzeGan/CoolFroggyClubProject",
    },
    {
      title: "Moots Technology",
      description: "Internship Project - Front-End Development",
      imgUrl: WebprojImg2,
    },
    {
      title: "Chinese Union Resourced",
      description: "Web Design",
      imgUrl: WebprojImg3,
    },
    {
      title: "Glabal Chinese Youth",
      description: "Web Design & Development",
      imgUrl: WebprojImg4,
    }
  ];

  const graphicprojects = [
    {
      title: "Cool Forggy Club",
      description: "Academic Project - Web Application",
      imgUrl: GraohicprojImg1,
    },
    {
      title: "Moots Technology",
      description: "Internship Project - Front-End Development",
      imgUrl: GraohicprojImg2,
    },
    {
      title: "Chinese Union Resourced",
      description: "Web Design",
      imgUrl: GraohicprojImg3,
    }
  ];

  const videoprojects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg9,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg10,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: VideoprojImg11,
    },
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">WEB DEVELOP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">GRAPHIC</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">VIDEOS</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="fouth">VIDEOS</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  // key={index}
                                  // {...project}
                                  // linkUrl={project.linkUrl}
                                  key={index}
                                  title={project.title}
                                  description={project.description}
                                  imgUrl={project.imgUrl}
                                  infoImg={project.infoImg}
                                  linkUrl={project.linkUrl}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        <Row>
                          {
                            graphicprojects.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        <Row>
                          {
                            videoprojects.map((project, index) => {
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
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

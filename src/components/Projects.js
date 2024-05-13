import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import WebprojImg1 from "../assets/img/project-web1.png";
import WebprojImg2 from "../assets/img/project-web2.png";
import WebprojImg3 from "../assets/img/project-web3.png";
// import WebprojImg4 from "../assets/img/project-web4.png";
import WebprojInfoImg1 from "../assets/img/project-web1-dt.png";
import WebprojInfoImg2 from "../assets/img/project-web2-dt.png";
import WebprojInfoImg3 from "../assets/img/project-web3-dt.png";
import GraohicprojImg1 from "../assets/img/project-graphic1.png";
import GraohicprojImg2 from "../assets/img/project-graphic2.png";
import GraohicprojImg3 from "../assets/img/project-graphic3.png";
import GraohicprojImg4 from "../assets/img/project-graphic4.png";
import GraohicprojImg5 from "../assets/img/project-graphic5.png";
import GraohicprojImg6 from "../assets/img/project-graphic6.png";
import GraohicprojImg7 from "../assets/img/project-graphic7.png";
import GraohicprojImg8 from "../assets/img/project-graphic8.png";
import GraohicprojImg9 from "../assets/img/project-graphic9.png";
import GraohicprojImg10 from "../assets/img/project-graphic10.png";
import GraohicprojImg11 from "../assets/img/project-graphic11.png";
import GraohicprojImg12 from "../assets/img/project-graphic12.png";
import GraohicprojInfoImg1 from "../assets/img/project-graphic1-dt.png";
import GraohicprojInfoImg2 from "../assets/img/project-graphic2-dt.png";
import GraohicprojInfoImg3 from "../assets/img/project-graphic3-dt.png";
import GraohicprojInfoImg4 from "../assets/img/project-graphic4-dt.png";
import GraohicprojInfoImg5 from "../assets/img/project-graphic5-dt.png";
import GraohicprojInfoImg6 from "../assets/img/project-graphic6-dt.png";
import GraohicprojInfoImg7 from "../assets/img/project-graphic7-dt.png";
import GraohicprojInfoImg8 from "../assets/img/project-graphic8-dt.png";
import GraohicprojInfoImg9 from "../assets/img/project-graphic9-dt.png";
import GraohicprojInfoImg10 from "../assets/img/project-graphic10-dt.png";
import GraohicprojInfoImg11 from "../assets/img/project-graphic11-dt.png";
import GraohicprojInfoImg12 from "../assets/img/project-graphic12-dt.png";
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
import VideoprojImg12 from "../assets/img/project-video12.png";
import VideoprojInfoImg1 from "../assets/img/project-video1-dt.png";
import VideoprojInfoImg2 from "../assets/img/project-video2-dt.png";
import VideoprojInfoImg3 from "../assets/img/project-video3-dt.png";
import VideoprojInfoImg4 from "../assets/img/project-video4-dt.png";
import VideoprojInfoImg5 from "../assets/img/project-video5-dt.png";
import VideoprojInfoImg6 from "../assets/img/project-video6-dt.png";
import VideoprojInfoImg7 from "../assets/img/project-video7-dt.png";
import VideoprojInfoImg8 from "../assets/img/project-video8-dt.png";
import VideoprojInfoImg9 from "../assets/img/project-video9-dt.png";
import VideoprojInfoImg10 from "../assets/img/project-video10-dt.png";
import VideoprojInfoImg11 from "../assets/img/project-video11-dt.png";
import VideoprojInfoImg12 from "../assets/img/project-video11-dt.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Cool Froggy Club",
      description: "Academic Project - Web Application",
      imgUrl: WebprojImg1,
      infoImg: WebprojInfoImg1,
      linkUrl: "https://github.com/WeiTzeGan/CoolFroggyClubProject",
      showButton: true,
    },
    {
      title: "Moots Technology",
      description: "Internship Project - Front-End Development",
      imgUrl: WebprojImg2,
      infoImg: WebprojInfoImg2,
      linkUrl: "https://new.moots.technology/",
      showButton: true,
    },
    {
      title: "Chinese Union Resources Website",
      description: "Wix.com- Web Design",
      imgUrl: WebprojImg3,
      infoImg: WebprojInfoImg3,
      linkUrl: "https://sdachum.wixsite.com/chumresources",
      showButton: true,
    },
    // {
    //   title: "Glabal Chinese Youth",
    //   description: "Web Design & Development",
    //   imgUrl: WebprojImg4,
    // }
  ];

  const graphicprojects = [
    {
      title: "Four Season Bookmark",
      description: "New Website Promotion",
      imgUrl: GraohicprojImg1,
      infoImg: GraohicprojInfoImg1,
      showButton: false,
    },
    {
      title: "Thank You Card",
      description: "Youtube Video Promotion",
      imgUrl: GraohicprojImg2,
      infoImg: GraohicprojInfoImg2,
      showButton: false,
    },
    {
      title: "Tote Bag Design",
      description: "HKMC 70th Anniversary Gift",
      imgUrl: GraohicprojImg3,
      infoImg: GraohicprojInfoImg3,
      showButton: false,
    },
    {
      title: "Prayer Request Poster",
      description: "Pray For Missions in China",
      imgUrl: GraohicprojImg4,
      infoImg: GraohicprojInfoImg4,
      showButton: false,
    },
    {
      title: "Seminar Poster",
      description: "Bible Seminar",
      imgUrl: GraohicprojImg5,
      infoImg: GraohicprojInfoImg5,
      showButton: false,
    },
    {
      title: "Facebook Promotion Poster",
      description: "Promote Facebook Page",
      imgUrl: GraohicprojImg6,
      infoImg: GraohicprojInfoImg6,
      showButton: false,
    },
    {
      title: "Seminar Poster",
      description: "Finance Seminar",
      imgUrl: GraohicprojImg7,
      infoImg: GraohicprojInfoImg7,
      showButton: false,
    },
    {
      title: "Seminar Poster",
      description: "Testimony Talk",
      imgUrl: GraohicprojImg8,
      infoImg: GraohicprojInfoImg8,
      showButton: false,
    },
    {
      title: "Uni Club Poster",
      description: "Membership Sign Up",
      imgUrl: GraohicprojImg9,
      infoImg: GraohicprojInfoImg9,
      showButton: false,
    },
    {
      title: "Seminar Poster",
      description: "Bible Seminar",
      imgUrl: GraohicprojImg10,
      infoImg: GraohicprojInfoImg10,
      showButton: false,
    },
    {
      title: "Magazine Poster",
      description: "What is True Education?",
      imgUrl: GraohicprojImg11,
      infoImg: GraohicprojInfoImg11,
      showButton: false,
    },
    {
      title: "Video Promotion Poster",
      description: "New Series Release",
      imgUrl: GraohicprojImg12,
      infoImg: GraohicprojInfoImg12,
      showButton: false,
    },
  ];

  const videoprojects = [
    {
      title: "Hold Tight To God’s Hand",
      description: "The Salt Studio #3",
      imgUrl: VideoprojImg1,
      infoImg: VideoprojInfoImg1,
      linkUrl: "https://youtu.be/x0tcwOgKcxM?si=2aCm2aGao2abpMJ6",
      showButton: true,
    },
    {
      title: "The Christmas Story",
      description: "The Salt Studio #16",
      imgUrl: VideoprojImg2,
      infoImg: VideoprojInfoImg2,
      linkUrl: "https://youtu.be/UeVOWjtxj4o?si=cnU71eMEtTh_-ytP",
      showButton: true,
    },
    {
      title: "Being Pruned",
      description: "The Salt Studio #5",
      imgUrl: VideoprojImg3,
      infoImg: VideoprojInfoImg3,
      linkUrl: "https://youtu.be/lMv2Pc5EZP4?si=97VdcABCug_F8kzt",
      showButton: true,
    },
    {
      title: "His Last Week",
      description: "The Salt Studio #22",
      imgUrl: VideoprojImg4,
      infoImg: VideoprojInfoImg4,
      linkUrl: "https://youtu.be/POkmS0qOHso?si=I7Z4eT7L9tMIEhiG",
      showButton: true,
    },
    {
      title: "Saved By Accident",
      description: "The Salt Studio #9",
      imgUrl: VideoprojImg5,
      infoImg: VideoprojInfoImg5,
      linkUrl: "https://youtu.be/KDSybtDSNM8?si=iVrPqJWOdMIZaiBH",
      showButton: true,
    },
    {
      title: "Sweet As Honey",
      description: "The Salt Studio #24",
      imgUrl: VideoprojImg6,
      infoImg: VideoprojInfoImg6,
      linkUrl: "https://youtu.be/qu6Dzl2RsJU?si=Vf8Crwj-J5srn6uw",
      showButton: true,
    },
    {
      title: "Mid Autumn Festival",
      description: "The Salt Studio #28",
      imgUrl: VideoprojImg7,
      infoImg: VideoprojInfoImg7,
      linkUrl: "https://youtu.be/AiqLoyO1-jo?si=xbwpo4r-mieXFWOn",
      showButton: true,
    },
    {
      title: "The Story Of Fig",
      description: "The Salt Studio #25",
      imgUrl: VideoprojImg8,
      infoImg: VideoprojInfoImg8,
      linkUrl: "https://youtu.be/7jmw-xk9njY?si=5-dG7fsWtBZMSjm4",
      showButton: true,
    },
    {
      title: "The Story Of Reunion",
      description: "The Salt Studio #11",
      imgUrl: VideoprojImg9,
      infoImg: VideoprojInfoImg9,
      linkUrl: "https://youtu.be/4uoM2vAKkHg?si=SFKpNX59zjeqsNlo",
      showButton: true,
    },
    {
      title: "The Little Star In The Apple",
      description: "The Salt Studio #26",
      imgUrl: VideoprojImg10,
      infoImg: VideoprojInfoImg10,
      linkUrl: "https://youtu.be/pVOS27SWO70?si=PCaNuejf-wr5xbJD",
      showButton: true,
    },
    {
      title: "Bible Reading = Instant Noodles?",
      description: "The Salt Studio #14",
      imgUrl: VideoprojImg11,
      infoImg: VideoprojInfoImg11,
      linkUrl: "https://youtu.be/SUeAh9pzF1o?si=sqWQQvx-gZqnT6C0",
      showButton: true,
    },
    {
      title: "Invisible Harm",
      description: "The Salt Studio #10",
      imgUrl: VideoprojImg12,
      infoImg: VideoprojInfoImg12,
      linkUrl: "https://youtu.be/MeJVNN1sx0Q?si=QXtK93Kx68LaNvNc",
      showButton: true,
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
                  <p>The portfolio showcases web development for student clubs and Webiny CMS, impactful graphic designs, and compelling video productions at The Salt Studio, highlighting diverse technological and creative expertise.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">WEB DEVELOP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">GRAPHIC</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">VIDEO</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="fouth">VIDEOS</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                      <p>The projects include developing a comprehensive web application for student clubs, enhancing Webiny CMS with React at Moots Technology, and designing a culturally-tailored resource hub on Wix.com, demonstrating versatile skills across various platforms and technologies.</p>
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
                        <p>Good design transcends words. With every new project, I start by asking, 'Who is the audience?' and 'What message are we trying to convey?' This approach ensures that each design not only informs but resonates deeply through its colors, style, and imagery. In essence, every element is meticulously crafted to ensure that the visual impact speaks louder than words.</p>
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
                        <p>The Salt Studio has specialized in crafting mini movie projects that captivate and inspire. Each video is a unique expression of compelling and succinct storytelling, designed to engage audiences on WeChat. By the time of my departure, our projects had amassed over 150,000 views and attracted more than 1,000 followers.</p>
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

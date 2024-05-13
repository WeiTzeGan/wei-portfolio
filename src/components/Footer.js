import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-resize-white.png";
import navIcon1 from "../assets/img/nav-icon1-w.png";
import navIcon2 from "../assets/img/nav-icon2-w.png";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="center-on-mobile"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/wei-tze-gan/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/WeiTzeGan"><img src={navIcon2} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

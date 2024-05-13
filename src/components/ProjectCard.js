// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }
// import React, { useState } from "react";
// import { Col, Modal, Button } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, infoImg, linkUrl }) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} alt={title} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <Button onClick={handleShow} variant="link" style={{ padding: 0, border: 'none', backgroundColor: 'transparent' }}>
//             {description}
//           </Button>
//         </div>
//       </div>
//       <Modal show={show} onHide={handleClose} size="xl">
//         <Modal.Header closeButton>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
//           <img src={infoImg} alt="More details" style={{ width: '100%', height: '100%'}} />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button style={{ backgroundColor: '#888888', borderColor: '#888888', color: '#EEEEEE' }}  href={linkUrl} target="_blank">
//             Click here to view the project
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Col>
//   );
// };

import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, infoImg, linkUrl, showButton }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <Button onClick={handleShow} variant="link" style={{ padding: 0, border: 'none', backgroundColor: 'transparent' }}>
            {description}
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={infoImg} alt="More details" style={{ width: '100%', height: 'auto' }} />
        </Modal.Body>
        {showButton && (
          // <Modal.Footer>
          //   <Button style={{ backgroundColor: '#888888', borderColor: '#888888', color: '#EEEEEE' }} href={linkUrl} target="_blank">
          //     Click Here To View The Project
          //   </Button>
          // </Modal.Footer>
          <Modal.Footer>
            <Button
              as="a"
              href={linkUrl}
              target="_blank"
              style={{ backgroundColor: '#888888', borderColor: '#888888', color: '#EEEEEE' }}
            >
              Click Here To View The Project
            </Button>
          </Modal.Footer>

        )}
      </Modal>
    </Col>
  );
};

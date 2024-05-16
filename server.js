const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "wensigan@gmail.com",
    pass: "nmis vzwr fdjf lloe"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName; // Added space between first and last name
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  console.log('Received contact form submission:', { name, email, phone, message }); // Log received data

  const mail = {
    from: name,
    to: "wensigan@gmail.com",
    subject: "Contact Form Submission - Wei-Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log('Error sending email:', error); // Log error if email sending fails
      res.json({ code: 500, status: "Message Failed to Send" });
    } else {
      console.log('Email sent successfully'); // Log success message
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

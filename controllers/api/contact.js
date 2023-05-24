const nodeMail = require('nodemailer');
const router = require('express').Router();



router.post('/', async (req,res) => {
  
let email = {...req.body}

console.log(email)

  const transporter = await nodeMail.createTransport({
    service: "gmail",
    auth: {
      user: "adoptapetoday@gmail.com",
      pass: "mjlttjfuwmsgvfnw",
    },
  });
  const mailOption = {
    from: process.env.GMAIL_USER,
    to: process.env.EMAIL,
    subject: email.subject,
    html: `You got a message from ${email.name}
     ${email.email}
    Message: ${email.message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    console.log("Message Sent!")
    return response.status(200).json("Message Sent Successfully!");
  } catch (error) {
    return response.status(500).json(error)
  }

});

module.exports = router;







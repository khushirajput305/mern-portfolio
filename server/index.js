const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailjs = require("emailjs-com");

//dotenv configuration
dotenv.config();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { templateParams } = req.body;
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      res.status(200).json({ message: "Email sent successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to send email", error });
    });
});

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { connect } = require('mongoose');
const ip = require('ip');
const User = require('./src/models/user.model');

const {DB_HOST, DB_PORT, DB_DATABASE, ORIGIN, PORT_HTTP, EMAIL_USER, EMAIL_PASS, CREDENTIALS} = process.env;

const app = express();
CREDENTIALS === 'true';
ip.address(`public`, `ipv4`);


const dbConnection = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

// connect with database mongodb
connect(dbConnection);

// Middleware
app.use(cors({
  origin: "http://localhost:4200", 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// memory storage for users and OTP
let otps = {}; // To store OTPs and their expiration

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER, 
    pass: EMAIL_PASS 
  }
});


// Route to sign up a new user
app.post('/signup', async(req, res) => {
  const userData = req.body.userData;
  const { username, email } = userData;

  //CHECK USER ALREADY EXIST OR NOT 
  const findUser = await User.findOne({ email : email});
  if (findUser){
    res.status(409).send({ success : false , message : `This user_name ${username} or email ${email} already exists`});
  }else{
    User.create({ ...userData});
    res.status(200).send({ success: true, message: 'User signedup successfully' });
  }

});

// Route to send OTP
app.post('/sendOtp', async(req, res) => {
  try {
    const { email } = req.body;

    //CHECK USER ALREADY EXIST OR NOT 
    const findUser = await User.findOne({ email : email });
    if (!findUser){
        res.status(409).send({ success: false, message: `This email ${email} does not exists`});
    }
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiration = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes
    otps[email] = { otpCode, otpExpiration };

    const mailOptions = {
      from: 'manalipatel123456789@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otpCode}. It will expire in 5 minutes.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (info) {
        return res.status(200).send({ success: true, message: 'OTP sent successfully!' });
      } else {
        return res.status(409).send({ success: false, message: 'Error sending OTP. Please try again.' });
      }
    });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).send({ success: false, message: 'Internal Server Error' });
  }
});



// Route to verify OTP
app.post('/verifyOtp', (req, res) => {
  const { otp, email } = req.body;
  if (!otp || !email) {
    return res.status(400).send({ success: false, message: 'OTP and email are required.' });
  }

  const storedOtp = otps[email];
  if (!storedOtp) {
    return res.status(200).send({ success: false, message: 'OTP not found or expired.' });
  }

  if (Date.now() > storedOtp.otpExpiration) {
    return res.status(400).send({ success: false, message: 'OTP has expired.' });
  }

  if (otp === storedOtp.otpCode) {
    delete otps[email]; // Clear OTP after successful verification
    return res.status(200).send({ success: true, message: 'OTP verified successfully' });
  } else {
    return res.status(400).send({ success: false, message: 'Invalid OTP' });
  }
});

// Start the server
app.listen(PORT_HTTP, () => {
  console.log(`Server running on http://localhost:${PORT_HTTP}`);
});

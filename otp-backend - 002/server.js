require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Memory storage for users and OTP
let users = [];
let otps = {}; // To store OTPs and their expiration

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route to sign up a new user
app.post('/signup', (req, res) => {
  console.log('Received sign-up request:', req.body); // Log incoming request
  const { username, email, number, password } = req.body.userData;

  // Validate fields
  if (!username || !email || !number || !password) {
    console.log('Missing fields:', { username, email, number, password });
    return res.status(400).send('All fields are required.');
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    console.log('User already exists:', email);
    return res.status(400).send('User already exists');
  }

  users.push({ username, email, number, password });
  res.status(200).send('User signed up successfully');
});


// Route to send OTP
app.post('/sendOtp', (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ success: false, message: 'Please sign up first.' });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiration = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes
    otps[email] = { otpCode, otpExpiration };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otpCode}. It will expire in 5 minutes.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Error sending OTP. Please try again.' });
      } else {
        return res.status(200).json({ success: true, message: 'OTP sent successfully!' });
      }
    });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Route to verify OTP
app.post('/verifyOtp', (req, res) => {
  const { otp, email } = req.body;
  if (!otp || !email) {
    return res.status(400).json({ success: false, message: 'OTP and email are required.' });
  }

  const storedOtp = otps[email];
  console.log('Stored OTP:', storedOtp); // Debug: Log the stored OTP
  if (!storedOtp) {
    return res.status(400).json({ success: false, message: 'OTP not found or expired.' });
  }

  if (Date.now() > storedOtp.otpExpiration) {
    delete otps[email]; // Clean up expired OTP
    return res.status(400).json({ success: false, message: 'OTP has expired.' });
  }

  if (otp === storedOtp.otpCode) {
    delete otps[email]; // Clear OTP after successful verification
    return res.status(200).json({ success: true, message: 'OTP verified successfully' });
  } else {
    return res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

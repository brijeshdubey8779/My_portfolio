require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address set as an environment variable
        pass: process.env.EMAIL_PASS,  // Your Gmail password or app-specific password set as an environment variable
    },
});

// Route to handle form submissions
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please fill in all fields.' });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,  // Send to your email address
        subject: `Contact Form Submission from ${name}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };
    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ msg: 'Thank you for contacting me!' });
    } catch (error) {
        console.error('Error sending email:', error);  // Log the full error
        res.status(500).json({ msg: 'Server Error. Please try again later.' });
    }
});



// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/brijesh_dubey_portfolio/build')));

// The "catchall" handler: for any request that doesn't match an API route, send back React's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/brijesh_dubey_portfolio/build', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

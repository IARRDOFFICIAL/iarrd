const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001; // Use port 3001 to avoid conflicts with your frontend

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Use cors middleware to allow requests from your frontend

// A simple endpoint to check if the server is running
app.get('/', (req, res) => {
    res.send('Newsletter backend is running!');
});

// The POST endpoint for your newsletter form
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    // Define the path to the subscribers file
    const filePath = path.join(__dirname, 'subscribers.txt');

    // Append the email to the file
    fs.appendFile(filePath, email + '\n', (err) => {
        if (err) {
            console.error('Failed to save email:', err);
            return res.status(500).json({ message: 'Failed to subscribe. Please try again later.' });
        }
        console.log(`New subscriber: ${email}`);
        res.status(200).json({ message: 'Thank you for subscribing!' });
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
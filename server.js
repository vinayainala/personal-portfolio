const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Routes
app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "Full-stack responsive portfolio with Node.js backend and modern frontend",
            technologies: ["Node.js", "Express", "HTML5", "CSS3", "JavaScript"],
            github: "https://github.com/yourusername/portfolio",
            demo: "https://yourportfolio.com",
            image: "/images/portfolio.jpg"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Responsive todo application with local storage and category management",
            technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
            github: "https://github.com/yourusername/task-manager",
            demo: "https://yourtaskapp.com",
            image: "/images/taskapp.jpg"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather application with location search and 5-day forecast",
            technologies: ["JavaScript", "Weather API", "CSS3", "HTML5"],
            github: "https://github.com/yourusername/weather-app",
            demo: "https://yourweatherapp.com",
            image: "/images/weather.jpg"
        }
    ];
    res.json(projects);
});

app.get('/api/skills', (req, res) => {
    const skills = {
        frontend: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Bootstrap", "Tailwind CSS"],
        backend: ["Node.js", "Express", "Python", "Django", "REST APIs", "MongoDB", "MySQL"],
        tools: ["Git", "GitHub", "VS Code", "Postman", "npm", "Webpack", "Docker"]
    };
    res.json(skills);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    try {
        // Configure nodemailer (you'll need to add your email credentials)
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com', // Replace with your email
                pass: 'your-app-password'     // Replace with your app password
            }
        });

        const mailOptions = {
            from: email,
            to: 'your-email@gmail.com', // Replace with your email
            subject: `Portfolio Contact: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

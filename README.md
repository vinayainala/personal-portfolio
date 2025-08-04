# Personal Portfolio Website

A modern, responsive full-stack personal portfolio website built with Node.js and Express backend, featuring a beautiful frontend with smooth animations and interactive elements.

## 🚀 Features

### Frontend
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Hover effects, smooth scrolling, typing animations
- **Dynamic Content** - Projects and skills loaded from backend API
- **Contact Form** - Functional contact form with email integration
- **Mobile Navigation** - Hamburger menu for mobile devices

### Backend
- **RESTful API** - Clean API endpoints for projects, skills, and contact
- **Email Integration** - Contact form sends emails using Nodemailer
- **Static File Serving** - Serves frontend files efficiently
- **CORS Enabled** - Cross-origin resource sharing configured

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (with modern features like Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

### Backend
- Node.js
- Express.js
- Nodemailer (for email functionality)
- CORS middleware
- Body-parser

## 📁 Project Structure

```
personal-portfolio/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd personal-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure email settings in `server.js`:
   - Replace `your-email@gmail.com` with your actual email
   - Add your Gmail app password (not your regular password)
   - Enable 2-factor authentication and generate an app password

5. Start the development server:
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

6. Open your browser and visit `http://localhost:3000`

## 📧 Email Configuration

To enable the contact form functionality:

1. Use Gmail with 2-factor authentication enabled
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Update the email configuration in `server.js`

## 🎨 Customization

### Personal Information
Update the following in `public/index.html`:
- Your name and title
- About section content
- Contact information
- Social media links

### Projects
Modify the projects array in `server.js` to showcase your own projects:
```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Name",
        description: "Project description",
        technologies: ["Tech1", "Tech2"],
        github: "https://github.com/yourusername/project",
        demo: "https://yourproject.com",
        image: "/images/project.jpg"
    }
];
```

### Skills
Update the skills object in `server.js` with your own skills:
```javascript
const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "VS Code", "Docker"]
};
```

### Styling
Customize the appearance by modifying `public/css/style.css`:
- Colors and themes
- Fonts and typography
- Layout and spacing
- Animations and effects

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🌟 Key Features Explained

### API Endpoints
- `GET /api/projects` - Returns all projects
- `GET /api/skills` - Returns skills by category
- `POST /api/contact` - Handles contact form submissions

### Interactive Elements
- Smooth scrolling navigation
- Mobile hamburger menu
- Typing animation on hero title
- Hover effects on buttons and cards
- Loading spinner for form submissions
- Toast notifications for user feedback

### Performance Features
- Optimized images and assets
- Minimal JavaScript bundle
- CSS animations using transforms
- Efficient DOM manipulation

## 🚀 Deployment

### Local Development
```bash
npm run dev  # Uses nodemon for auto-restart
```

### Production
```bash
npm start    # Standard Node.js server
```

### Hosting Options
- **Heroku**: Easy deployment with git
- **Netlify**: Great for static hosting (frontend only)
- **Vercel**: Excellent for full-stack applications
- **DigitalOcean**: VPS hosting option

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back with the community!

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!

---

**Happy coding!** 🎉

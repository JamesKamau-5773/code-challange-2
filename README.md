# Guest List Manager 🎟️

![Project Screenshot](/screenshot.png) <!-- Add a screenshot later -->

A responsive web application for managing event guests with categorization and attendance tracking.

## Features ✨

- **Guest Categorization** (Friend, Family, Colleague)
- **Color-coded visual tags** for each category
- **Real-time timestamps** for guest additions
- **Attendance status toggle** (Attending/Not Attending)
- **Responsive design** works on all devices
- **10-guest limit** with alert notification

## Technologies Used 🛠️

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Styling**: Modern CSS with Flexbox
- **Version Control**: Git/GitHub

## Installation 💻

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/guest-list-manager.git

2.Open index.html in your browser

Usage 🖱️
1.Enter guest name in the input field

2.Click "Add Guest" to add to the list

3.Toggle attendance status with the status button

4.Remove guests with the delete button (🗑️)

Code Structure 📂
guest-list-manager/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # Main JavaScript logic
└── README.md           # This documentation

Customization 🎨
Change Category Colors:
Modify these CSS variables in style.css:
:root {
  --friend-color: #4CAF50;
  --family-color: #2196F3;
  --colleague-color: #FF9800;
}

Adjust Guest Limit:
Edit in script.js:
const maxGuests = 10; // Change this number
Contributing 🤝
Contributions are welcome! Please follow these steps:

1.Fork the project

2.Create your feature branch (git checkout -b feature/AmazingFeature)

3.Commit your changes (git commit -m 'Add some amazing feature')

4.Push to the branch (git push origin feature/AmazingFeature)

5.Open a Pull Request

License 📄
This project is licensed under the MIT License - see the LICENSE file for details.

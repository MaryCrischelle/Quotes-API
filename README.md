# Quotes-API
📜 Quote of the Day App

A modern Quote of the Day web application built using HTML, CSS, and JavaScript.
It fetches random quotes from an API, displays them with a typing animation, includes sound effects, and supports dark mode with theme persistence.

🌟 Features

🔄 Fetches random quotes from an API

✍️ Typing animation for quote and author

🎵 Button click sound effect

🌗 Light / Dark mode toggle

💾 Theme saved using localStorage

✨ Glassmorphism UI with animated gradient background

📱 Fully responsive (mobile-friendly)

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling, animations, glassmorphism

JavaScript (ES6) – API fetching, DOM manipulation

Font Awesome – Quote icons

DummyJSON Quotes API – Quote source

🌐 API Used

DummyJSON Random Quote API

https://dummyjson.com/quotes/random

Sample API Response:
{
  "id": 1,
  "quote": "Your time is limited, so don’t waste it living someone else’s life.",
  "author": "Steve Jobs"
}

📂 Project Structure
quote-api/
│
├── index.html      # Main HTML file
├── style.css       # Styles & animations
├── script.js       # JavaScript logic
└── README.md       # Project documentation

🚀 How to Run the Project

Download or clone the repository

git clone https://github.com/your-username/quote-api.git


Open the project folder

Open index.html in your browser

No server required

Works fully offline except for API fetch

🌙 Dark Mode

Click the 🌙 / ☀️ button in the top-right corner

Theme preference is saved automatically

Uses CSS class toggling and localStorage

🎨 UI Highlights

Animated gradient background

Floating glass container effect

Smooth hover & transition animations

Mobile-responsive typography


🧠 What You’ll Learn From This Project

Fetching data from an API using fetch()

Async / Await handling

DOM manipulation

CSS animations & keyframes

Dark mode implementation

UI/UX design fundamentals

📄 License

This project is open-source and free to use for learning and personal projects.

🙌 Credits

Quotes API: DummyJSON

Icons: Font Awesome

Sound effect: SoundJay

# Scientific Calculator

🧮 Scientific Calculator (Web)

A fully functional Scientific Calculator built using HTML, CSS, and JavaScript.
This calculator supports basic arithmetic, scientific functions, keyboard input, and has a clean, modern UI.

🌟 Features

➕ Basic operations: + − × ÷

📐 Scientific functions:

sin, cos, tan

log (base 10)

ln (natural logarithm)

√ (square root)

x^y (power)

🔢 Mathematical constants:

π (Pi)

e (Euler’s number)

⌫ Backspace / delete

🧹 Clear all (C)

⌨️ Full keyboard support

❌ Error handling for invalid expressions

🛠️ Technologies Used

HTML5 – Calculator layout

CSS3 – Styling & responsive grid layout

JavaScript (ES6) – Calculator logic & evaluation

📂 Project Structure
scientific-calculator/
│
├── index.html     # Calculator UI
├── calcu.css      # Styles
├── calcu.js       # Calculator logic
└── README.md      # Documentation

🚀 How to Run the Project

Clone the repository

git clone https://github.com/your-username/scientific-calculator.git


Open the project folder

Open index.html in your browser

No server required

Works offline

⌨️ Keyboard Shortcuts
Key	Action
0–9	Enter numbers
+ - * /	Operators
( ) .	Parentheses & decimal
Enter	Calculate
Backspace	Delete last character
Esc	Clear display
🧠 How It Works

User input is displayed in a text field

Mathematical functions are converted to Math.* equivalents

Expressions are evaluated using JavaScript’s eval() method

Errors are caught and displayed as "Error"

🎨 UI Design

Purple background with centered calculator

Neon-style display screen

Grid-based button layout

Color-coded buttons:

🟠 Operators

🟢 Equals

🔴 Clear

⚠️ Note

This project uses eval() for expression evaluation.
It is safe for learning and personal projects, but not recommended for production environments without proper input sanitization.

📄 License

This project is open-source and free to use for educational purposes.

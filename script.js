/* =========================
   ELEMENTS
========================= */
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const themeToggle = document.getElementById("themeToggle");

const apiURL = "https://dummyjson.com/quotes/random";

/* =========================
   BUTTON CLICK SOUND
========================= */
const clickSound = new Audio(
  "https://www.soundjay.com/buttons/sounds/button-29.mp3"
);
clickSound.volume = 0.5;

/* =========================
   TYPING ANIMATION
========================= */
function typeText(element, text, speed = 40) {
    element.textContent = "";
    let index = 0;

    function typing() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

/* =========================
   FETCH QUOTE
========================= */
async function getQuote() {
    try {
        clickSound.play();

        btnEl.innerText = "Loading...";
        btnEl.disabled = true;

        quoteEl.innerText = "Updating...";
        authorEl.textContent = "";

        const response = await fetch(apiURL);
        const data = await response.json();

        const quoteContent = data.quote;
        const quoteAuthor = data.author;

        typeText(quoteEl, quoteContent, 35);
        setTimeout(() => {
            typeText(authorEl, `~ ${quoteAuthor}`, 50);
        }, quoteContent.length * 35);

        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;

    } catch (error) {
        console.error(error);
        quoteEl.innerText = "An error happened, try again later 😢";
        authorEl.innerText = "";
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    }
}

/* =========================
   DARK MODE TOGGLE
========================= */
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change icon
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

/* =========================
   INIT
========================= */
getQuote();
btnEl.addEventListener("click", getQuote);

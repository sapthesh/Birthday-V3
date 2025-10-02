# 🎂 Birthday Web Template V3 - The Grand Celebration 🎂

<img src="https://img.shields.io/github/repo-size/sapthesh/Birthday-V3?style=for-the-badge&logo=github&color=ff69b4&logoColor=white" alt="Repo Size"> <img src="https://img.shields.io/github/last-commit/sapthesh/Birthday-V3?style=for-the-badge&logo=github&color=f4d03f&logoColor=white" alt="Last Commit"> 
<a href="https://hits.sh/github.com/sapthesh/Birthday-V3/"><img alt="Hits" src="https://hits.sh/github.com/sapthesh/Birthday-V3.svg?style=for-the-badge"/></a>
<a href="https://hits.sh/github.com/sapthesh/Birthday-V3/"><img alt="Hits" src="https://hits.sh/github.com/sapthesh/Birthday-V3.svg?view=today-total&style=for-the-badge&color=fe7d37"/></a>
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-3.0-blue.svg?style=for-the-badge)]()

Welcome to Birthday V3 – an immersive and highly interactive web template designed to deliver a truly memorable birthday surprise! This version elevates the experience with a multi-step reveal, background music, and a dazzling array of animations, all while remaining fully responsive and easy to customize.

## ✨ Features

* **Four-Step Guided Reveal:** A delightful journey from a welcome screen, through an interactive envelope, an unfolding letter, and finally, a grand animated celebration.
* **Background Music:** A cheerful, looping instrumental track to set the festive mood (user-initiated for browser compatibility).
* **Rich & Dynamic Animations:**
    * **Confetti Cannon:** Explosions of colorful confetti dynamically burst across the screen.
    * **Rising Balloons:** Graceful balloons float upwards, adding to the celebratory atmosphere.
    * **CSS Fireworks:** Subtle, elegant fireworks animate in the background.
    * **Typewriter Text Effect:** The main greeting is charmingly typed out character by character.
    * **Interactive Cake:** A beautiful CSS cake with a flickering candle that can be "blown out" on hover.
    * Smooth transitions and subtle animations for the envelope and letter.
* **Modern & Responsive Design:** Crafted with Flexbox and Grid, ensuring a flawless look and feel on any device, from smartphones to large desktops.
* **Zero External Dependencies:** Built purely with HTML, CSS, and vanilla JavaScript for optimal performance and simplicity.
* **Highly Customizable:** Easily personalize the recipient's name, messages, and even the background music.

## 🚀 Getting Started

Getting this amazing birthday template up and running is straightforward.

### Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge).
* A suitable `.mp3` background music file (e.g., `birthday_song.mp3`).

### Installation & Local Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sapthesh/Birthday-V3.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Birthday-V3
    ```
3.  **Add your music file:**
    Place your chosen birthday instrumental track (e.g., `birthday_song.mp3`) directly into the `Birthday-V3` folder.
    * *Note: Ensure the file is named `birthday_song.mp3` or update the `<source src="birthday_song.mp3">` tag in `index.html` to match your filename.*
4.  **Open in Browser:**
    Simply open the `index.html` file in your web browser.

***

## 🎮 How to Customize

Personalizing this template is very easy:

1.  **Recipient's Name & Main Greeting:**
    * Open `script.js` in a text editor.
    * Edit the `recipientName` and `messageGreeting` variables at the top of the file:
        ```javascript
        const recipientName = "Alice"; // Change "Sapthesh" to the birthday person's name
        const messageGreeting = "Happy Birthday,"; // Customize the main greeting
        ```
2.  **Letter Content:**
    * Open `index.html` in a text editor.
    * Locate the `<div class="letter">` section (around line 40).
    * Modify the paragraphs (`<p>`) inside to write your custom message.
3.  **Final Wish & Signature:**
    * Open `index.html`.
    * Locate the `<p class="final-wish">` and `<p class="signature">` tags within the `<div class="celebration-card">` section.
    * Edit the text to reflect your personal wishes and signature.
4.  **Background Music:**
    * If you used a different filename for your `.mp3`, open `index.html` and update the `src` attribute of the `<source>` tag within the `<audio>` element to point to your file.

***

## 🤝 Contributing

Contributions are highly encouraged! If you have ideas for more animations, features, or design improvements, please feel free to contribute.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingNewAnimation`)
3.  Commit your Changes (`git commit -m 'Add some AmazingNewAnimation'`)
4.  Push to the Branch (`git push origin feature/AmazingNewAnimation`)
5.  Open a Pull Request

***

## 📜 License

Distributed under the MIT License. See the `LICENSE` file for more information.

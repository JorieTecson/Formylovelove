const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const container = document.querySelector(".container"); // container frame

function moveButton() {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - buttonWidth - 10; // 10px margin
    const maxY = containerRect.height - buttonHeight - 10;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("click", function (e) {
    e.preventDefault();
    moveButton();
});

noBtn.addEventListener("mouseenter", moveButton);

yesBtn.addEventListener("click", function () {
    // Hide the question
    const valentineText = document.getElementById("valentineText");
    valentineText.style.display = "none";

    // Show love message
    message.innerHTML = "Yeyyyyyyyyy 💖 I love you mylove!!!😍";

    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Change body background
    document.body.style.background = "linear-gradient(to right, #ff4d6d, #ff99ac)";

    // Add pop animation
    message.style.animation = "pop 0.6s ease";

    // Show GIF
    const gifContainer = document.getElementById("gifContainer");
    const gif = document.createElement("img");
    gif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    gif.style.width = "300px";
    gif.style.display = "block";
    gif.style.margin = "20px auto";
    gifContainer.appendChild(gif);

// Add multiple slider images with stagger and spacing
const sliderImages = [
    "kiss.jpg",
    "hello.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];

sliderImages.forEach((src, index) => {
    const slider = document.createElement("img");
    slider.src = src;
    slider.classList.add("slider-image");

    // Start off-screen
    slider.style.left = "-150px";

    // Stagger the timing
    slider.style.animationDelay = `${index * 1.2}s`;

    // Randomize position within the bottom 15% of the screen
    const randomBottom = Math.floor(Math.random() * 10); 
    slider.style.bottom = `${2 + randomBottom}%`;

    document.body.appendChild(slider);
});


    // Create hearts, cupids, and sparkles
    createHearts(50);
    createCupid(3);
    createSparkles(20);
});

// Floating hearts
function createHearts(count = 30) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = 16 + Math.random() * 20 + "px";
        heart.style.animation = `float ${2 + Math.random() * 2}s linear forwards`;
        heart.style.pointerEvents = "none";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}

// Cupid animation
function createCupid(count = 1) {
    for (let i = 0; i < count; i++) {
        const cupid = document.createElement("img"); // fixed from "jpg"
        cupid.src = "https://i.pinimg.com/1200x/1d/eb/3b/1deb3b1b93e5425fcfd5b546693ad581.jpg";
        cupid.style.position = "absolute";
        cupid.style.width = "50px";
        cupid.style.left = Math.random() * window.innerWidth + "px";
        cupid.style.top = window.innerHeight + "px";
        cupid.style.animation = `cupidFloat ${4 + Math.random() * 3}s linear forwards`;
        cupid.style.pointerEvents = "none";
        document.body.appendChild(cupid);

        setTimeout(() => cupid.remove(), 7000);
    }
}

// Sparkle effect
function createSparkles(count = 20) {
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement("div");
        sparkle.innerHTML = "✨";
        sparkle.style.position = "absolute";
        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";
        sparkle.style.fontSize = 10 + Math.random() * 15 + "px";
        sparkle.style.animation = `sparkle ${1 + Math.random()}s ease-in-out infinite alternate`;
        sparkle.style.pointerEvents = "none";
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 2000);
    }
}

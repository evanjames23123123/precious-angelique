
const welcome = document.getElementById("welcome");
const letterScreen = document.getElementById("letterScreen");
const clickMe = document.getElementById("clickMe");
const envelope = document.getElementById("envelope");
const loveMessage = document.getElementById("loveMessage");
const signature = document.getElementById("signature");
const replay = document.getElementById("replay");
const heartsContainer = document.getElementById("hearts");

const message = "I Love You So Much, My Baby Angel";
let typingTimer;

// Create floating hearts in the background.
function createHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Keep creating floating hearts.
setInterval(createHeart, 700);

// Type the love message one character at a time.
function typeMessage() {
    clearTimeout(typingTimer);

    loveMessage.textContent = "";
    loveMessage.classList.remove("finished");
    signature.classList.remove("show");

    let index = 0;

    function typeNext() {
        loveMessage.textContent = message.slice(0, index);
        index++;

        if (index <= message.length) {
            typingTimer = setTimeout(typeNext, 85);
        } else {
            loveMessage.classList.add("finished");
            signature.classList.add("show");
        }
    }

    typeNext();
}

// Show the love letter after clicking the button.
clickMe.addEventListener("click", () => {
    welcome.style.display = "none";
    letterScreen.style.display = "block";

    setTimeout(() => {
        envelope.classList.add("open");
        typeMessage();
    }, 600);
});

// Replay the letter animation.
replay.addEventListener("click", () => {
    clearTimeout(typingTimer);

    envelope.classList.remove("open");
    loveMessage.textContent = "";
    loveMessage.classList.remove("finished");
    signature.classList.remove("show");

    setTimeout(() => {
        envelope.classList.add("open");
        typeMessage();
    }, 300);
});
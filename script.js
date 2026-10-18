* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Trebuchet MS", sans-serif;
    overflow: hidden;
    background: #ffe5ef;
}

.container {
    position: relative;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    background:
        radial-gradient(circle, #fff8fb, transparent 65%),
        linear-gradient(135deg, #ffe5ef, #ffc9df);
}

/* Usagi pictures */
.usagi {
    position: absolute;
    width: 145px;
    height: auto;
    object-fit: contain;
    z-index: 1;
    pointer-events: none;
    animation: bunnyFloat 4s ease-in-out infinite;
}

.usagi1 {
    top: 5%;
    left: 5%;
    transform: rotate(-10deg);
}

.usagi2 {
    top: 7%;
    right: 6%;
    animation-delay: 1s;
}

.usagi3 {
    bottom: 15%;
    left: 50%;
    animation-delay: 2s;
}

.usagi4 {
    bottom: 15%;
    right: 10%;
    animation-delay: 1.5s;
}

/* Corner hearts */
.corner-heart {
    position: absolute;
    color: #f16b9f;
    font-size: 38px;
    z-index: 2;
    animation: heartbeat 2s infinite;
}

.top-left {
    top: 18px;
    left: 20px;
}

.top-right {
    top: 18px;
    right: 20px;
}

.bottom-left {
    bottom: 18px;
    left: 20px;
}

.bottom-right {
    bottom: 18px;
    right: 20px;
}

/* Welcome screen */
.welcome {
    z-index: 3;
    position: relative;
    text-align: center;
    padding: 25px;
    animation: fadeIn 1s ease;
}

.welcome h1 {
    color: #c83d76;
    font-family: Georgia, serif;
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    margin-bottom: 15px;
}

.welcome p {
    color: #a74d73;
    margin-bottom: 25px;
}

#clickMe {
    background: linear-gradient(135deg, #ff91b9, #f45f99);
    border: 3px solid white;
    border-radius: 50px;
    padding: 17px 38px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    box-shadow: 0 8px 25px #e76b9b66;
    animation: pulse 2s infinite;
    transition: transform 0.25s;
}

#clickMe:hover {
    transform: scale(1.08);
}

.welcome .hint {
    font-size: 13px;
    margin-top: 22px;
}

/* Floating hearts */
.floating-heart {
    position: absolute;
    bottom: -40px;
    color: #f16b9f;
    pointer-events: none;
    animation: floatUp linear forwards;
    z-index: 2;
}

/* Love letter */
.letter-screen {
    display: none;
    z-index: 4;
    position: relative;
    width: min(90%, 620px);
    text-align: center;
    animation: fadeIn 1s ease;
}

.letter-card {
    padding: 35px 20px;
    background: #fff9fcdf;
    border: 2px solid white;
    border-radius: 25px;
    box-shadow: 0 15px 45px #d45c8c30;
    backdrop-filter: blur(6px);
}

.envelope {
    position: relative;
    width: 140px;
    height: 95px;
    margin: 0 auto 25px;
}

.envelope-back {
    position: absolute;
    inset: 0;
    background: #ffabc9;
    border-radius: 6px;
}

.letter-paper {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 8px;
    height: 75px;
    background: white;
    border-radius: 4px;
    transition: transform 1s ease;
}

.envelope-flap {
    position: absolute;
    inset: 0;
    background: #ffd0e0;
    clip-path: polygon(0 0, 100% 0, 50% 60%);
    transform-origin: top;
    transition: transform 0.7s ease;
}

.envelope-heart {
    position: absolute;
    top: 38px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: #e95c92;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    z-index: 2;
    transition: opacity 0.3s;
}

.envelope.open .envelope-flap {
    transform: rotateX(180deg);
}

.envelope.open .letter-paper {
    transform: translateY(-45px);
}

.envelope.open .envelope-heart {
    opacity: 0;
}

.letter-label {
    color: #bd6287;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 15px;
}

#loveMessage {
    color: #c83d76;
    font-family: Georgia, serif;
    font-style: italic;
    font-weight: normal;
    font-size: clamp(2rem, 6vw, 3.5rem);
    line-height: 1.3;
    min-height: 2.6em;
    overflow-wrap: anywhere;
    text-shadow: 0 2px white;
}

#loveMessage::after {
    content: "|";
    animation: blink 0.7s infinite;
}

#loveMessage.finished::after {
    display: none;
}

.signature {
    color: #bd6287;
    margin-top: 15px;
    opacity: 0;
    transition: opacity 0.8s;
}

.signature.show {
    opacity: 1;
}

#replay {
    margin-top: 25px;
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid #f3a4c2;
    color: #b84476;
    background: #fff0f6;
    cursor: pointer;
}

#replay:hover {
    background: #ffdce9;
}

/* Animations */
@keyframes pulse {
    0%, 100% {
        box-shadow: 0 8px 25px #e76b9b66;
    }
    50% {
        box-shadow: 0 8px 35px #e76b9bb0;
    }
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
}

@keyframes bunnyFloat {
    0%, 100% { translate: 0 0; }
    50% { translate: 0 -12px; }
}

@keyframes floatUp {
    from {
        transform: translateY(0) rotate(0);
        opacity: 0;
    }
    15% { opacity: 0.8; }
    to {
        transform: translateY(-110vh) rotate(35deg);
        opacity: 0;
    }
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
    50% { opacity: 0; }
}

@media (max-width: 600px) {
    .usagi {
        width: 85px;
    }

    .welcome {
        padding: 20px 12px;
    }

    .letter-card {
        padding: 25px 15px;
    }

    .corner-heart {
        font-size: 27px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
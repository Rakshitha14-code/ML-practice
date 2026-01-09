let pages;
let current = 0;

window.onload = function () {
  pages = document.querySelectorAll(".page");
};

// PAGE NAVIGATION
function nextPage() {
  pages[current].classList.remove("active");
  current++;

  if (current < pages.length) {
    pages[current].classList.add("active");
  }
}

function nextPage() {
    const activePage = document.querySelector('.page.active');
    const nextStep = activePage.nextElementSibling;

    if (nextStep && nextStep.classList.contains('page')) {
        activePage.classList.remove('active');
        nextStep.classList.add('active');
    }
}

function musicPlay() {
    var audio = document.getElementById("birthdaySong");
    audio.volume = 0.5; // 0.5 ante 50% volume. Meeku full volume kavali ante idi pettakandi.
    audio.play();
}

// function nextPage() {
//     const currentActivePage = document.querySelector('.page.active');
//     if (currentActivePage) {
//         const nextTargetPage = currentActivePage.nextElementSibling;
        
//         // Oka vela tharvatha page unte, dhani active chestham
//         if (nextTargetPage && nextTargetPage.classList.contains('page')) {
//             currentActivePage.classList.remove('active');
//             nextTargetPage.classList.add('active');
//         }
//     }
// }

// Letter open chese logic

function openLetter() {
    document.getElementById('envelopeWrapper').style.display = 'none';
    document.getElementById('letter').style.display = 'flex'; // 'block' badulu 'flex' pettandi
    document.getElementById('letter').style.flexDirection = 'column';
    document.getElementById('letter').style.alignItems = 'center';
}
// function openLetter() {
//     const letter = document.getElementById("letter");
//     const envelope = document.querySelector(".envelope");
    
//     if (letter) {
//         letter.style.display = "block";
//         envelope.style.display = "none"; // Envelope hide chesthe overlap avvadhu
//     }
// }


// 📸 PHOTO FLIP
function toggleMsg(box) {
  box.classList.toggle("active");
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 1200);

function startConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "24px";
    confetti.style.animation = "fall 3s linear";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

if (current === 3) {
  startConfetti();
}

const birthdayEmojis = ["🎂", "🎉", "🎈", "🥳", "💝"];

setInterval(() => {
  const emoji = document.createElement("div");
  emoji.className = "float-emoji";
  emoji.innerHTML =
    birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 5000);
}, 1000);

setInterval(() => {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.fontSize = "20px";
  sparkle.style.opacity = "0.8";

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1000);
}, 300);

setInterval(() => {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.innerHTML = "🎈";
  balloon.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(balloon);

  setTimeout(() => balloon.remove(), 6000);
}, 1000);

const colors = [
  "#ff9a9e",
  "#fad0c4",
  "#fbc2eb",
  "#a1c4fd",
  "#c2e9fb",
  "#ffe259"
];

let colorIndex = 0;

setInterval(() => {
  document.body.style.background =
    `linear-gradient(120deg, ${colors[colorIndex]}, white)`;
  colorIndex = (colorIndex + 1) % colors.length;
}, 3000);

if (current === 3) {
  // start emojis / balloons only on final page
}

function createFirework(x, y) {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = x + "px";
  firework.style.top = y + "px";

  for (let i = 0; i < 10; i++) {
    const spark = document.createElement("span");

    const angle = Math.random() * 360;
    const distance = Math.random() * 80 + 20;

    spark.style.setProperty("--x",
      Math.cos(angle) * distance + "px");
    spark.style.setProperty("--y",
      Math.sin(angle) * distance + "px");

    spark.style.background =
      `hsl(${Math.random() * 360}, 100%, 60%)`;

    firework.appendChild(spark);
  }

  document.body.appendChild(firework);

  setTimeout(() => firework.remove(), 1000);
}

setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight / 2;
  createFirework(x, y);
}, 2000);


if (current === 3) {
  setInterval(() => {
    createFirework(
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight / 2
    );
  }, 800);
}


function flipCard(card) {
    card.classList.toggle('active');
    updateCounter();
}

function updateCounter() {
    const flipped = document.querySelectorAll('.photo-box.active').length;
    const counterText = document.getElementById('counterText');
    if (flipped === 4) {
        counterText.innerHTML = "✨ All Memories Unlocked! ❤️";
    } else {
        counterText.innerHTML = `${flipped} of 4 messages discovered!`;
    }
}

function flipCard(card) {
    card.classList.toggle('active');
    
    // Anni flip ayyaya ani check chestundi
    const totalFlipped = document.querySelectorAll('.photo-box.active').length;
    if (totalFlipped === 4) {
        setTimeout(() => {
            document.getElementById('unlockedModal').style.display = 'flex';
        }, 800);
    }
}

// Flow Buttons Control
function showFinalLetter() {
    document.getElementById('unlockedModal').style.display = 'none';
    document.getElementById('finalLetterModal').style.display = 'flex';

}

function showCard() {
    // 1. Surprise button unna container ni hide chestundi
    document.getElementById('surprise-container').style.display = 'none';
    
    // 2. Main Card (Letter) ni chupisthundi
    const card = document.getElementById('main-card');
    card.style.display = 'block';
    
    // Card madyaloki ravalante Flex apply cheyali (Optional if you use flex on body)
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
}

function showSealedPage() {
    document.getElementById('finalLetterModal').style.display = 'none';
    document.getElementById('sealedModal').style.display = 'flex';
}

function restart() {
    location.reload(); // Page ni reset chestundi
}

// Step 1 nundi Step 2 ki (Modal chupinchadam)
function showUnlockedModal() {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('unlockedModal').style.display = 'block';
}

// Modal nundi Message ki velladaniki
function showFinalCard() {
    document.getElementById('unlockedModal').style.display = 'none';
    
    // Message section chupisthundi
    const messageSection = document.getElementById('loveLetterMessage');
    messageSection.style.display = 'block';
    
    // Layout alignment
    setupLayout();
}

// Message nundi Final Sealed Card ki velladaniki
function sealTheLetter() {
    document.getElementById('loveLetterMessage').style.display = 'none';
    
    // Final Sealed Card chupisthundi
    const finalCard = document.getElementById('finalCard');
    finalCard.style.display = 'block';
    
    // Date set chestundi
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-US', options);
    
    setupLayout();
}

// Common function for centering the card
function setupLayout() {
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
}


function sendLove() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-love';
            const types = ['💋', '❤️', '💖', '💕', '😘'];
            heart.innerText = types[Math.floor(Math.random() * types.length)];
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (Math.random() * 20 + 20) + "px";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 50);
    }
}


function showUnlockedModal() {
    // Current page (page5) ni hide chestundi
    document.getElementById('page5').classList.remove('active');
    
    // Modal (Popup) ni chupisthundi
    document.getElementById('unlockedModal').style.display = 'flex';
}

function sendLove() {
    const kissBtn = document.querySelector('.btn-kiss');
    
    // Button click response
    kissBtn.innerHTML = "Kiss Sent! 💋";
    
    // Kiss symbols blow avvadaniki loop
    for (let i = 0; i < 20; i++) {
        createKiss();
    }

    // 2 seconds tharvatha button text normal avthundi
    setTimeout(() => {
        kissBtn.innerHTML = "Send a Virtual Kiss 💋";
    }, 2000);
}

function createKiss() {
    const kiss = document.createElement('div');
    kiss.classList.add('kiss-emoji');
    kiss.innerHTML = '💋';
    
    // Random position and size
    kiss.style.left = Math.random() * 100 + 'vw';
    kiss.style.animationDuration = Math.random() * 2 + 3 + 's';
    kiss.style.fontSize = Math.random() * 20 + 20 + 'px';
    
    document.body.appendChild(kiss);
    
    // Animation tharvatha element ni remove chesthunnam
    setTimeout(() => {
        kiss.remove();
    }, 4000);
}
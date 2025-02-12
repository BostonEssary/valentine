const reasons = [
    "Your smile brightens my darkest days",
    "The way you make me laugh",
    "Your kindness towards others",
    "How you always believe in me",
    "The way your eyes light up when you're happy",
    "Your incredible strength",
    "How you make everything better just by being there",
    "Your amazing hugs",
    "The way you dance when no one's watching",
    "Your passionate heart",
    "How you inspire me to be better",
    "The little things you do to show you care"
];

function showReason() {
    const reasonText = document.getElementById('reasonText');
    const randomIndex = Math.floor(Math.random() * reasons.length);
    reasonText.textContent = reasons[randomIndex];
    reasonText.style.opacity = 0;
    
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        reasonText.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
} 
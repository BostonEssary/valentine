document.getElementById('startButton').addEventListener('click', function() {
    const audio = document.getElementById('backgroundMusic');
    audio.loop = true;
    audio.play();
    
    const input = document.createElement('input');

    const whyILoveYouContent = `
        <div class="cupid-hearts">
            <span>💘</span>
            <span>💘</span>
            <span>💘</span>
            <span>💘</span>
            <span>💘</span>
        </div>
        
        <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="wave" clipPathUnits="objectBoundingBox">
                    <path d="M0,0.5 C0.2,0.3 0.3,0.7 0.5,0.5 C0.7,0.3 0.8,0.7 1,0.5 L1,1 L0,1 Z" />
                </clipPath>
            </defs>
        </svg>
        
        <div class="poem-container">
            <div class="poem-wrapper">
                <h1 class="love-header">Why I Love You...</h1>
                <div class="poem-content">
                    Your eyes are warm and inviting, no harshness to be seen. Their softness would make anyone feel safe and confident.
                    <br><br>
                    Hearing you laugh makes my heart happy, not only because of how much I love it, but because I know I am laughing too.
                    <br><br>
                    Beauty is simple for you, mind and matter. Dazzling in any light and always having a heart of gold for the people you love.
                    <br><br>
                    The road ahead is never a dull moment with you. No matter if it's the backyard or across the country, the pod is always lively with you.
                </div>
                <button onclick="showMemoriesPage()" class="btn">Our Memories</button>
            </div>
        </div>`;

    const content = document.getElementById('content');
    content.innerHTML = whyILoveYouContent;
});

const memoriesContent = `
    <div class="container">
        <h1>Memories I Love</h1>
        <div id="memoryImage" class="memory-image"></div>
        <div id="memoryText" class="message"></div>
        <div style="display: flex; gap: 20px; justify-content: center;">
            <button onclick="showMemory()" class="btn">Show Me A Memory</button>
        </div>
    </div>
    <script src="memories-script.js"></script>
`;

function showMemoriesPage() {
    const content = document.getElementById('content');
    content.innerHTML = memoriesContent;
    
    const script = document.createElement('script');
    script.src = 'memories-script.js';
    script.onload = function() {
        showMemory();
    };
    document.body.appendChild(script);
}

const indexContent = `
    <div class="hearts-bg">
        <span>💗</span>
        <span>💓</span>
        <span>💝</span>
    </div>
    <h1 class="title">Will you be my valentine?</h1>
    <h3 class="subtitle">Pretty please?</h3>
    <div class="text-container">
        <h5 class="subsubtitle">With a</h5>
        <span class="heart">🍒</span>
        <h5 class="subsubtitle">on top!</h5>
    </div>
`;

function showIndexPage() {
    const content = document.getElementById('content');
    content.innerHTML = indexContent;
} 
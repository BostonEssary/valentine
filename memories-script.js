const memories = [
    {
        image: "assets/cassie/cassie1.jpg",
        text: "This was when we went to the Scicilian Butcher and talked about our future together and made real goals. We really grew as a couple together this last year and I know it is only going to get better from here."
    },
    {
        image: "assets/cassie/cassie2.jpg",
        text: "Our trip to California was such an amazing vacation. I really enjoyed having some intimate alone time, just us and the world. Plus, the rides were so cool!"
    },
    {
        image: "assets/cassie/cassie3.jpg",
        text: "The line to get into this food festival was awful, but the food was great. "
    },
    {
        image: "assets/cassie/cassie4.jpg",
        text: "This was when we went to the Folk Music Festival to see Martin play. Can't believe how much talent runs through your family."
    },
    {
        image: "assets/cassie/cassie5.jpg",
        text: "Speaking about talent, here you are playing the ukulele on a Duran camping trip. From learning how to fish with Nino or making tortillas with Nina, these times are so special to me."
    },
    {
        image: "assets/cassie/cassie6.jpg",
        text: "Us at your favorite spot! I know you are craving to go again!"
    },
    {
        image: "assets/cassie/cassie7.jpg", 
        text: "Halloween has always been our thing, our special holiday. I know I get the grumps sometime, but those videos and pictures (and your smile) are always worth it."
    },
    {
        image: "assets/cassie/cassie8.jpg",
        text: "Our trip to Austin was kinda slow, but overall awesome. Seeing the world with you is just one of those things that I love about life. Spending it with your friends makes it even better!"
    },
    {
        image: "assets/cassie/cassie9.jpg",
        text: "Sedona is a pretty. You're pretty. You two have a lot in common!"
    },
    {
        image: "assets/cassie/cassie10.jpg",
        text: "And this was the other day! I love that you are so ingrained with my familty and how you love them as much as me. Both of my families. You'll never know how much that means to me"
    }
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    showMemory();
});

function showMemory() {
    const memory = memories[currentIndex];
    
    const memoryImage = document.getElementById('memoryImage');
    const memoryText = document.getElementById('memoryText');
    
    if (memoryImage && memoryText) {
        memoryImage.style.opacity = 0;
        memoryText.style.opacity = 0;
        
        memoryImage.innerHTML = `<img src="${memory.image}" alt="Memory">`;
        memoryText.textContent = memory.text;

        if (currentIndex === memories.length - 1) {
            const heyButton = document.createElement('button');
            heyButton.className = 'btn';
            heyButton.textContent = 'Hey...';
            heyButton.onclick = showIndexPage;
            
            const buttonContainer = document.querySelector('.container > div:last-of-type');
            buttonContainer.appendChild(heyButton);
        }

        let opacity = 0;
        const fadeIn = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
            memoryImage.style.opacity = opacity;
            memoryText.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    }

    currentIndex++;
    if (currentIndex >= memories.length) {
        currentIndex = 0;
    }
} 
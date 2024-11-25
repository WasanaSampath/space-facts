// script.js
const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "A day on Venus is longer than its year. It takes Venus 243 Earth days to rotate on its axis!",
    "Bananas are berries, but strawberries aren't!",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after just 38 minutes!",
    "Cows have best friends and get stressed when separated from them!"
];

function generateFact() {
    const factDisplay = document.getElementById('factDisplay');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factDisplay.textContent = randomFact;
}

function shareFact(platform) {
    const fact = document.getElementById('factDisplay').textContent;
    const encodedFact = encodeURIComponent(fact);
    
    if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${encodedFact}`, '_blank');
    } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${encodedFact}`, '_blank');
    }
}

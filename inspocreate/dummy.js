var heart = document.querySelectorAll(".heart");
console.log(`The number of Heart Emojis in this webpages are ${heart.length}`)


for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', filledHeartButton)
}

function filledHeartButton(event) {
    event.currentTarget.classList.toggle('redHeart')
}

console.log(`Hello World`)
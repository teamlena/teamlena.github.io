window.onload = function(){
    document.getElementById("regular-pass-autoplay").play()
    document.getElementById("premium-pass-autoplay").play()
}

const video = document.querySelector("video");

video.addEventListener("ended", (event) => {
    video.currentTime = 0;
    video.play();
});

function startVideo() {
    document.getElementById("lena-video").play()
}

document.getElementById('burger-menu').onclick = function () {
    const menu = document.getElementById('menu')
    menu.classList.toggle('hidden');

    document.getElementById('close').onclick = function() {
        menu.classList.toggle('hidden');
    }
}

document.getElementById('passes-section-navigation').onclick = function () {
    const menu = document.getElementById('menu')
    menu.classList.toggle('hidden');
}

document.getElementById('join-discord').onclick = function () {
    window.location.href = 'https://discord.gg/d4AFchmZEU'
}

document.getElementById('join-discord-desktop').onclick = function () {
    window.location.href = 'https://discord.gg/d4AFchmZEU'
}

document.getElementById('faq-section-navigation').onclick = function () {
    const menu = document.getElementById('menu')
    menu.classList.toggle('hidden');
}

document.getElementById("play-button-lena-video").onclick = function () {
    this.classList.toggle('hidden')
    startVideo()
};

document.getElementById("lena-video").onclick = function () {
    const playButton = document.getElementById("play-button-lena-video");

    if (this.paused) {
        this.play();
        playButton.classList.toggle('hidden');
    } else {
        this.pause();
        playButton.classList.toggle('hidden');
    }
};

const accordion = document.getElementsByClassName('question-container');
const plusButtons = document.getElementsByClassName('plus-button');
const minusButtons = document.getElementsByClassName('minus-button');

for (let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
        plusButtons[i].classList.toggle('hidden')
        minusButtons[i].classList.toggle('hidden')
    })
}
const heading = document.getElementById('heading');
const subHeading = document.getElementById('sub-heading');
const songImg = document.getElementById('song-img');
const audio = document.getElementById('audio');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const play = document.getElementById('play');

play.onclick = function () {
    if (audio.paused) {
        audio.play();
        play.src = "pause.png";
    }

    else {
        audio.pause();
        play.src = "play.png";
    }
}


audio.addEventListener('play', () => {
    play.src = "pause.png";
});
audio.addEventListener('pause', () => {
    play.src = "play.png";
});


var img = new Array(
    "pic2.jpg",
    "pic1.jpg",
    "pic3.jpg",
    "pic4.jpg"
);

var music = new Array(
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3",
    "audio4.mp3"
);

var song = new Array(
    "Dil Ko Karaar Aaya",
    "Mann Mera",
    "Thoda Thoda Pyaar",
    "Pal"
);


var artist = new Array(
    "Neha Kakkar & Yasser Desai",
    "Gajendra Verma",
    "Stebin Ben & Nilesh Ahuja",
    "Arijit Singh &Shreya Ghoshal"
);

let i = 0;

next.onclick = function () {
    if (i <= 3) {
    
        if (i == 3) {
            i = -1; 
        }

        
        document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i + 1] + '")';

        
        songImg.src = img[i + 1];

        
        audio.src = music[i + 1];
        audio.play();
        play.src = "pause.png";

        
        heading.innerHTML = song[i + 1];
        subHeading.innerHTML = artist[i + 1];
        i++;
    }
}


prev.onclick = function () {
    if (i >= 0) {
        
        if (i == 0) {
            i = 4; 
        }

        
        document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i - 1] + '")';

        
        songImg.src = img[i - 1];

    
        audio.src = music[i - 1];
        audio.play();
        play.src = "pause.png";


        heading.innerHTML = song[i - 1];
        subHeading.innerHTML = artist[i - 1];
        i--;
    }
}
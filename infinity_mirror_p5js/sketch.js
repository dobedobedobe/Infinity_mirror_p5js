let img;
let video;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    background(50);
    imageMode(CENTER)
    for (let i = 360; i > 40; i -= 30) {
        image(video, width/2, height/2, i * 4, i * 3)
    }
}

let video;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    background(50);
    tint(255, 150);
    imageMode(CENTER)
<<<<<<< HEAD
    //    for (let i = 40; i < 420; i += 100) {
    for (let i = 420; i > 40; i -= 50) {
        let x = width/2 + noise(i * frameCount*12);
        let y = height / 2 + noise(i * frameCount*2);

        console.log(x);
        //rotate(x/10*PI / 3.0)
        image(video, x, y, i * 4, i * 3)
=======
    for (let i = 360; i > 40; i -= 30) {
        image(video, width/2, height/2, i * 4, i * 3)
>>>>>>> b26a6cfa49ef3984e5e4053f9d686f286d017382
    }
}

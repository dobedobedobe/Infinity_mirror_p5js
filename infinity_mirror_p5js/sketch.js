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

    //    for (let i = 40; i < 420; i += 100) {
    for (let i = 420; i > 40; i -= 50) {
        let x = width / 2 + noise(i * frameCount * 12);
        let y = height / 2 + noise(i * frameCount * 2);

        console.log(x);
        //rotate(x/10*PI / 3.0)
        image(video, x, y, i * 4, i * 3)

    }
}

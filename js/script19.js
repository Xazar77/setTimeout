


let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let requestID;

let canvas = document.getElementById('stage');

let ctx = canvas.getContext('2d');

ctx.fillStyle = '#212121';

let posX = 0;
let boxWidth = 50;
let pixelsPerFrame = 5; 

ctx.fillRect(posX, 0, boxWidth, canvas.height);


function animate() {
    requestID = requestAnimationFrame(animate);

    
    if (posX <= (canvas.width - boxWidth)) {
        ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
        ctx.fillRect(posX, 0, boxWidth, canvas.height);
        posX += pixelsPerFrame;
    } else {
        cancelAnimationFrame(requestID);
    }
}

// начало анимации
startBtn.addEventListener('click', function (e) {
    e.preventDefault();

    requestID = requestAnimationFrame(animate);
});


// остановка анимации
stopBtn.addEventListener('click', function (e) {
    e.preventDefault();

    
    cancelAnimationFrame(requestID);
});


// сброс анимации
resetBtn.addEventListener('click', function (e) {
    e.preventDefault();

    
    posX = 0;

    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.fillRect(posX, 0, boxWidth, canvas.height);
});


function customSlicedText (element, content){
    element.innerHTML = `<div class="top">${content}</div> <div class="bottom">${content}</div>`;
}


const milliseconds = document.getElementById('ms');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
let conditionTimer = false;
let millisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

let stopSound = new Audio('stop.mp3');
let timerSound = new Audio('clocko.mp3');
let pauseSound = new Audio ('time-up.mp3');




start.addEventListener('click', function(){
    if(!conditionTimer){
        timerSound.play();
        conditionTimer = true;
        const timer = setInterval(() => {
            millisecond += 10;
            customSlicedText(milliseconds, millisecond);
            if(millisecond == 90){
                millisecond = 0;
                second++;

            }else if(second == 60){
                minute++;
                second = 0;

            }else if(minute == 60){
                minute = 0;
                hour++;
            }

            customSlicedText(seconds, second);
            customSlicedText(minutes, minute);
            customSlicedText(hours, hour);
        }, 90);  

        pause.addEventListener('click', function(){
            clearInterval(timer);
            conditionTimer = false;
            timerSound.pause();
            stopSound.pause();
            pauseSound.play();
        })

        reset.addEventListener('click', function(){
            stopSound.play();
            timerSound.pause();
            customSlicedText(milliseconds, millisecond);
            customSlicedText(seconds, second);
            customSlicedText(minutes, minute);
            customSlicedText(hours, hour);
            second = 0;
            millisecond = 0;
            minute = 0;
            hour = 0;
        })
    }
    stopSound.pause();
})

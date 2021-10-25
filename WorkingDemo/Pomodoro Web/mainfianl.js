

let minutes = "00";
let seconds = "00";
function onload() {
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}

let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');
let levels = document.querySelector('.levels');
let start_button = document.querySelector('.start_button');

let answers = document.querySelectorAll('.answer');

const getCheckedAnswer = () => {
    // let answer;
    let answerValue;
    answers.forEach((currentAnswerElement) => {
        if (currentAnswerElement.checked) {
            answerValue = currentAnswerElement.value;
            console.log(`the value which is checked is  ${answerValue}`);
        }
    });
    return answerValue;
};


let minutes_interval;
let seconds_interval;

start_button.addEventListener('click', start);
function start() {

    if (start_button.innerHTML === "start") {
        console.log("going to the start steps");
        start_button.innerHTML = "stop";

        const checkedAnswer = getCheckedAnswer();
        // console.log(`${checkedAnswer} checked answer value is here ` );

        minutes = checkedAnswer - 1;
        seconds = 59;
        min.innerHTML = minutes;
        sec.innerHTML = seconds;

        minutes_interval = setInterval(minutesTimer, 60000);
        seconds_interval = setInterval(secondsTimer, 1000);

        console.log("after interval ");

        function minutesTimer() {
            minutes = minutes - 1;
            min.innerHTML = minutes;
            if (minutes < 10) {
                min.innerHTML = '0' + minutes;
            }
            console.log("the minutes is changed");
        }


        function secondsTimer() {
            seconds = seconds - 1;
            sec.innerHTML = seconds;
            if (seconds < 10) {
                sec.innerHTML = '0' + seconds;
            }
            if (seconds <= 0)
             {
                if (minutes <= 0)
                 {
                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);

                    let show_msag = document.getElementById('Done');
                    show_msag.innerHTML = "Session Completed";
                    show_msag.classList.add('show_message');
                    start_button.innerHTML = "start";
                }
                // java second 0 huncha it is set to 60 again 
                seconds = 60;
            }
            console.log("the second is changed");
        }

    }

    else if (start_button.innerHTML === "stop") {
        console.log("stopping");
        start_button.innerHTML = "start";
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
        min.innerHTML = "00";
        sec.innerHTML = "00";
    }
}
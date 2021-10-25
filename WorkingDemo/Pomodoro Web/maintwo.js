let minutes = "00";
let seconds = "00";

// let minutes = answerValue;
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');
let levels = document.querySelector('.levels');
let start_button = document.querySelector('.start_button');

let answers = document.querySelectorAll('.answer');

levels.addEventListener('click', ()=>
{
    console.log("level is clicked");
    const checkedAnswer = getCheckedAnswer();
    min.innerHTML = checkedAnswer;
    sec.innerHTML = "00";
});

function onload()
 {
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}
//  as soon as the page loads the data will be there
const getCheckedAnswer = () =>
{
    // let answer;
    let answerValue;
    answers.forEach((currentAnswerElement) =>
    {
        if (currentAnswerElement.checked)
        {
            answerValue = currentAnswerElement.value;
            console.log(`answer value is ${answerValue}`);
        }
    });
    return answerValue;
};
function start() 
{
    
    if(start_button.innerHTML === "start")
    {
        start_button.innerHTML = "stop";
        const checkedAnswer = getCheckedAnswer();
        
        console.log("text content of button is start");
        console.log(`${checkedAnswer} checked answer value is here ` );

        minutes = checkedAnswer - 1;
        seconds = 59;
        min.innerHTML = minutes;
        sec.innerHTML = seconds;
    
        let minutes_interval = setInterval(minutesTimer, 60000);
        let seconds_interval = setInterval(secondsTimer, 1000);

        console.log("after interval");
    
        function minutesTimer()
         {
            minutes = minutes - 1;
            min.innerHTML = minutes;
            if (minutes <= 10)
             {
                min.innerHTML = '0' + minutes;
            }
        }
        function secondsTimer()
         {
            seconds = seconds - 1;
            sec.innerHTML = seconds;
    
            if (seconds < 10)
             {
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
                }
                seconds = 60;
            }
        }
    }
    else if(start_button.innerHTML==="stop")
    {
        start_button.innerHTML = "start";
          console.log("stopping");
          min.innerHTML = "00";
          sec.innerHTML = "00";
    }
    else
    {
        console.log("else in entered");
    }
    
}



let minutes = 25;
let seconds = "00";

// let minutes = answerValue;
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');

function onload()
{
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}
//  as soon as the page loads the data will be there

let answers = document.querySelectorAll('.answer');

// function iamChecked()
// {
//   let answer;
//   let answerValue;
//   console.log("answer is checked");
//   answers.forEach((currentAnswerElement) =>
//     {
//         if(currentAnswerElement.checked)
//         {
//             answer = currentAnswerElement.id; 
//             console.log(answer); 
//             answerValue = currentAnswerElement.value;
//             console.log(answerValue);
//             min.innerHTML = answerValue;
//         }
//     });
//     return answerValue;
// }

const getCheckedAnswer = () =>
{
   let answer;
   let answerValue;
   answers.forEach((currentAnswerElement) =>
   {
       if(currentAnswerElement.checked)
       {
           answer = currentAnswerElement.id;   
           console.log(answer);
           answerValue = currentAnswerElement.value;
           console.log(answerValue);

           min.innerHTML = answerValue;
       }
   });
   return answer;
};

const checkedAnswer = getCheckedAnswer();

  function start()
{
  // console.log(checkedAnswer);
    // alert("started");

    if(min.innerHTML == 25)
    {
      minutes = 24;
      seconds = 59;
      min.innerHTML = minutes;
      sec.innerHTML = seconds;
    }
    else
    {
      checkedAnswer;
      minutes = answerValue-1;
      min.innerHTML = minutes;
      sec.innerHTML = seconds;
    }   

    let minutes_interval = setInterval(minutesTimer,60000);
    let seconds_interval = setInterval(secondsTimer,1000);

    function minutesTimer()
    {
      minutes = minutes -1;
      min.innerHTML = minutes;

      if(minutes<=10)
      {
        min.innerHTML = '0'+minutes;
      }
    }

    function secondsTimer()
    {
      seconds = seconds -1;
      sec.innerHTML = seconds;

      if(seconds<10)
      {
        sec.innerHTML = '0' +seconds;
      }

      if(seconds<=0)
      {

        if(minutes<=0)
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

// for level code
let levels = document.querySelector('.levels');

levels.addEventListener('click', ()=>
{
  // alert("levels clicked");
  
})





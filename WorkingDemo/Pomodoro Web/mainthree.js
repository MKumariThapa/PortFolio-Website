


let minutes = "00";
let seconds = "00";

let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');
let levels = document.querySelector('.levels');
let start_button = document.querySelector('.start_button');
let answers = document.querySelectorAll('.answer');

showTask();

// for break 
let minutesBreak = "00";
let secondsBreak = "00";
let min_break = document.querySelector('.minutes_break');
let sec_break = document.querySelector('.seconds_break');
let answersBreak = document.querySelectorAll('.answers_two');


let customise_side_menu = document.querySelector('.customiseLi');


let text_circle_levels_value_text = document.querySelector('.text_circle_levels');

const getCheckedAnswer = () => {
    let answerValue;
    answers.forEach((currentAnswerElement) => {
        if (currentAnswerElement.checked) {
            answerValue = currentAnswerElement.value;
            console.log(`the value which is checked is  ${answerValue} from get checked answer`);
            console.log("end of calling get checked");
        }
    });
    return answerValue;
};

// get checked for break
const getCheckedBreak = () => {
    let answersBreakValue;
    answersBreak.forEach((currentAnswerElementBreak) => {
        if (currentAnswerElementBreak.checked) {
            answersBreakValue = currentAnswerElementBreak.value
        }
    });
    return answersBreakValue;
};
function onload() {

    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    console.log("calling load dunction");
    // const checkedValue = getCheckedAnswer();
    // minutes = checkedValue;
    // min.innerHTML = minutes;
    // sec.innerHTML = seconds;

    min.innerHTML = "10";
    sec.innerHTML = "00";
    // onclickedinput();
    const checkedValue = getCheckedAnswer();
    minutes = checkedValue;
    min.innerHTML = minutes;

    console.log("calling end of load dunction");

    // for break 

    min_break.innerHTML = minutesBreak;
    sec_break.innerHTML = secondsBreak;
    // onclickedinputTwo();
    const checkedBreakValue = getCheckedBreak();
    minutesBreak = checkedBreakValue;
    min_break.innerHTML = minutesBreak;
    sec_break.innerHTML = secondsBreak;
}


// input on clikc method
function onclickedinput() {
    // getting ids of input
    let ans1 = document.getElementById('ans1');
    let ans2 = document.getElementById('ans2');
    let ans3 = document.getElementById('ans3');
    let ans4 = document.getElementById('ans4');

    let textCircleLevel = document.querySelector('.text_circle_levels');
    if (ans1.checked == true) {
        console.log(`answer 1 value is from onclicked input ${ans1.value}`);
        minutes = ans1.value;
        min.innerHTML = minutes;
        sec.innerHTML = "00";
        textCircleLevel.innerHTML = "Baby Steps";


    }
    else if (ans2.checked == true) {
        console.log(`answer 2 value is from onclicked input ${ans2.value}`);
        minutes = ans2.value;
        min.innerHTML = minutes;
        sec.innerHTML = "00";
        textCircleLevel.innerHTML = "Popular";

    }
    else if (ans3.checked == true) {
        console.log(`answer 3 value is from onclicked input ${ans2.value}`);
        minutes = ans3.value;
        min.innerHTML = minutes;
        sec.innerHTML = "00";
        textCircleLevel.innerHTML = "Medium";
    }
    else if (ans4.checked == true) {
        console.log(`answer 4 value is from onclicked input ${ans4.value}`);
        minutes = ans4.value;
        min.innerHTML = minutes;
        sec.innerHTML = "00";
        textCircleLevel.innerHTML = "Extended";

    }
}

// input end of on click method


start_button.addEventListener('click', start);
function start() {
    if (start_button.innerHTML === "Start") {
        start_button.style.background = "transparent";
        start_button.style.color = "#0077b6";
        start_button.style.border = "2px solid #0077b6";
        start_button.style.boxshadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";

        console.log("going to the start steps");
        start_button.innerHTML = "Stop";

        const checkedAnswer = getCheckedAnswer();
        console.log(`${checkedAnswer} checked answer value is here from start button `);
        minutes = checkedAnswer - 1;
        seconds = 59;
        min.innerHTML = minutes;
        sec.innerHTML = seconds;

        const checkBreaksAnswer = getCheckedBreak();
        minutesBreak = checkBreaksAnswer - 1;
        secondsBreak = 59;
        min_break.innerHTML = minutesBreak;
        sec_break.innerHTML = secondsBreak;

        minutes_interval = setInterval(minutesTimer, 60000);
        seconds_interval = setInterval(secondsTimer, 1000);

        console.log("after interval ");
        function minutesTimer() {
            minutes = minutes - 1;
            min.innerHTML = minutes;
            // for break
            minutesBreak = minutesBreak - 1;
            min_break.innerHTML = minutesBreak;

            if (minutes < 10) {
                min.innerHTML = '0' + minutes;
            }
            console.log("the minutes is changed");


            if (minutesBreak < 10) {
                min_break.innerHTML = '0' + minutesBreak;
            }
            console.log("the minutes Break is changed");
        }
        function secondsTimer() {
            seconds = seconds - 1;
            sec.innerHTML = seconds;
            if (seconds < 10) {
                sec.innerHTML = '0' + seconds;
            }
            // for break
            secondsBreak = secondsBreak - 1;
            sec_break.innerHTML = secondsBreak;
            if (secondsBreak < 10) {
                sec_break.innerHTML = '0' + secondsBreak;
            }

            if (seconds <= 0) {
                if (minutes <= 0) {
                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);

                    let show_msag = document.getElementById('Done');
                    show_msag.innerHTML = "Session Completed";
                    show_msag.classList.add('show_message');
                    start_button.innerHTML = "Start";
                }
                // java second 0 huncha it is set to 60 again 
                seconds = 60;
            }
            console.log("the second is changed");

            // for break
            if (secondsBreak <= 0) {
                if (minutesBreak <= 0) {
                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);

                    let show_msag = document.getElementById('Done');
                    show_msag.innerHTML = "Session Completed";
                    show_msag.classList.add('show_message');
                    start_button.innerHTML = "Start";
                }
                // java second 0 huncha it is set to 60 again 
                secondsBreak = 60;
            }
        }
        customise_side_menu.disabled = false;
        console.log("is disabled");


    }
    else if (start_button.innerHTML === "Stop") {
        console.log("stopping");
        start_button.innerHTML = "Start";
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        min.innerHTML = "10";
        sec.innerHTML = "00";
        onclickedinput();

        // for break
        min_break.innerHTML = "5";
        sec_break.innerHTML = "00";
        onclickedinputTwo();

        // disabling the customise menu
        customise_side_menu.disabled = true;

        console.log("is  not disabled");



        start_button.style.background = "#0077b6";
        start_button.style.color = "#fff";
        start_button.classList.add('.start_button');
    }
}



// on clicking circle level
// let select_level = document.querySelector('.select_levels');
let select_level = document.querySelectorAll('.select_levels');
// let select_level_two = document.querySelector('.select_levels_two');

for (let i = 0; i < select_level.length; i++) {
    select_level[i].addEventListener('click', showLevel);
}

function showLevel() {
    console.log("clicking on level");
    //   let levels = document.querySelector('.levels');
    let levels = document.querySelectorAll('.levels');

    for (let i = 0; i < levels.length; i++) {
        if (levels[i].style.opacity == 0) {
            levels[i].style.opacity = 1;
            console.log("opacity is 1");
        }
        else {
            levels[i].style.opacity = 0;
            console.log("opacity is 0");
        }
    }

    console.log("here is clicking custome level");
}


customise_side_menu.addEventListener('click', showLevel);


// restart session 
let restart_side_menu = document.querySelector('.restart_side_menu');
restart_side_menu.addEventListener('click', () => {
    start_button.innerHTML = "Start";
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);

    min.innerHTML = "10";
    sec.innerHTML = "00";

    onclickedinput();
    // for break
    min_break = "5";
    sec_break = "00";
    onclickedinputTwo();
});

// Tab 2 code for short  break




// Tab 2 short break code 

function tabClicked() {
    let tab_1 = document.getElementById('tab_1');
    let tab_2 = document.getElementById('tab_2');

    let level_one = document.querySelector('.levels_one');
    let level_two = document.querySelector('.levels_two');

}
// for tab two onlcik






function onclickedinputTwo() {

    let level_one = document.querySelector('.levels_one');
    // getting ids of input
    let ans5 = document.getElementById('ans5');
    let ans6 = document.getElementById('ans6');
    let ans7 = document.getElementById('ans7');
    let ans8 = document.getElementById('ans8');

    let textCircleLevel = document.querySelector('.text_circle_levels_two');
    // let textCircleLevel = document.querySelectorAll('.text_circle_levels');

    if (ans5.checked == true) {
        console.log(`answer 5 value is from onclicked input ${ans5.value}`);
        minutesBreak = ans5.value;
        min_break.innerHTML = minutesBreak;
        sec_break.innerHTML = "00";
        textCircleLevel.innerHTML = "Baby Steps";
    }
    else if (ans6.checked == true) {
        console.log(`answer 6 value is from onclicked input ${ans6.value}`);
        minutesBreak = ans6.value;
        min_break.innerHTML = minutesBreak;
        sec_break.innerHTML = "00";
        textCircleLevel.innerHTML = "Popular";

    }
    else if (ans7.checked == true) {
        console.log(`answer 7 value is from onclicked input ${ans7.value}`);
        minutesBreak = ans7.value;
        min_break.innerHTML = minutesBreak;
        sec_break.innerHTML = "00";
        textCircleLevel.innerHTML = "Medium";
    }
    else if (ans8.checked == true) {
        console.log(`answer 8 value is from onclicked input ${ans8.value}`);
        minutesBreak = ans8.value;
        min_break.innerHTML = minutesBreak;
        sec_break.innerHTML = "00";
        textCircleLevel.innerHTML = "Extended";
    }

}
// end of on click



// task write a task

let input_wrap = document.querySelector('.input_wrap');
let button_div = document.querySelector('.buttons_add_another_task');
function writeATask()
 {
    // button_div.style.opacity = 0;
    // input_wrap.style.zIndex = "1000";
    // button_div.classList.toggle('input_wrap');
    input_wrap.style.opacity=1;
    button_div.classList.add('input_wrap');
    let myUL = document.querySelector('.myUL');
    myUL.style.marginTop="5rem";
    button_div.style.opacity=0;
}

// cancel button
let cancel_button = document.querySelector('.cancel_button_text');
cancel_button.addEventListener('click', cancel);
function cancel()
 {
    // input_wrap.style.zIndex = "-1";
    // button_div.style.opacity = 1;
    // input_wrap.classList.toggle('buttons_div');
    input_wrap.style.opacity=0;

    button_div.classList.remove('input_wrap');
   let myUL = document.querySelector('.myUL');

    myUL.style.marginTop="2rem";
    button_div.style.opacity=1;


}

// saving text
save_text_btn = document.querySelector('.save_text');
save_text_btn.addEventListener('click', saveText);

let taskInput = document.getElementById('myInput');

function saveText() 
{
     inputTaskValue = taskInput.value;
    let webTask = localStorage.getItem('localStorageTask');
    // getting the stored data from local storage
    let taskObj;
    if (webTask == null) {
        // crating blank array
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webTask);
    }
    // pushing values in array
    taskObj.push(inputTaskValue);
    // now saving it in local storage
    localStorage.setItem('localStorageTask', JSON.stringify(taskObj));
    taskInput.value = '';
    showTask();
}

// showing task list
function showTask() {
    let webTask = localStorage.getItem('localStorageTask');
    if (webTask == null) {
        // crating blank array
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webTask);
    }
    let html = '';
    let addTaskList = document.getElementById('myUL');
    taskObj.forEach((item, index) => {

        html += `<div class="task_main_list">
                    <div class="text_buttons_wrapper">
                                <div class="text_content">
                                   <td>${item}</td>
                                 </div>

                                <div class="buttonseditanddlt">
                                     <button class="edit_text task_button" onclick="editTask(${index})">Edit</button>
                                     <button class="task_button delete_button_text" onclick="deleteItem(${index})">Delete</button>
                                 </div>

                    </div>
  
                 </div>`
    });
    addTaskList.innerHTML = html;
}

function editTask(index)
{

    let saveIndex = document.getElementById('saveIndex');

   let text_buttons_wrapper = document.querySelector('.text_buttons_wrapper');
   let myUL = document.querySelector('.myUL');


    let task_main_list = document.querySelector('.task_main_list');
    let webTask = localStorage.getItem('localStorageTask');
    taskObj = JSON.parse(webTask);

    taskInput.value = taskObj[index];
    input_wrap.style.opacity=1;
    button_div.classList.add('input_wrap');
    console.log("clicing on editing");

    myUL.style.marginTop="5rem";
    button_div.style.opacity=0;
    saveIndex.value = index;

    // hiding save btn and showing edit task btn
    save_text_btn.style.display="none";
    save_edit_text.style.display="inline-block";
}

// save editing task
let save_edit_text = document.querySelector('.save_edit_text');
save_edit_text.addEventListener('click',function()
{ 
     let saveIndex = document.getElementById('saveIndex').value;
     let webTask = localStorage.getItem('localStorageTask');
     taskObj = JSON.parse(webTask);
     taskObj[saveIndex] = taskInput.value;
    localStorage.setItem('localStorageTask', JSON.stringify(taskObj));
    

    taskInput.value = '';

    save_text_btn.style.display="inline-block";
    save_edit_text.style.display="none";


    showTask();
})

// deleting from task list 

function deleteItem(index)
{
    let myUL = document.querySelector('.myUL');
   let text_buttons_wrapper = document.querySelector('.text_buttons_wrapper');
   text_buttons_wrapper.classList.remove('input_wrap_expand');
   console.log("remove the editing task");
   myUL.style.marginTop="2rem";

  
   let webTask = localStorage.getItem('localStorageTask');
   taskObj = JSON.parse(webTask);
   taskObj.splice(index,1);
   localStorage.setItem('localStorageTask', JSON.stringify(taskObj));
   showTask();

}

// delete all
let delete_all_btn = document.querySelector('.delete_all_btn');
delete_all_btn.addEventListener('click',function()
{

    let webTask = localStorage.getItem('localStorageTask');
    taskObj = JSON.parse(webTask);

    if(webTask==null)
    {
        taskObj=[];
    }
    else
    {
        taskObj = JSON.parse(webTask);
        taskObj=[];
    }
    localStorage.setItem('localStorageTask', JSON.stringify(taskObj));
    showTask();

    
    save_text_btn.style.display="inline-block";
    save_edit_text.style.display="none";

});






let myText = "   M     Kumar Thapa";
let first_name = document.querySelector('.first_name');

let mArray = myText.split("");
let loopTimer;

function frameLopper() {
    if (mArray.length > 0) {
        first_name.innerHTML += mArray.shift();
    }
    else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('frameLopper()', 50);
}
frameLopper();


let menu = document.querySelector('.navigation');
let nav = document.querySelector('.nav');


let mySideNav = document.querySelector('.sidenav');

function menu_clicked() {

    // menu.classList.add('open');
    menu.classList.toggle("icon");
    //    nav.classList.toggle("change");


    // mySideNav.classList.toggle("change");
    // mySideNav.style.width = "200px";
    mySideNav.classList.toggle("change");
    // mySideNav.style.opacity="1";

    // mySideNav.classList.add("change");

}



//  open contact menu 
let contact = document.querySelector('.hidden');
let contact_click = document.querySelector('.contact_menu');
let show_contact = document.querySelector('.container');

let show_contact_id = document.querySelector('.container');


let section_one = document.querySelector('.section_one');



// let section_one = document.querySelector('.section_one');
function contactVisibility() {
    var getContact = document.getElementById("container");
    // getContact.classList.toggle('show');
    getContact.classList.add('show');
    section_one.style.opacity = "0";
}


function contactHidden() {
    var getContact = document.getElementById("container");
    getContact.classList.remove('show');
    section_one.style.opacity = "1";


}

// scroll to top 
let scroll_top_btn = document.querySelector('.scroll_top_btn');

// window.onscroll = function(){scrollFunction()};
// function scrollFunction()
// {
//     if(document.body.scrollTop>10|| document.documentElement>10)
//     {
//         // scroll_top_btn.style.display="inline-block";

//     }
//     else
//     {
//         // scroll_top_btn.style.display="none";

//     }
// }
// scroll_top_btn.addEventListener('click',function()
// {
//     document.body.scrollTop=0;
//     document.documentElement.scrollTo=0;
//     console.log("top btn clicked");
// })


window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
    if (window.pageYOffset > 300) {
        if (!scroll_top_btn.classList.contains("btnEntrance")) {
            scroll_top_btn.style.display = "inline-block";
            scroll_top_btn.classList.remove("btnExit");
            scroll_top_btn.classList.add("btnEntrance");
            // scroll_top_btn.style.display = "block";
        }

    }
    else {
        if (scroll_top_btn.classList.contains("btnEntrance")) 
        {
            // scroll_top_btn.style.display = "none";

            scroll_top_btn.classList.remove("btnEntrance");
            scroll_top_btn.classList.add("btnExit");
            setTimeout(function () {
                scroll_top_btn.style.display = "none";
            }, 250);
        }

    }

}
 

scroll_top_btn.addEventListener('click', smoothScrollBackToTop);



function smoothScrollBackToTop()
{
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


// go to about me section 
function goToAboutMe()
{
    let  elmnt = document.getElementById("about_me_section_id");
    elmnt.scrollIntoView({ behavior: 'smooth',block: 'center'});

    // elmnt.scrollBy(0,110);
    // window.scrollBy(0,210);
}

function goToWorkExp()
{
    
    let recent_work = document.getElementById('my_recent_work_section_id');
    recent_work.scrollIntoView();
}
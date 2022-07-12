// DOM Elements 
const time = document.getElementById('time')
    greeting = document.getElementById('greeting')
    fname = document.getElementById('fname')
    mainfocus = document.getElementById('mainfocus')

// AM or PM 

const showAmPm = true;

// Show Time 

function showTime() {
    let today = new Date(),
    hour = today.getHours(), 
    min = today.getMinutes(),
    sec = today.getSeconds();


// Set AM or PM 

const amPm = hour >= 12 ? 'PM' : 'AM'; 

// 12 hour format 

hour = hour % 12 || 12;

// Output Time 

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

setTimeout(showTime, 1000);
}

// Add Zeros to Time

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Run 

// Set Background and Greeting According to Time 

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        
        
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpeg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
       
        
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/night.jpgp')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';

    }


}

// Get Name 

function getName() {
    if(localStorage.getItem('fname') === null) {
        fname.textContent = '[Enter Name]';
    } else {
        fname.textContent = localStorage.getItem('fname');
    }
}
// Set Name

function setFname(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('fname', e.target.innertext);
            fname.blur();
        }
    } else {
        localStorage.setItem('fname', e.target.innerText);
    }
}


// Get Focus 

function getMainfocus() {
    if(localStorage.getItem('mainfocus') === null) {
        mainfocus.textContent = '[Enter Focus]';
    } else {
        mainfocus.textContent = localStorage.getItem('mainfocus');
    }
}

// Set Focus

function setMainfocus(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('mainfocus', e.target.innertext);
            mainfocus.blur();
        }
    } else {
        localStorage.setItem('mainfocus', e.target.innerText);
    }
}

fname.addEventListener('keypress', setFname);
fname.addEventListener('blur', setFname);
mainfocus.addEventListener('keypress', setMainfocus);
mainfocus.addEventListener('blur', setMainfocus);

// Run 

showTime();
setBgGreet();
getName();
getMainfocus()
const box1 = document.getElementById('sign-up');
const box2 = document.getElementById('confirmation');
const box3 = document.getElementById('sign-up1');
const box4 = document.getElementById('confirmation1');
const button1 = document.getElementById('subscribing');
const button2 = document.getElementById('dismissing');
const button3 = document.getElementById('subscribing1');
const button4 = document.getElementById('dismissing1');
const input = document.getElementById('email-input');
const output = document.getElementById('email');
const input1 = document.getElementById('email-input1');
const output1 = document.getElementById('email1');

function succesfull() {
        box2.style.visibility = 'visible';
        output.innerHTML = input.value;
        box1.style.visibility = 'hidden';
}

function dismiss(){
        box2.style.visibility = 'hidden';
        box1.style.visibility = 'visible';
}

function succesfull1() {
        box4.style.visibility = 'visible';
        output1.innerHTML = input1.value;
        box3.style.visibility = 'hidden';
}
function dismiss1(){
        box4.style.visibility = 'hidden';
        box3.style.visibility = 'visible';
}

button1.addEventListener('click', succesfull);
button2.addEventListener('click', dismiss);
button3.addEventListener('click', succesfull1);
button4.addEventListener('click', dismiss1);

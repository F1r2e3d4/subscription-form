const box1 = document.getElementById('sign-up');
const box2 = document.getElementById('confirmation');
const button1 = document.getElementById('subscribing');
const button2 = document.getElementById('dismissing');
const input = document.getElementById('email-input');
const output = document.getElementById('email');

console.log(box1);
console.log(box2);
console.log(button1);
console.log(button2);
console.log(input);
console.log(output);

function succesfull() {
    if (box2.style.visibility === 'hidden'){
        box2.style.visibility = 'visible';
        output.innerHTML = input.value;
        box1.style.visibility = 'hidden';
    } else {
        box2.style.visibility = 'hidden'
    }
}
function dismiss(){

  if (box2.style.visibility === 'visible'){
        box2.style.visibility = 'hidden';
        box1.style.visibility = 'visible';
    } 
//  
}
    // console.log(input.value);



button1.addEventListener('click', succesfull);
    // displayemail();
// }
// );
button2.addEventListener('click', dismiss);
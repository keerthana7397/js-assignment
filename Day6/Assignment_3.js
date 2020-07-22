let names=prompt('Enter your name','Anonymous');
let heading=document.getElementById('msg');
heading.innerText=`${names}!! Welcome to the Webpage!!`;
const clockTime = document.getElementById('clk');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    clockTime.innerText = `The time is ${time}`;
}
clock();

const val=document.getElementById('attr');

let mode=document.getElementById('dark');
val.classList.toggle(darkMode());

function darkMode()
{
    setTimeout(()=>{
        heading.setAttribute('style','color:white');
        clockTime.setAttribute('style','color:white');
        document.body.style.backgroundColor='black';
    });
}
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

let mode=document.getElementById('dark');
let typ='Normal';
mode.onclick=function darkMode()
{
    let n=document.body.classList.toggle('black');
    mode.innerHTML=`Switch to ${typ} Mode`;
    if(n)
    {
        typ='Dark';
    }
    else
    {
        typ='Normal';
    }   
}
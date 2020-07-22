let c=['red','blue','yellow','violet','lightgreen','white'];
const text=document.getElementById('txt');
var i=0;
function changeColor(){
    text.setAttribute('style','background-color:'+c[i]);
    i++;
    if(i==6)
    {
        i=0;
    }
}
setInterval(changeColor,5000);
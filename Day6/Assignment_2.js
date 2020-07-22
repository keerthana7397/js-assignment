let n=parseInt(prompt('Enter a number',0));
let list=document.querySelector('#tables');
let multiple=[1,2,3,4,5,6,7,8,9,10,11,12];
let ans=[],j=0;

for(var i=1;i<13;i++)
{
    ans[j]=n*i;
    j++;
}
j=0;

multiple.forEach(multiple=>{
    list.innerHTML+=`<li>${n} x ${multiple} = ${ans[j]} </li>`;
    j++;
})
var x=document.getElementsByTagName('div');
const button = document.querySelector('#btn');

async function fetchJokes(){
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();

    //Calculate random index number to display random quote wrt the index
    let i=Math.ceil(Math.random()*(1644));

    //Clear any pre-existing quote
    var res=data[i-1].text;

    //Display the fetched random quote
    x[0].innerHTML+=res;    
}
fetchJokes();
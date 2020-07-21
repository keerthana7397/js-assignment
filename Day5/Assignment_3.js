async function complete()
{
    const res=await fetch('http://jsonplaceholder.typicode.com/todos');
    const data=await res.json();
    const len=data.length;
    
    for(var i=0;i<len;i++)
    {
        if(data[i].completed)
        {
            console.log(data[i]);
        }
    }
}
complete();
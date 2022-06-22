
function Guess()
{
    let a = Math.floor(Math.random()*10);
    let x = prompt("Guess a number between 0 and 10");
    if(a === x)
    {
        alert("Well done!");
    }
    else
    {
        a = a.toString();
        alert("Not mached. The number was " + a);
    }
}
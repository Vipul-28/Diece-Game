document.addEventListener("DOMContentLoaded",()=>
{
    document.querySelector(".button").addEventListener("click",()=>
    {

    
    var randomnumber=Math.floor((Math.random()*6)+1);
    // console.log(randomnumber);
    document.querySelector(".img1").setAttribute("src",`/images/dice${randomnumber}.png`)
    var randomnumbers=Math.floor((Math.random()*6)+1);

    document.querySelector(".img2").setAttribute("src",`/images/dice${randomnumbers}.png`)
   if(randomnumber>randomnumbers)
   {
    document.querySelector("h1").textContent="Player1 Wins !";
   }
    else if(randomnumber<randomnumbers)
   {
    document.querySelector("h1").textContent="Player2 Wins !";
   }
    else
    {
        document.querySelector("h1").textContent="Draw!";
    }
    
})
})
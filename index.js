var randomnumber = Math.floor(Math.random()*6)+1;
var randomDice = "dice"+randomnumber+".png";
var random  = "images/"+randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",random);
var randomnumber2 = Math.floor(Math.random()*6)+1;
var random2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random2);

if(randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML ="Player 1 Wins";
}
else if(randomnumber<randomnumber2){
    document.querySelector("h1").innerHTML = "player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
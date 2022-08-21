
var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomdice = "images/dice"+randomNumber+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdice);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdice2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdice2);

if(randomNumber > randomNumber2)
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
else if(randomNumber < randomNumber2)
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
else
document.querySelector("h1").innerHTML = "Draw!";


// console.log(document.querySelector('.message').textContent ="hey");
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;


//Refatoring function
const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  
    // When there is no input
    if (!guess) {
    //   document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No number!")
    }
     // When player wins
 else if(guess === secretNumber){
    //  document.querySelector(".message").textContent = "'👌✨ Correct Number!"
   displayMessage("👌✨ Correct Number!");
    document.querySelector('.number').textContent = secretNumber ;
    document.querySelector('body').style.backgroundColor = "#60b379";
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
    }

 }

  //   // When guess is too high
  else if(guess > secretNumber ){
      if(score > 0){
    document.querySelector('.message').textContent = 'Too high';
    score--;
    document.querySelector('.score').textContent = score;
}
     else{
    document.querySelector('.message').textContent = '😢You lost';
}
  }

  //too low
  else if(guess < secretNumber ){
    // document.querySelector('.message').textContent = 'Too low';
    displayMessage("too LOW 😒")
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    // document.querySelector('.message').textContent="Start guessing...";
    displayMessage("Start guessing...");

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

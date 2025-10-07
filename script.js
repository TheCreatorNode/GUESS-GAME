
//Variables
const MAX_TRIAL = 6;
let userWon = false;
let start = false;
let RANDOM_GUESS = 0;
let userTrial = 0;

const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('startButton');





startButton.addEventListener("click", () => {

   startButton.style.display = 'none';
   submitButton.style.display = 'inline-block';
   userInput.style.display = 'inline-block';
   const displayText1 = document.getElementById("text1").innerHTML = "Guess a number from 1 to 100!!!";
   const displayText2 = document.getElementById('text2').innerHTML = `Number of Trial: ${userTrial}`;
   const winningText = document.getElementById("text3").innerHTML = " ";

   start = true;

   let random_guess = Math.round(Math.random() * 100);
   RANDOM_GUESS = random_guess;
   console.log(random_guess);
});




submitButton.addEventListener('click', () => {
   const guessInput = userInput.value.trim();
   console.log(typeof(guessInput));

   if(guessInput === ""){
      const winningText = document.getElementById("text3").innerHTML = "Please, enter a number before submitting!!";
      return;
   }


   if ( userTrial < MAX_TRIAL) {
      const guessValue = Number(guessInput)
      if (  guessValue == RANDOM_GUESS) {
         userWon = true;

         startButton.style.display = "inline-block";
         submitButton.style.display = 'none';
         userInput.style.display = 'none';
         startButton.innerText = "PLAY AGAIN";


         const displayText1 = document.getElementById("text1").innerHTML = " ";
         const displayText2 = document.getElementById('text2').innerHTML = " ";
         const winningText = document.getElementById("text3").innerHTML = "Congratulation!!! You guessed right.";
         userInput.value = '';
         userTrial = 0;
      } else if (guessInput < RANDOM_GUESS) {
         userTrial += 1;
         const displayText2 = document.getElementById('text2').innerHTML = `Number of Trial: ${userTrial}`;
         const winningText = document.getElementById("text3").innerHTML = "TOO LOW!! PLEASE TRY AGAIN";
         userInput.value = '';
      } else {
         userTrial += 1;
         const displayText2 = document.getElementById('text2').innerHTML = `Number of Trial: ${userTrial}`;
         const winningText = document.getElementById("text3").innerHTML = "TOO HIGH!! PLEASE TRY AGAIN"
         userInput.value = '';
      }

   }
   if (userTrial == MAX_TRIAL) {
      const displayText1 = document.getElementById("text1").innerHTML = " ";
      const displayText2 = document.getElementById('text2').innerHTML = "SORRY, You have exhausted your trials";
      const winningText = document.getElementById("text3").innerHTML = `The correct number was ${RANDOM_GUESS}`;

      startButton.style.display = "inline-block";
      submitButton.style.display = 'none';
      userInput.style.display = 'none';
      userTrial = 0;
      startButton.innerText = "PLAY AGAIN";
   }


})




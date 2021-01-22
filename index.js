const readLineSync = require('readline-sync');

console.log('Welcome to the Javascript Quiz Wizard!!!! \n');
console.log('You will get 1 point for each correct answer and -1 for each wrong answer. At the end of the Quiz, your total score will be displayed. Maximum score is 10 points\n');

const name = readLineSync.question( 'Alright!!! Lets begin with the quiz. What is your name?\n');

console.log(`Hiii: ${name}. Good Luck !!!\n`);

const questions = [
  {
    question: "Who invented JavaScript?",
		answers: ["Douglas Crockford","Sheryl Sandberg","Brendan Eich","Steve Jobs"],correctAnswer: 3
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers:["Angular","jQuery","RequireJS","ESLint"],
    correctAnswer: 4
  },
  {
    question: "JavaScript is a ___ -side programming language",
    answers:["Client","Server","Both","None"],
    correctAnswer:3
  },
  {
    question :"Which are the correct if statements to execute certain code if x is equal to 2?",
    answers:["if(x%2)","if(x==2)","if(x!=2)","if(x=2)"],
    correctAnswer:2
  },
  {
    question:"Which JavaScript label catches all the values, except for the ones specified?",
    answers:["try","catch","label","default"],
    correctAnswer:4

  },{
    question:"If the value of x is 40, then what is the output of the program? (x%10==0)?console.log(Divisible by 10): console.log(Not divisible by 10) ",
    answers:["ReferenceError","Divisible by 10","Not divisible by 10","None of the above"],
    correctAnswer:2
  },
  {
    question:"What Boolean(3<7) will return ?",
    answers:["True","False","NaN","None of the above"],
    correctAnswer:1
  },
  {
    question:"Determine the result -String('Hello') === 'Hello';",
    answers:["True","False","SyntaxError","ReferenceError"],
    correctAnswer:1

  },{
    question:"What is the correct JavaScript syntax to print “DataFlair” in the console?",
    answers:["print(“DataFlair”);","console.print(“DataFlair”);","log.console(“DataFlair”);","console.log(“DataFlair”);"],
    correctAnswer:4
  },{
    question:"Which of the given options is an incorrect variable name?",
    answers:["javascript","_javascript","$javascript","-javascript"],
    correctAnswer:4
  }

  ];
function displayQuestions(i){
  console.log(`Question${i+1} : ${questions[i].question} \n`);

}

/*function for displaying Options*/

function displayOptions(i){

  for (let indx= 0; indx < questions[i].answers.length;indx++){
    console.log(`Option ${indx+1} : ${questions[i].answers[indx]}\n`);
  }

}

/*function for validation User Input*/

function validateInput(userInput){
  if(userInput>0 && userInput<5)
  return true;
  else
  return false;
}
/*Variable to hold the score of User*/

let score =0;

/*function to begin with Quiz*/

function startQuiz(questions){  

  for(let i =0;i<questions.length;i++){
    
    displayQuestions(i);
    displayOptions(i);

   const selectedOption = parseInt(readLineSync.question('Please enter your option\n'));

   if(validateInput(selectedOption)){

      if(questions[i].correctAnswer === selectedOption){
      console.log("Hurray !!!! CorrectAnswer\n");
      score++;
    }else{
      console.log("Oooops WrongAnswer\n");
      console.log(`Correct Answers is ${questions[i].correctAnswer}\n`);
      score--;
    }
    console.log(`Your current score is :${score}\n`);
    console.log("\n");
   }else{
     console.log("Invalid Input\n");
   }

   

  }

   return score;



}

function startGame(){

  let userScore = startQuiz(questions);
  console.log(`Thanks for your time, your total score is : ${userScore} out of ${questions.length}\n`);


}

startGame();





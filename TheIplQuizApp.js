const readlineSync = require('readline-sync');
const chalk = require('chalk');

var IPLQuestions = [
  {
    "question": "which batsman has scored the fastest 50 in IPL?",
    "answer": "K L Rahul",
    "options":["Sachin","K L Rahul","M S Dhoni","Virat Kholi"]
  },
   {
    "question": "which batsman has scored the fastest 100 in IPL?",
    "answer": "Chris Gayle",
    "options":["Chris Gayle","K L Rahul","Warner","ABD"]
  },
  {
    "question": "Which team has won the most number of IPL trophies?",
    "answer": "Mumbai",
    "options":["Banglore","Delhi","Mumbai","Kolkata"]
  },
  {
    "question": "Who has scored most runs in IPL tournament?",
    "answer": "Virat Kholi",
    "options":["ABD","Virat Kholi","Rohit Sharma","M S Dhoni"]
  }
];


var userName = readlineSync.question("what's your name? ");
console.log("welcome " + chalk.red(userName) + "!");

score=0;

var userDes = readlineSync.keyInYN('Think you know IPL better than anyone?')

if(userDes==true){
  console.log("\nAwesome! lets play a game.\n\nThe rules are simple\n"+chalk.yellow("For every right answer you gain a point & for every wrong answer you lose a point"))
  GameOn();

}else{
  console.log('Tough luck!')
}

function GameOn() {
  for(var i=0;i<IPLQuestions.length;i++)
  {
     var currentQues=IPLQuestions[i];
     play(currentQues.question,currentQues.answer,currentQues.options);
  }
}


function play(question,answer,options){
  console.log(question);
  console.log('Options:');
 let answer1 = readlineSync.keyInSelect(options, 'Whats your answer?');
 if(options[answer1]===answer){
    console.log(chalk.green("That is correct!\n"))
    score+=1;
    console.log("your score is: " + score);
 }else{
   console.log(chalk.red("oops! Incorrect answer!"));
   score-=1;
   console.log("your score is: " + score);
 }
}



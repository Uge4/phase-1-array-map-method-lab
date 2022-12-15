const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



function capitalise(tutorial){ 
  return tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}
// const titleCased = tutorials.map(capitalise); 

function titleCased () {
 return tutorials.map(capitalise);
} 

titleCased()

// const titleCased = () => {
//   return tutorials.map(titleCaseTutorial)
// }

// let titleCaseTutorial = function (tutorial) {
//   return tutorial.split(" ").map(capitaliseWord).join(" ")
// }

// let capitaliseWord = function (word) {
//   return word.charAt(0).toUpperCase() + word.substring(1)
// }

// function print(titleCased){
//   console.log(JSON.stringify(titleCased));
// }

// print(titleCased)
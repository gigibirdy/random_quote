/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//create a array that contains 6 quote objects
const quotes = [
  {quote: "One of the best programming skills you can have is knowing when to walk away for awhile.", source: "Oscar Godson", citation: "goodreads.com", tag: "#problemSolving"},
  {quote: "Programs must be written for people to read, and only incidentally for machines to execute.", source: "Harold Abelson", year: 1984, tag: "#programming"},
  {quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", source: "John Woods", tag: "#humor"},
  {quote: "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.", source: "Niklaus Wirth", citation: "Twitter", year: 2018, tag: "#programming"},
  {quote: "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.", source: "Ellen Ullman", citation: "Twitter", year: 2017, tag: "#programming"},
  {quote: "What one programmer can do in one month, two programmers can do in two months.", source: "Fredrick Brooks", citation: "Twitter", tag: "#humor"},
];

//create a array that contains 6 colors
const background = ["red", "purple", "blue", "grey", "orange", "black"];

//create a random number and use this number to pick a quote from the quotes array randomly
function getRandomQuote (arr){
  const randIdx = Math.floor(Math.random()*6);
  return arr[randIdx];
};
//create a random number and use this number to pick a color from the background array randomly
function getRandomColor(arr){
  const randIdx = Math.floor(Math.random()*6);
  return arr[randIdx];
};
//create callback function for the addEventListener
function printQuote(){
  //call the getRandomQuote function and assign it to a variable
  const randomQuote = getRandomQuote(quotes);
  //call the getRandomColor function and assign it to a variable
  const randomColor = getRandomColor(background);
  //initial a HTML string to empty string
  let HTMLStr = '';
  //build the HTML string with the randomQuote variables
  HTMLStr = '<p class="quote">'
           +randomQuote.quote
           +'</p>'
           +'<p class="source">'
           +randomQuote.source
           //using ternary operator to determin whether the quote comes with citation that needs to be added to the HTML string
           +((randomQuote.citation !== undefined) ? '<span class="citation">'+randomQuote.citation+'</span>' : "")
           //using ternary operator to determin whether the quote comes with year that needs to be added to the HTML string
           +((randomQuote.year !== undefined)     ? '<span class="year">'+randomQuote.year+'</span>'         : "")
           +'</p>'
           +'<p class="tag">'
           +randomQuote.tag
           +'</p>';
  //Set the `innerHTML` of the `quote-box` div to the HTML string
  document.getElementById('quote-box').innerHTML = HTMLStr;
  //set the background color of the button to the random color
  document.querySelector('#loadQuote').style.background = randomColor;
  //set the background color of the body to the random color
  document.body.style.background = randomColor;
};
//set the quote and background color to be changed every 3 seconds
setInterval(printQuote, 3000);
//set event listener for the button to change the quote and background color manually
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

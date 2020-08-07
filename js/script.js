/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: `Dags, d'ya like dags?`,
    source: `Mickey`,
    citation: 'Snatch',
    year: 2001,
    tag:'Motion Picture',
    misc:' Actor: Brad Pitt'
  },
  {
    quote: `May the wind always be at your back and the sun upon your face. And may the wings of destiny carry you aloft to dance with the stars.`,
    source: 'George Jung',
    citation: 'Blow',
    year: 2001,
    tag:'Motion Picture',
    misc:' Actor: Johnny Depp'
  },
  {
    quote: `Of all forms of caution, caution in love is perhaps the most fatal to true happiness.`,
    source: `Betrand Russell`,
    citation: 'The Conquest of Happiness',
    year: 1930,
    tag:'Novel',
    misc: ' Publisher: Liveright'
  },
  {
    quote: `For you, a thousand times over.`,
    source: `Hassan`,
    citation: 'The Kite Runner',
    year: 2003,
    tag:'Novel',
    misc:' Publisher: Riverhead Books'
  },
  {
    quote: `Moral of the story is: I chose a half measure when I should have gone all the way. I'll never make that mistake again. No more half measures, Walter.`,
    source: `Mike Ehrmantraut`,
    citation: 'Breaking Bad',
    year: 2010,
    tag:'Television Series',
    misc:' Actor: Jonathan Banks'
  }
  
  

]



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  
  let arrayIndex = Math.floor(Math.random() * quotes.length);

  return quotes[arrayIndex];

};






/***
 * `printQuote` function
***/

function printQuote (){
  let quoObject = getRandomQuote();
  

  let quoString = `<p class="quote"> ${quoObject.quote} </p>`;
  let sourceString = `<p class="source"> ${quoObject.source}`;

  if(quoObject.hasOwnProperty('citation') && quoObject.hasOwnProperty('year') && quoObject.hasOwnProperty('tag') && quoObject.hasOwnProperty('misc')) {
    let citString = `<span class="citation">${quoObject.citation}</span>`;
    let yearString = `<span class="year">${quoObject.year}</span>`;
    let tagString = `<span class="tag">${quoObject.tag}</span>`;
    let miscString = `<span class="misc">${quoObject.misc}</span>`;

    

    sourceString  += `${citString}` + `${yearString}` + `, ` + `${tagString}` + `, ` + `${miscString}` + `</p>`; 
    return document.getElementById('quote-box').innerHTML = `${quoString}` + `${sourceString}`;
  } else {
    return sourceString += `</p>`;
  }
    
  

  
  

}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
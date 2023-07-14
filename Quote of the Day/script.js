


let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let tweetbtn = document.getElementById("tweet");

btn.addEventListener("click", getQuote);
tweetbtn.addEventListener("click", tweetQuote);
 
let api_url = 'https://api.quotable.io/random';

async function getQuote() {
    let response = await fetch(api_url);
    let data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
}

getQuote();




function tweetQuote() {
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerText + '%0a-  ' +  author.innerText , 'Tweet Quote', 'width=600, height=400');
}


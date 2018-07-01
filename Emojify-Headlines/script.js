const translate = require("moji-translate");
const moment = require("moment");

var headlinesData;
var currentHeadline = "";
let emojiHeadline = "";
var author = "The New York Times";

/*
An IFrame (Inline Frame) is an HTML document embedded inside another HTML 
document on a website. 

window.top returns the topmost window in the hierarchy of window objects
Window.self returns the window itself
*/
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function openURL(url) {
  window.open(
    url,
    "Share",
    "width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"
  );
}

var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url +=
  "?" +
  $.param({
    "api-key": "851e6f1eda5c46d1ab77f2ce7b71fc68"
  });

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: "application/json"
    },
    url: url,
    success: function(json) {
      console.log(json);
      headlinesData = json.results;
    }
  });
}

function getRandomHeadline() {
  return headlinesData[Math.floor(Math.random() * headlinesData.length)];
}

function getQuote() {
  let randomHeadline = getRandomHeadline();
  let translatedHeadline = translate.translate(randomHeadline.title);

  while (translatedHeadline === randomHeadline.title) {
    randomHeadline = getRandomHeadline();
    translatedHeadline = translate.translate(randomHeadline.title);
  }

  console.log("title", randomHeadline);
  console.log("transolation", translatedHeadline);

  currentHeadline = randomHeadline.title;
  emojiHeadline = translatedHeadline;

  let headlineImage = randomHeadline.multimedia.filter(
    image => image.format === "thumbLarge"
  )[0];

  $(".quote-text").animate({ opacity: 0 }, 500, function() {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text(emojiHeadline);
  });

  $(".quote-image").animate({ opacity: 0 }, 500, function() {
    $(this).animate({ opacity: 1 }, 500);
    $("#image").attr("src", headlineImage.url);
  });
}

$(document).ready(function() {
  getQuotes().then(() => {
    getQuote();
  });

  $("#date").text(moment().format("MMMM Do YYYY"));
});

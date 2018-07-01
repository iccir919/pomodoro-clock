const translate = require("moji-translate");
const moment = require("moment");

var headlinesData;
var currentHeadline = {};
let emojiHeadline = "";

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

// function openURL(url) {
//   window.open(
//     url,
//     "Share",
//     "width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"
//   );
// }

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
  let randomHeadline;
  let translatedHeadline;

  do {
    randomHeadline = getRandomHeadline();
    translatedHeadline = translate.translate(randomHeadline.title);
  } while (randomHeadline.title === translatedHeadline);

  currentHeadline = randomHeadline;
  emojiHeadline = translatedHeadline;

  let subtext = translate.translate(currentHeadline.abstract);
  let headlineImage = currentHeadline.multimedia.filter(
    image => image.format === "thumbLarge"
  )[0];

  $(".quote-text").animate({ opacity: 0 }, 500, function() {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text(emojiHeadline);
    $("#subtext").text(subtext);
  });

  $(".quote-image").animate({ opacity: 0 }, 500, function() {
    $(this).animate({ opacity: 1 }, 500);
    $("#image").attr("src", headlineImage.url);
  });

  $(".quote-author").animate({ opacity: 0 }, 500, function() {
    $(this).animate({ opacity: 1 }, 500);
    $("#author").html(currentHeadline.byline);
  });

  let tweetUrl =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent('"' + emojiHeadline + '" -The New York Times');
  console.log("URL", tweetUrl);
  $("#tweet-quote").attr("href", tweetUrl);

  let tumblrUrl =
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=" +
    encodeURIComponent("The New York Times") +
    "&content=" +
    encodeURIComponent(emojiHeadline) +
    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
  $("#tumblr-quote").attr("href", tumblrUrl);

  $("#quote-source").attr("href", currentHeadline.url);
}

$(document).ready(function() {
  getQuotes().then(() => {
    getQuote();
  });
  $("#date").text(moment().format("MMMM Do YYYY"));

  $("#new-quote").on("click", getQuote);
});

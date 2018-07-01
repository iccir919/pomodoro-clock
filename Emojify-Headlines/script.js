const translate = require("moji-translate");

var headlinesData;
var currentHeadline = "";
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
    }
  });
}

$(document).ready(function() {
  getQuotes();
  console.log(
    translate.translate("the house is on fire and the cat is eating the cake")
  );
});

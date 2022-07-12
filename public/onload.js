/*global chrome*/
var link = document.createElement("link");
link.href = chrome.extension.getURL("pint-css.css");
link.type = "text/css";
link.rel = "stylesheet";
link.media = "all";
document.getElementsByTagName("head")[0].appendChild(link);

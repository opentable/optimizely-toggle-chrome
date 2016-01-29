var html = chrome.extension.getURL("alert.html");
console.log(html);
document.body.insertAdjacentHTML('afterbegin',  html);
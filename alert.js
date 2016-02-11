var container = document.createElement("div");
var style = document.createElement("style");
var alertContainer = document.createElement("div");
var paragraph = document.createElement("p");
paragraph.className += "optimizely-alert-text";
alertContainer.id = "optimizely-alert";

style.textContent = "#optimizely-alert{position:fixed;bottom:0;right:0;width:200px;background-color:#fff;z-index:9999;border:2px solid #D62430;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.optimizely-alert-text{font-family:arial,sans-serif!important;font-size:13px;font-weight:400;padding:5px;margin:0;line-height:1;-moz-osx-font-smoothing:auto}";

paragraph.textContent = "Optimizely disabled by toggle.";

alertContainer.appendChild(paragraph);
container.appendChild(style);
container.appendChild(alertContainer);

document.body.appendChild(container);

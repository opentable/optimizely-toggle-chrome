$.get(chrome.extension.getURL("alert.html"), function(data) {
    document.body.insertAdjacentHTML('afterbegin',  data);
    console.log('alert was shown.');
});

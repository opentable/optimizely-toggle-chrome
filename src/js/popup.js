var OPTIMIZELY_QUERY = '?optimizely_disable=true';
var OPTIMIZELY_PARAM = '&optimizely_disable=true';

function getCurrentTabUrl(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        var id = tab.id;
        console.assert(typeof url == 'string', 'tab.url should be a string');

        callback(url, id);
    });
}

function editUrl() {
    var value = document.getElementById("myonoffswitch").checked;
    getCurrentTabUrl(function(url, id) {
        if (value) {
            if(url.indexOf('?') > -1) {
                newUrl = url + OPTIMIZELY_PARAM;
            }
            else {
                newUrl = url + OPTIMIZELY_QUERY;
            }
        } else {
            if(url.indexOf('&') > -1) {
                newUrl = url.split(OPTIMIZELY_PARAM)[0];
            }
            else {
                newUrl = url.split(OPTIMIZELY_QUERY)[0];
            }
        }
        updatePopupUrl(newUrl);
        chrome.tabs.update(id, {url: newUrl}, function(tab) {
            chrome.tabs.onUpdated.addListener(function(tabId , info) {
                if (info.status == "complete" && newUrl.indexOf('optimizely_disable=true') > -1) {
                    chrome.tabs.executeScript(null, { file: "jquery-1.12.0.min.js" }, function() {
                        chrome.tabs.executeScript(null, { file: "alert.js" });
                    });
                }
            });
        });
    });
}

function updatePopupUrl(url) {
    document.getElementById('currentUrl').textContent = url;
}

function setSwitchValue(url, callback) {
    document.getElementById("myonoffswitch").checked = url.indexOf(OPTIMIZELY_QUERY) > -1 || url.indexOf(OPTIMIZELY_PARAM) > -1;

    callback();
}

document.addEventListener('DOMContentLoaded', function() {
    getCurrentTabUrl(function(url, id) {
        updatePopupUrl(url);
        setSwitchValue(url, function() {
            document.getElementById("myonoffswitch").addEventListener("click", editUrl);
        });
    });
});
window.onload = function() {
    init();
}

function init() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        new QRCode(document.getElementById("qrcode"), tabs[0].url);
    });
}
window.onload = function() {
  init();
};

function init() {
  if (!browser) var browser = chrome;
  browser.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    console.log(tabs[0].url);
    new QRCode(document.getElementById("qrcode"), tabs[0].url);
  });
}

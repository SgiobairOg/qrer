window.onload = function() {
  init();
};

function init() {
  if (!browser) var browser = chrome;

  browser.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    var urlString = tabs[0].url;
    var options = {
      width: 256,
      height: 256,
      correctLevel: QRCode.CorrectLevel.M
    };
    var code = new QRCode("qrcode", urlString);
  });
}

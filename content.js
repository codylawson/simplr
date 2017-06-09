// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'simplr_get_dom') {
        sendResponse({
          "url": window.location.href,
          "width": window.innerWidth,
          "height": window.innerHeight += 22
        });
    }
});

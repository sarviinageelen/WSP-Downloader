chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "download-video") {
    setTimeout(function() {
      chrome.downloads.download({
        url: request.url,
        filename: request.filename
      });
    }, 15000);
  }
});

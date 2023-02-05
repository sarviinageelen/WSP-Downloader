chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.type === "download-video") {
        chrome.downloads.download({
          url: request.url,
          filename: request.filename
        });
      }
    }
  );
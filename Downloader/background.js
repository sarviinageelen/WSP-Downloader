// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Check if the message type is "download-video"
  if (request.type === "download-video") {
    // Wait 15 seconds before downloading the video
    setTimeout(function() {
      // Start the download using the URL and filename from the request
      chrome.downloads.download({
        url: request.url,
        filename: request.filename
      });
    }, 15000);
  }
});
const videoElements = document.querySelectorAll(".vid-dl");

// A counter to keep track of which video element we're currently processing
let i = 0;

// Function to download each video
const downloadNextVideo = function() {
  // Check if there are still more video elements to process
  if (i < videoElements.length) {
    // Get the current video element
    const videoElement = videoElements[i];
    // Get the title of the video
    const title = videoElement.parentElement.querySelector(".lesson-title").textContent.trim();
    // Replace any invalid characters in the title with a hyphen
    const filename = title.replace(/[\/\\\?\%\*\:\|"\<\>]/g, "-") + ".mp4";
    // Get the URL of the video
    const url = videoElement.getAttribute("href");
    // Send a message to the background script to download the video
    chrome.runtime.sendMessage({
      type: "download-video",
      url,
      filename
    });
    // Increment the counter
    i++;
    // Schedule the next video download
    setTimeout(downloadNextVideo, 5000);
  }
};

// Start downloading the videos
downloadNextVideo();

const videoElements = document.querySelectorAll(".vid-dl");
let i = 0;
const downloadNextVideo = function() {
  if (i < videoElements.length) {
    const videoElement = videoElements[i];
    const title = videoElement.parentElement.querySelector(".lesson-title").textContent.trim();
    const url = videoElement.getAttribute("href");
    chrome.runtime.sendMessage({
      type: "download-video",
      url,
      filename: `${title}.mp4`
    });
    i++;
    setTimeout(downloadNextVideo, 5000);
  }
};
downloadNextVideo();
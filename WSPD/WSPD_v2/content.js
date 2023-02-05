const videoElements = document.querySelectorAll(".vid-dl");
for (const videoElement of videoElements) {
  const title = videoElement.parentElement.querySelector(".lesson-title").textContent.trim();
  const url = videoElement.getAttribute("href");
  chrome.runtime.sendMessage({
    type: "download-video",
    url,
    filename: `${title}.mp4`
  });
}

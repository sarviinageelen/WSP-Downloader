# WSP Chrome Extension

## File Descriptions

- `manifest.json`: The manifest file for the chrome extension containing information such as name, version, description, etc.

- `content.js`: Main script that runs in the context of the web page. It performs the following actions:
  1. Selects all video elements with class "vid-dl" on the page.
  2. Calls the `downloadNextBatch` function to start downloading the first batch of videos.
  3. Defines an array called `nextBatch` to store details of next batch of videos to be downloaded.
  4. Loops through a batch of videos and adds an object with the video's URL and filename to the `nextBatch` array.
  5. Sends a message to the background script with type "download-next-batch" and the `nextBatch` array.

- `background.js`: Background script that runs in the background and listens for messages from content script. It performs the following actions:
  1. Defines `batchSize` as 3 which determines number of videos to be downloaded in each batch.
  2. Listens for messages from content script with `chrome.runtime.onMessage.addListener`.
  3. If a message of type "download-video" is received, it pushes the video details to the `currentBatch` array.
  4. When `currentBatch` array length reaches `batchSize`, it calls the `downloadBatch` function.
  5. The `downloadBatch` function creates an array of promises for each video and starts downloading each video using `chrome.downloads.download`.
  6. If all downloads are successful, calls the `downloadNextBatch` function to download the next batch of videos.

When the extension is installed and the user visits `https://www.wallstreetprep.com/`, the content script starts the download process by sending a message to the background script. The background script listens for the message, starts the downloads, and repeats the process until all the videos are downloaded.

function drawWindowAttention(request, sender, callback) {
  chrome.windows.getCurrent({
      populate: false
    },
    function(currentWindow) {
      //console.log("currentWindow.id: ", currentWindow.id);
      chrome.windows.update(currentWindow.id, {
        drawAttention: true
      });
    }
  );
};

chrome.runtime.onMessage.addListener(drawWindowAttention);
chrome.runtime.onMessageExternal.addListener(drawWindowAttention);

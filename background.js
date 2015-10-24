"use strict";

function drawWindowAttention(request, sender, callback) {
  if (sender.tab) {
    var winid = sender.tab.windowId;
    //console.log("currentWindow.id: ", winid);
    chrome.windows.update(winid, {
      drawAttention: true
    });
  } else {
    console.log("sender.tab is empty");
  }
};

chrome.runtime.onMessage.addListener(drawWindowAttention);
chrome.runtime.onMessageExternal.addListener(drawWindowAttention);

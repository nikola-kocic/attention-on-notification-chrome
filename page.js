"use strict";

class AttentionNotification extends window.Notification {
  constructor() {
    window.postMessage({ type: "NOTIFICATION_SHOWN" }, "*");
    //console.log("sent NOTIFICATION_SHOWN");
    return super(...arguments);
  }
}

window.Notification = AttentionNotification;

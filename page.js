"use strict";

window.Notification = class extends window.Notification {
  constructor() {
    window.postMessage({ type: "NOTIFICATION_SHOWN" }, "*");
    //console.log("sent NOTIFICATION_SHOWN");
    return super(...arguments);
  }
};

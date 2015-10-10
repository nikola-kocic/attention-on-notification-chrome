window.originalNotification = window.Notification;

window.Notification = function(title, options) {
  window.postMessage({ type: "NOTIFICATION_SHOWN" }, "*");
  //console.log("sent NOTIFICATION_SHOWN");

  return new window.originalNotification(title, options);
};

window.Notification.prototype = window.originalNotification.prototype;

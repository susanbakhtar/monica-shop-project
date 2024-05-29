"use strict";

// loop video fix bug
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("loop-video-fix-bug");
  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.load();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("loop-video-fix-bug");
  video.currentTime = 0;
  video.load();
});

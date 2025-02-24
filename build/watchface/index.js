import * as view from "./view.js";

WatchFace({
  onInit() { 
  },

  build() {
    let time = getApp()._options.globalData.time;
    view.buildView(time.getHours());
    time.onPerHourEnd(function() {
      view.updateHours(time.getHours())
    });
  },

  onDestroy() {
  },
})

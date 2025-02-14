import * as view from "./view.js";

WatchFace({
  onInit() {
    console.log('index page.js on init invoke')
  },

  build() {
    console.log('index page.js on build invoke')
    view.buildView();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke')
  },
})

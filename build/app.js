import { Time } from '@zos/sensor';

const time = new Time();

App({
  globalData: {time: time},
  onCreate(options) {
  },

  onDestroy(options) {
  }
})
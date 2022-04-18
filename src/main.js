import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AV from "leancloud-storage"

AV.init({
  appId: "dm8VxvGH6qok0dks0xtyx3RD-gzGzoHsz",
  appKey: "qtgvVFBqCvQKQa3x0pqUevgL",
  serverURL: "https://eatathome.api.hearfresh.cn"
});
createApp(App).use(router).mount("#app");

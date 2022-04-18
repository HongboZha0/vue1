import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
const AV = require("leancloud-storage");
AV.init({
  appId: "dm8VxvGH6qok0dks0xtyx3RD-gzGzoHsz",
  appKey: "qtgvVFBqCvQKQa3x0pqUevgL",
  serverURL: "https://please-replace-with-your-customized.domain.com"
});
createApp(App).use(router).mount("#app");

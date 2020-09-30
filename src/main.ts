import { createApp } from "vue";
import App from "./App.vue";

import insUI from "./index";

const app = createApp(App);
app.use(insUI);
app.mount("#app");

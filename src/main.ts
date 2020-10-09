import { createApp } from "vue";
import App from "./App.vue";

import insUI from "./index";
import "./style/common/transition.scss";

const app = createApp(App);
app.use(insUI);
app.mount("#app");

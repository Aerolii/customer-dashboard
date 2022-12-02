import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import setupQuasar from "./utils/setupQuasar.utils";

const app = createApp(App);

app.use(createPinia());
app.use(router);

setupQuasar(app);

app.mount("#app");

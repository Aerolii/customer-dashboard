import { Quasar } from "quasar";
import quasarLang from "quasar/lang/zh-CN";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import type { App } from "vue";

// Assumes your root component is App.vue
// and placed in same folder as main.js

const setupQuasar = (app: App) => {
  app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
    /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
  });
};

export default setupQuasar;

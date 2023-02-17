import { createApp } from "vue";
import { createPinia } from "pinia"; // https://pinia.vuejs.org/getting-started.html#installation
import router from "./router";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faHeartCirclePlus);
library.add(faHeartCircleCheck);

createApp(App)
  .use(createPinia())
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

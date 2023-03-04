import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import {MotionPlugin} from "@vueuse/motion";
import VueAos from 'vue-aos'
import 'aos/dist/aos.css'
import router from "@/routers/router";
import store from "@/store";

const app = createApp(App)
app.use(store)

app.use(MotionPlugin)
app.use(VueAos)

app.use(router)
app.mount('#app')
import "bootstrap/dist/js/bootstrap"

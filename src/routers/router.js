import {createRouter, createWebHistory} from "vue-router";
import MainComponents from "@/pages/MainComponents";
import MoreInfoHouse from "@/pages/MoreInfoHouse";
import PersonMoreInfo from "@/pages/PersonMoreInfo";


const routes = [
    {
        path: '/',
        component: MainComponents
    },
    {
        path: '/new-house',
        component: MoreInfoHouse
    },
    {
        path: '/person',
        component: PersonMoreInfo
    },


]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;

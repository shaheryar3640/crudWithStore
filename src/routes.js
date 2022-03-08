import { createWebHistory, createRouter } from "vue-router";
import mainComponent from "./components/mainComponent.vue";
import loginComponent from "./components/loginComponent.vue";
import updateDomain from "./components/updateDomain.vue";
import settingDomain from "./components/settingDomain.vue";
import addDomain from "./components/addDomain.vue";
import aboutC from "./components/aboutC.vue";

const routes = [
  {
    path: "/",
    name: "mainComponent",
    component: mainComponent,
  },
  {
    path: "/about",
    name: "about",
    component: aboutC,
  },
  {
    path: "/addDomain",
    name: "addDomain",
    component: addDomain,
  },
  {
    path: "/login",
    name: "loginComponent",
    component: loginComponent,
  },
  {
    path: "/update/:id",
    name: "updateDomain",
    component: updateDomain,
  },
  {
    path: "/setting/:id?",
    name: "settingDomain",
    component: settingDomain,
  },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
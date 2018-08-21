import Vue from "vue";
import Router from "vue-router";
import BasicComponent from "@/components/BasicComponent";
import LayoutComponent from "@/components/LayoutComponent";
import NavComponent from "@/components/NavComponent";
import FormComponent from "@/components/FormComponent";
import ViewComponent from "@/components/ViewComponent";
import ChartComponent from "@/components/ChartsComponent";
import OtherComponent from "@/components/OtherComponent";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "BasicComponent",
      component: BasicComponent
    },
    {
      path: "/layout",
      name: "layoutComponent",
      component: LayoutComponent
    },
    {
      path: "/nav",
      name: "navComponent",
      component: NavComponent
    },
    {
      path: "/form",
      name: "formComponent",
      component: FormComponent
    },
    {
      path: "/view",
      name: "viewComponent",
      component: ViewComponent
    },
    {
      path: "/charts",
      name: "chartComponent",
      component: ChartComponent
    },
    {
      path: "/other",
      name: "nameComponent",
      component: OtherComponent
    }
  ]
});

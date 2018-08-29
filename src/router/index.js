import Vue from "vue";
import Router from "vue-router";

import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartInfo from "../parts/PartInfo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", // when vue sees that this is the URL in the browser it should navigate to this route
      name: "Home", // name of the route
      component: HomePage // which component must be loaded
    },
    {
      path: "/build",
      name: "Build",
      component: RobotBuilder
    },
    {
      path: "/parts/:partType/:id", //'partType' and 'id' are parameters being passed by the URL
      name: "Parts",
      component: PartInfo
    }
  ]
});

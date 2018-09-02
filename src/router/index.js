import Vue from "vue";
import Router from "vue-router";

import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartInfo from "../parts/PartInfo.vue";
import BrowseParts from "../parts/BrowseParts.vue";
import RobotHeads from "../parts/RobotHeads.vue";
import RobotArms from "../parts/RobotArms.vue";
import RobotTorsos from "../parts/RobotTorsos.vue";
import RobotBases from "../parts/RobotBases.vue";
import SidebarStandard from "../sidebars/SidebarStandard.vue";
import SidebarBuild from "../sidebars/SidebarBuild.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/", // when vue sees that this is the URL in the browser it should navigate to this route
      name: "Home", // name of the route
      // component: HomePage // which component must be loaded
      components: {
        default: HomePage, // corresponds to the names of the routers (router-view tags in App component)
        sidebar: SidebarStandard
      }
    },
    {
      path: "/build",
      name: "Build",
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild
      }
    },
    {
      path: "/parts/browse",
      name: "BrowseParts",
      component: BrowseParts,
      children: [
        {
          name: "BrowseHeads",
          path: "heads",
          component: RobotHeads
        },
        {
          name: "BrowseArms",
          path: "arms",
          component: RobotArms
        },
        {
          name: "BrowseTorsos",
          path: "torsos",
          component: RobotTorsos
        },
        {
          name: "BrowseBases",
          path: "bases",
          component: RobotBases
        }
      ]
    },
    {
      path: "/parts/:partType/:id", //'partType' and 'id' are parameters being passed by the URL
      name: "Parts",
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      }
    }
  ]
});

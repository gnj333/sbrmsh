import { MainPage } from "./mainPage";
import { mainPageRoute, newPageRoute, newsPageRoute } from "../shared/routes";
import { createHistoryRouter, createRouterControls } from "atomic-router";
import { createBrowserHistory } from "history";
import { createRoutesView } from "atomic-router-react";
import { NotFoundPage } from "./NotFound";
import {
  routeFromSidebarToAboutUs,
  routeFromSidebarToCareer,
  routeFromSidebarToEducation,
  routeFromSidebarToMain,
  routeFromSidebarToNews,
  routeFromSidebarToProducts,
  routeFromSidebarToUploads,
} from "../widgets/navigationBar/model";
import { NewsPage } from "./news";
import { FallbackPage } from "../shared/ui/Fallback";

const routes = [
  {
    view: MainPage.view,
    route: [mainPageRoute, routeFromSidebarToMain],
    path: "/",
  },
  {
    view: NewsPage.view,
    route: [newsPageRoute, routeFromSidebarToNews],
    path: "/news",
  },
  {
    view: FallbackPage,
    route: routeFromSidebarToEducation,
    path: "/education",
  },
  {
    view: FallbackPage,
    route: routeFromSidebarToProducts,
    path: "/products",
  },
  {
    view: FallbackPage,
    route: routeFromSidebarToCareer,
    path: "/career",
  },
  {
    view: FallbackPage,
    route: routeFromSidebarToUploads,
    path: "/uploads",
  },
  {
    view: FallbackPage,
    route: routeFromSidebarToAboutUs,
    path: "/aboutUs",
  },
  {
    view: FallbackPage,
    route: newPageRoute,
    path: "/news/:id",
  },
];

export const routerControls = createRouterControls();

export const RoutesView = createRoutesView({
  routes,
  otherwise: NotFoundPage,
});

export const router = createHistoryRouter({
  routes,
  controls: routerControls,
  base: "",
});

const history = createBrowserHistory();

router.setHistory(history);

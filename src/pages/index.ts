import { MainPage } from "./mainPage";
import {
  mainPageRoute,
  newPageRoute,
  newsPageRoute,
  routeFromFooterToAboutUs,
  routeFromFooterToNews,
  routeFromFooterToVacancies,
} from "../shared/routes";
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
import { CareerPage } from "./career";
import { NewPage } from "./new";

const routes = [
  {
    view: MainPage,
    route: [mainPageRoute, routeFromSidebarToMain],
    path: "/",
  },
  {
    view: NewsPage,
    route: [newsPageRoute, routeFromSidebarToNews, routeFromFooterToNews],
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
    view: CareerPage,
    route: [routeFromSidebarToCareer, routeFromFooterToVacancies],
    path: "/career",
  },
  {
    view: FallbackPage,
    route: routeFromSidebarToUploads,
    path: "/uploads",
  },
  {
    view: FallbackPage,
    route: [routeFromSidebarToAboutUs, routeFromFooterToAboutUs],
    path: "/aboutUs",
  },
  {
    view: NewPage,
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
  base: "/sbrmsh",
});

const history = createBrowserHistory();

router.setHistory(history);

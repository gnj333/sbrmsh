import { createRoute } from "atomic-router";

export const mainPageRoute = createRoute();

export const newsPageRoute = createRoute();

export const newPageRoute = createRoute<{ id: number }>();

export const routeFromFooterToNews = createRoute();

export const routeFromFooterToAboutUs = createRoute();

export const routeFromFooterToVacancies = createRoute();

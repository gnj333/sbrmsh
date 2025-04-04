import { createRoute } from "atomic-router";

export const mainPageRoute = createRoute();

export const newsPageRoute = createRoute();

export const newPageRoute = createRoute<{ id: number }>();

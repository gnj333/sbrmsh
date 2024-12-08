import {createRoute, RouteInstance} from "atomic-router";
import {combine, createStore} from "effector";

type LinkTitle = 'main' | 'aboutUs' | 'products' | 'career' | 'uploads' | 'education';

type InternalLink = {
    name: string;
    title: LinkTitle;
    to: RouteInstance<Record<PropertyKey, unknown>>;
};

export const routeFromSidebarToMain = createRoute();
export const routeFromSidebarToAboutUs = createRoute();
export const routeFromSidebarToProducts = createRoute();
export const routeFromSidebarToCareer = createRoute();
export const routeFromSidebarToUploads = createRoute();
export const routeFromSidebarToEducation = createRoute();

export const menuItems : InternalLink[] = [
    {
        name: 'Главная',
        title: 'main',
        to: routeFromSidebarToMain,
    },
    {
        name: 'О нас',
        title: 'aboutUs',
        to: routeFromSidebarToAboutUs,
    },
    {
        name: 'Продукция',
        title: 'products',
        to: routeFromSidebarToProducts,
    },

    {
        name: 'Карьера',
        title: 'career',
        to: routeFromSidebarToCareer,
    },
    //
    {
        name: 'Загрузки',
        title: 'uploads',
        to: routeFromSidebarToUploads,
    },
    {
        name: 'Обучение',
        title: 'education',
        to: routeFromSidebarToEducation,
    },
];

export const $menuItems = createStore(menuItems);

export const $routesOpenState = combine(
    {
        main: routeFromSidebarToMain.$isOpened,
        aboutUs: routeFromSidebarToAboutUs.$isOpened,
        products: routeFromSidebarToProducts.$isOpened,
        career: routeFromSidebarToCareer.$isOpened,
        uploads: routeFromSidebarToUploads.$isOpened,
        education: routeFromSidebarToEducation.$isOpened,
    },
    (routesOpenState) => routesOpenState as Record<LinkTitle, boolean>
);
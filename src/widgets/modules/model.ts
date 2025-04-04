import { createStore } from "effector";

export const data = [
  {
    image: "/assets/controller.png",
    id: 1,
    name: "МОДУЛИ ЦПУ",
  },
  {
    image: "/assets/controller.png",
    id: 2,
    name: "МОДУЛИ ВВОДА",
  },
  {
    image: "/assets/controller.png",
    id: 3,
    name: "МОДУЛИ ВЫВОДА",
  },
  {
    image: "/assets/controller.png",
    id: 4,
    name: "КОММУНИКАЦИОННЫЕ МОДУЛИ",
  },
];

export const $modules = createStore(data);

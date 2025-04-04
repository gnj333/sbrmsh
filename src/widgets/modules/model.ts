import { createStore } from "effector";
import Controller from "../../shared/assets/controller.png";

export const data = [
  {
    image: Controller,
    id: 1,
    name: "МОДУЛИ ЦПУ",
  },
  {
    image: Controller,
    id: 2,
    name: "МОДУЛИ ВВОДА",
  },
  {
    image: Controller,
    id: 3,
    name: "МОДУЛИ ВЫВОДА",
  },
  {
    image: Controller,
    id: 4,
    name: "КОММУНИКАЦИОННЫЕ МОДУЛИ",
  },
];

export const $modules = createStore(data);

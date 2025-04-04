import { createStore } from "effector";

export const data = [
  {
    image: "/assets/elon.jpg",
    date: "19.03.2025",
    text: "Прошли переговоры с Илоном Маском по применению автоматики Сиббурмаш в следующих версиях Tesla",
    id: 1,
  },
  {
    image: "/assets/docs.png",
    date: "20.03.2025",
    text: "СБМ получена декларация о соответствие требованиями ЕЭС",
    id: 2,
  },
  {
    image: "/assets/photo.png",
    date: "21.03.2025",
    text: "СибБурмаш принял участие в Тюменском нефтегазовом форуме",
    id: 3,
  },
];

export const $news = createStore(data);

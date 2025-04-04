import { createStore } from "effector";
import Elon from "../../shared/assets/elon.jpg";
import Docs from "../../shared/assets/docs.png";
import Photo from "../../shared/assets/photo.png";

export const data = [
  {
    image: Elon,
    date: "19.03.2025",
    text: "Прошли переговоры с Илоном Маском по применению автоматики Сиббурмаш в следующих версиях Tesla",
    id: 1,
  },
  {
    image: Docs,
    date: "20.03.2025",
    text: "СБМ получена декларация о соответствие требованиями ЕЭС",
    id: 2,
  },
  {
    image: Photo,
    date: "21.03.2025",
    text: "СибБурмаш принял участие в Тюменском нефтегазовом форуме",
    id: 3,
  },
];

export const $news = createStore(data);
